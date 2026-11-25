import { useCallback, useEffect, useRef, useState } from 'react'
import { set, unset } from 'sanity'
import { Box, Button, Card, Dialog, Flex, Stack, Text, TextArea } from '@sanity/ui'
import { AddIcon, RemoveIcon, TrashIcon } from '@sanity/icons'

/**
 * Editor for the `table` type from @sanity/table, used in place of the
 * plugin's own input. It stores the same shape ({ rows: [{ _key, _type,
 * cells: string[] }] }), so existing tables open unchanged and the website
 * renders them as before. What it changes:
 *
 * - Focus survives leaving the window. The table is edited inside the
 *   Portable Text "Edit" dialog, and when the window regains focus the
 *   dialog's focus trap moves focus to its close button, so Ctrl+V went
 *   nowhere until the cell was clicked again. The last cell (and caret) is
 *   remembered and focused again when the window comes back.
 * - Cells are multi-line text areas, so pasted paragraphs keep their breaks.
 * - Pasting cells copied from Excel, Google Sheets, Word or Google Docs (tab
 *   separated) fills the grid from the current cell, adding rows and columns
 *   as needed.
 * - Typing patches only the cell being edited.
 */

const newKey = () =>
  globalThis.crypto?.randomUUID?.() ?? `${Date.now().toString(36)}${Math.random().toString(36).slice(2)}`

const cellId = (rowKey, cellIndex) => `${rowKey}:${cellIndex}`

// Tab-separated text, as spreadsheets and document tables put on the clipboard.
// Quoted fields (a cell containing a line break) are unquoted.
const parseGrid = (text) => {
  const rows = []
  let row = []
  let cell = ''
  let quoted = false
  const src = text.replace(/\r\n?/g, '\n').replace(/\n$/, '')
  for (let i = 0; i < src.length; i++) {
    const ch = src[i]
    if (quoted) {
      if (ch === '"' && src[i + 1] === '"') {
        cell += '"'
        i++
      } else if (ch === '"') quoted = false
      else cell += ch
    } else if (ch === '"' && cell === '') quoted = true
    else if (ch === '\t') {
      row.push(cell)
      cell = ''
    } else if (ch === '\n') {
      row.push(cell)
      rows.push(row)
      row = []
      cell = ''
    } else cell += ch
  }
  row.push(cell)
  rows.push(row)
  return rows.map((r) => r.map((c) => c.trim()))
}

export function BlogTableInput(props) {
  const { value, onChange, schemaType } = props
  const rowType = schemaType?.fields?.find((f) => f.name === 'rows')?.type?.of?.[0]?.name || 'tableRow'
  const rows = Array.isArray(value?.rows) ? value.rows : []
  const columnCount = rows[0]?.cells?.length || 0

  const containerRef = useRef(null)
  const lastFocus = useRef(null) // { id, start, end }
  const [confirm, setConfirm] = useState(null) // { label, run }

  const setRows = useCallback((nextRows) => onChange(set({ ...value, rows: nextRows })), [onChange, value])
  const makeRow = (cells) => ({ _type: rowType, _key: newKey(), cells })

  /* ---- Focus: return to the last cell when the window regains focus ---- */
  useEffect(() => {
    // Only when the window was left while typing in one of this table's cells
    let wasEditing = false
    const leave = () => {
      wasEditing = Boolean(containerRef.current?.contains(document.activeElement) && document.activeElement?.dataset?.cell)
    }
    const restore = () => {
      const saved = lastFocus.current
      const root = containerRef.current
      if (!wasEditing || !saved || !root) return
      wasEditing = false
      // Let the dialog's focus trap act first, then take focus back.
      setTimeout(() => {
        const active = document.activeElement
        if (active && active.dataset?.cell) return
        const el = root.querySelector(`[data-cell="${CSS.escape(saved.id)}"]`)
        if (!el) return
        el.focus({ preventScroll: true })
        try {
          el.setSelectionRange(saved.start, saved.end)
        } catch {
          /* element without a selection API */
        }
      }, 60)
    }
    window.addEventListener('blur', leave)
    window.addEventListener('focus', restore)
    return () => {
      window.removeEventListener('blur', leave)
      window.removeEventListener('focus', restore)
    }
  }, [])

  const remember = (e) => {
    const el = e.currentTarget
    lastFocus.current = { id: el.dataset.cell, start: el.selectionStart, end: el.selectionEnd }
  }

  /* ---- Editing ---- */
  const updateCell = (row, cellIndex, text) =>
    onChange(set(text, ['rows', { _key: row._key }, 'cells', cellIndex]))

  const pasteGrid = (e, rowIndex, cellIndex) => {
    const text = e.clipboardData?.getData('text/plain') || ''
    if (!text.includes('\t')) return // plain text: let the cell take it as typed text
    e.preventDefault()
    const grid = parseGrid(text)
    const width = Math.max(columnCount, cellIndex + Math.max(...grid.map((r) => r.length)))
    const next = rows.map((r) => ({ ...r, cells: [...r.cells, ...Array(width - r.cells.length).fill('')] }))
    while (next.length < rowIndex + grid.length) next.push(makeRow(Array(width).fill('')))
    grid.forEach((line, i) =>
      line.forEach((cell, j) => {
        next[rowIndex + i].cells[cellIndex + j] = cell
      })
    )
    setRows(next)
  }

  const addRow = (at = rows.length) => {
    const next = [...rows]
    next.splice(at, 0, makeRow(Array(columnCount || 2).fill('')))
    setRows(next)
  }
  const addColumn = () => setRows(rows.map((r) => ({ ...r, cells: [...r.cells, ''] })))
  const removeRow = (index) => setRows(rows.filter((_, i) => i !== index))
  const removeColumn = (index) => setRows(rows.map((r) => ({ ...r, cells: r.cells.filter((_, i) => i !== index) })))
  const createTable = () => onChange(set({ ...value, rows: [makeRow(['', '']), makeRow(['', ''])] }))

  const ask = (label, run) => setConfirm({ label, run })

  if (rows.length === 0) {
    return (
      <Button icon={AddIcon} text="Create table" mode="ghost" tone="primary" fontSize={1} padding={3} onClick={createTable} />
    )
  }

  return (
    <Stack space={3} ref={containerRef}>
      <Text size={1} muted>
        The first row is the table header. Paste cells copied from Excel, Google Sheets or a Word table to fill
        several cells at once.
      </Text>

      <Box style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: 4 }}>
          <tbody>
            {rows.map((row, ri) => (
              <tr key={row._key}>
                {row.cells.map((cell, ci) => (
                  <td key={ci} style={{ verticalAlign: 'top', minWidth: 160 }}>
                    <TextArea
                      data-cell={cellId(row._key, ci)}
                      aria-label={`Row ${ri + 1}, column ${ci + 1}`}
                      fontSize={1}
                      padding={3}
                      rows={Math.min(8, Math.max(1, String(cell || '').split('\n').length))}
                      value={cell || ''}
                      weight={ri === 0 ? 'semibold' : undefined}
                      onChange={(e) => updateCell(row, ci, e.currentTarget.value)}
                      onPaste={(e) => pasteGrid(e, ri, ci)}
                      onFocus={remember}
                      onSelect={remember}
                      onKeyUp={remember}
                    />
                  </td>
                ))}
                <td style={{ verticalAlign: 'top', width: 1 }}>
                  <Button
                    icon={RemoveIcon}
                    mode="bleed"
                    padding={2}
                    title="Remove this row"
                    onClick={() => (rows.length <= 1 ? ask('table', () => onChange(unset())) : ask('row', () => removeRow(ri)))}
                  />
                </td>
              </tr>
            ))}
            <tr>
              {Array.from({ length: columnCount }, (_, ci) => (
                <td key={ci} style={{ textAlign: 'center' }}>
                  <Button
                    icon={RemoveIcon}
                    mode="bleed"
                    padding={2}
                    title="Remove this column"
                    onClick={() => (columnCount <= 1 ? ask('table', () => onChange(unset())) : ask('column', () => removeColumn(ci)))}
                  />
                </td>
              ))}
              <td />
            </tr>
          </tbody>
        </table>
      </Box>

      <Flex gap={2} wrap="wrap">
        <Button icon={AddIcon} text="Add row" mode="ghost" fontSize={1} padding={2} onClick={() => addRow()} />
        <Button icon={AddIcon} text="Add column" mode="ghost" fontSize={1} padding={2} onClick={addColumn} />
        <Button
          icon={TrashIcon}
          text="Remove table"
          mode="bleed"
          tone="critical"
          fontSize={1}
          padding={2}
          onClick={() => ask('table', () => onChange(unset()))}
        />
      </Flex>

      {confirm && (
        <Dialog id="blog-table-confirm" header={`Remove ${confirm.label}`} onClose={() => setConfirm(null)} zOffset={1000}>
          <Card padding={4}>
            <Stack space={4}>
              <Text>Are you sure you want to remove this {confirm.label}?</Text>
              <Flex gap={2} justify="flex-end">
                <Button text="Cancel" mode="ghost" onClick={() => setConfirm(null)} />
                <Button
                  text="Remove"
                  tone="critical"
                  onClick={() => {
                    confirm.run()
                    setConfirm(null)
                  }}
                />
              </Flex>
            </Stack>
          </Card>
        </Dialog>
      )}
    </Stack>
  )
}
