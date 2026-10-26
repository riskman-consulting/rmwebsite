import { useCallback, useEffect, useMemo, useState } from 'react'
import { useClient } from 'sanity'
import { useRouter } from 'sanity/router'
import {
  Badge,
  Button,
  Card,
  Container,
  Flex,
  Grid,
  Heading,
  Inline,
  Spinner,
  Stack,
  Tab,
  TabList,
  TabPanel,
  Text,
  TextInput,
  useRootTheme,
} from '@sanity/ui'
import { LaunchIcon, SearchIcon } from '@sanity/icons'

const SITE = 'https://www.riskman.in'
const RANGES = [7, 30, 90]

// Bar fill per Studio theme — checked for contrast against each surface
const BAR = { light: '#2276fc', dark: '#5b8cf5' }

/* ------------------------------------------------------------------ */
/* Helpers                                                             */
/* ------------------------------------------------------------------ */

const dayKey = (date) => new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Kolkata' }).format(date)

/** The `days` calendar days ending `offset` days ago, oldest first. */
const lastDays = (days, offset = 0) =>
  Array.from({ length: days }, (_, i) => dayKey(new Date(Date.now() - (offset + days - 1 - i) * 86400000)))

const regionNames = typeof Intl.DisplayNames === 'function' ? new Intl.DisplayNames(['en'], { type: 'region' }) : null
const countryName = (code) => {
  if (code === 'XX') return 'Unknown'
  try {
    return regionNames?.of(code) || code
  } catch {
    return code
  }
}

const number = (n) => new Intl.NumberFormat('en-IN').format(Math.round(n || 0))
const shortDate = (key) => new Date(`${key}T00:00:00`).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })
const dateTime = (iso) => new Date(iso).toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' })

const sumMaps = (docs, field) => {
  const total = {}
  for (const doc of docs) {
    for (const [key, value] of Object.entries(doc[field] || {})) total[key] = (total[key] || 0) + (value || 0)
  }
  return total
}
const sumField = (docs, field) => docs.reduce((acc, doc) => acc + (doc[field] || 0), 0)

// Counter keys are stored as "<prefix>_<name>" (see api/track.js)
const stripPrefix = (key) => key.replace(/^[a-z]_/, '').replace(/_/g, ' ')

const toRows = (map, label, limit = 8) =>
  Object.entries(map)
    .map(([key, value]) => ({ label: label(key), value }))
    .filter((r) => r.value > 0)
    .sort((a, b) => b.value - a.value)
    .slice(0, limit)

/** Round an axis maximum up to 1, 2 or 5 × a power of ten. */
const niceMax = (value) => {
  if (value <= 5) return 5
  const power = 10 ** Math.floor(Math.log10(value))
  return [1, 2, 5, 10].map((m) => m * power).find((m) => m >= value)
}

/* ------------------------------------------------------------------ */
/* Building blocks                                                     */
/* ------------------------------------------------------------------ */

const Panel = ({ title, hint, children, action }) => (
  <Card padding={4} radius={3} border>
    <Stack space={4}>
      <Flex justify="space-between" align="flex-start" gap={3}>
        <Stack space={2}>
          <Text size={2} weight="semibold">
            {title}
          </Text>
          {hint && (
            <Text size={1} muted>
              {hint}
            </Text>
          )}
        </Stack>
        {action}
      </Flex>
      {children}
    </Stack>
  </Card>
)

/** Change vs the previous period: an arrow plus the number, never colour alone. */
const Delta = ({ current, previous }) => {
  if (!previous) return <Text size={1} muted>No earlier data to compare</Text>
  const pct = Math.round(((current - previous) / previous) * 100)
  const tone = pct > 0 ? 'positive' : pct < 0 ? 'critical' : 'default'
  return (
    <Inline space={2}>
      <Badge tone={tone} fontSize={1}>
        {pct > 0 ? '↑' : pct < 0 ? '↓' : '→'} {Math.abs(pct)}%
      </Badge>
      <Text size={1} muted>
        vs previous period
      </Text>
    </Inline>
  )
}

const StatTile = ({ label, value, sub }) => (
  <Card padding={4} radius={3} border>
    <Stack space={3}>
      <Text size={1} muted>
        {label}
      </Text>
      <Text size={4} weight="bold">
        {value}
      </Text>
      {sub}
    </Stack>
  </Card>
)

/** Ranked list with an inline share bar; text stays in ink, the bar carries the colour. */
const RankList = ({ rows, color, empty = 'No data yet' }) => {
  if (!rows.length)
    return (
      <Text size={1} muted>
        {empty}
      </Text>
    )
  const max = Math.max(1, ...rows.map((r) => r.value))
  return (
    <Stack space={3}>
      {rows.map((row) => (
        <Stack key={row.label} space={2}>
          <Flex justify="space-between" gap={3}>
            <Text size={1} textOverflow="ellipsis">
              {row.label}
            </Text>
            <Text size={1} weight="semibold">
              {number(row.value)}
            </Text>
          </Flex>
          <div style={{ height: 4, borderRadius: 2, background: 'var(--card-border-color)' }}>
            <div style={{ width: `${(row.value / max) * 100}%`, height: '100%', borderRadius: 2, background: color }} />
          </div>
        </Stack>
      ))}
    </Stack>
  )
}

/** Vertical bars with a y-axis, gridlines and a hover read-out. */
const BarChart = ({ items, color, height = 200, label, readout, ariaLabel, ticks, restIndex }) => {
  const [hover, setHover] = useState(null)
  const max = niceMax(Math.max(0, ...items.map((i) => i.value)))
  const gap = items.length > 45 ? 1 : 2
  // Without a hover the read-out shows `restIndex` (default: the latest bar)
  const active = items[hover ?? restIndex ?? items.length - 1]
  const gridLines = [1, 0.5, 0]

  return (
    <Stack space={3}>
      <Text size={1} muted>
        {active ? readout(active) : ''}
      </Text>
      <Flex gap={2}>
        {/* y-axis */}
        <div style={{ position: 'relative', width: 36, height, flexShrink: 0 }}>
          {gridLines.map((f) => (
            <div key={f} style={{ position: 'absolute', right: 4, top: `${(1 - f) * 100}%`, transform: 'translateY(-50%)' }}>
              <Text size={0} muted>
                {number(max * f)}
              </Text>
            </div>
          ))}
        </div>
        <div style={{ position: 'relative', flex: 1, height }}>
          {gridLines.map((f) => (
            <div
              key={f}
              style={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: `${(1 - f) * 100}%`,
                borderTop: `1px ${f ? 'dashed' : 'solid'} var(--card-border-color)`,
              }}
            />
          ))}
          <div
            role="img"
            aria-label={ariaLabel}
            onMouseLeave={() => setHover(null)}
            style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'flex-end', gap }}
          >
            {items.map((item, index) => (
              // The whole column is the hover target, not only the bar
              <div
                key={item.key}
                onMouseEnter={() => setHover(index)}
                style={{ flex: 1, height: '100%', display: 'flex', alignItems: 'flex-end' }}
              >
                <div
                  style={{
                    width: '100%',
                    height: `${(item.value / max) * 100}%`,
                    minHeight: item.value ? 2 : 0,
                    background: color,
                    opacity: hover !== null && hover !== index ? 0.45 : 1,
                    borderRadius: '4px 4px 0 0',
                    transition: 'opacity 120ms',
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </Flex>
      <Flex justify="space-between" style={{ paddingLeft: 44 }}>
        {(ticks || [items[0], items[items.length - 1]]).map((t) => (
          <Text key={t.key} size={0} muted>
            {label(t)}
          </Text>
        ))}
      </Flex>
    </Stack>
  )
}

const SetupSteps = () => (
  <Card padding={4} radius={3} tone="caution" border>
    <Stack space={4}>
      <Text size={2} weight="semibold">
        No visits recorded yet — finish the setup
      </Text>
      <Stack space={3}>
        {[
          'Create a Sanity API token with Editor rights (sanity.io/manage → API → Tokens).',
          'In Vercel, add it as the environment variable SANITY_WRITE_TOKEN (not starting with VITE_) and redeploy.',
          'Open www.riskman.in. Visits on localhost and preview links are not counted.',
        ].map((step, i) => (
          <Flex key={step} gap={3}>
            <Text size={1} weight="bold">
              {i + 1}.
            </Text>
            <Text size={1}>{step}</Text>
          </Flex>
        ))}
      </Stack>
    </Stack>
  </Card>
)

/* ------------------------------------------------------------------ */
/* Overview tab                                                        */
/* ------------------------------------------------------------------ */

const Overview = ({ view, range, color }) => {
  const [metric, setMetric] = useState('views')
  if (!view) return null
  const { now, before } = view
  const searchShare = now.sessions ? Math.round((now.search / now.sessions) * 100) : 0
  const dayItems = view.days.map((d) => ({ key: d, value: view.byDay[d]?.[metric] || 0, doc: view.byDay[d] }))
  const middle = dayItems[Math.floor(dayItems.length / 2)]

  return (
    <Stack space={4}>
      {now.views === 0 && <SetupSteps />}

      <Grid columns={[1, 2, 3, 5]} gap={3}>
        <StatTile label="Visitors" value={number(now.visitors)} sub={<Delta current={now.visitors} previous={before.visitors} />} />
        <StatTile label="Page views" value={number(now.views)} sub={<Delta current={now.views} previous={before.views} />} />
        <StatTile label="Visits" value={number(now.sessions)} sub={<Delta current={now.sessions} previous={before.sessions} />} />
        <StatTile
          label="Visits from search engines"
          value={number(now.search)}
          sub={
            <Text size={1} muted>
              {searchShare}% of all visits
            </Text>
          }
        />
        <StatTile
          label="Today so far"
          value={number(view.today?.views)}
          sub={
            <Text size={1} muted>
              {number(view.today?.visitors)} visitors
            </Text>
          }
        />
      </Grid>

      <Panel
        title={metric === 'views' ? 'Page views per day' : 'Visitors per day'}
        hint={`Last ${range} days, India time`}
        action={
          <Inline space={1}>
            {[
              ['views', 'Page views'],
              ['visitors', 'Visitors'],
            ].map(([key, text]) => (
              <Button
                key={key}
                text={text}
                fontSize={1}
                padding={2}
                mode={metric === key ? 'default' : 'ghost'}
                tone={metric === key ? 'primary' : 'default'}
                onClick={() => setMetric(key)}
              />
            ))}
          </Inline>
        }
      >
        <BarChart
          items={dayItems}
          color={color}
          ariaLabel={`${metric === 'views' ? 'Page views' : 'Visitors'} per day for the last ${range} days`}
          label={(item) => shortDate(item.key)}
          ticks={[dayItems[0], middle, dayItems[dayItems.length - 1]]}
          readout={(item) =>
            `${shortDate(item.key)} — ${number(item.doc?.views)} page views · ${number(item.doc?.visitors)} visitors · ${number(item.doc?.sessions)} visits`
          }
        />
      </Panel>

      <Grid columns={[1, 1, 2]} gap={3}>
        <Panel title="Top pages" hint="Page views">
          <RankList rows={view.pages} color={color} />
        </Panel>
        <Panel title="Landing pages from search" hint="Where visits from Google and other search engines start — your pages that rank">
          <RankList rows={view.searchLandings} color={color} empty="No visits from search engines yet" />
        </Panel>
      </Grid>

      <Grid columns={[1, 1, 3]} gap={3}>
        <Panel title="Where visits come from" hint="Visits">
          <RankList rows={view.sources} color={color} />
        </Panel>
        <Panel title="Devices" hint="Visitors">
          <RankList rows={view.devices} color={color} />
        </Panel>
        <Panel title="Countries" hint="Visitors">
          <RankList rows={view.countries} color={color} />
        </Panel>
      </Grid>

      <Grid columns={[1, 1, 2]} gap={3}>
        <Panel title="Busiest hours" hint="Page views by hour of the day, India time">
          <BarChart
            items={view.hours}
            color={color}
            height={140}
            ariaLabel="Page views by hour of the day"
            label={(item) => `${item.key}:00`}
            ticks={[view.hours[0], view.hours[6], view.hours[12], view.hours[18], view.hours[23]]}
            restIndex={view.hours.reduce((best, h, i, all) => (h.value > all[best].value ? i : best), 0)}
            readout={(item) => `${item.key}:00–${item.key}:59 — ${number(item.value)} page views`}
          />
        </Panel>
        <Panel title="Missing pages people opened" hint="URLs that showed the Not Found page — add a redirect for the frequent ones">
          <RankList rows={view.notFound} color={color} empty="No missing pages opened" />
        </Panel>
      </Grid>

      <Panel title="Entry pages" hint="The first page of each visit">
        <RankList rows={view.landings} color={color} />
      </Panel>
    </Stack>
  )
}

/* ------------------------------------------------------------------ */
/* SEO tab                                                             */
/* ------------------------------------------------------------------ */

const SEVERITY_TONE = { error: 'critical', warning: 'caution', info: 'default' }

/** One name per kind of issue, so pages with "61" and "79" characters group together. */
const issueGroup = (text) =>
  [
    [/^Title is \d+ characters/, 'Title longer than 60 characters'],
    [/^Title is only/, 'Title shorter than 25 characters'],
    [/^Description is only/, 'Description shorter than 70 characters'],
    [/main headings \(h1\)/, 'More than one main heading (h1)'],
    [/^No main heading/, 'No main heading (h1)'],
    [/^Only \d+ words/, 'Under 300 words of text'],
    [/^Duplicate of/, 'Duplicate of another page (canonical points elsewhere)'],
  ].find(([re]) => re.test(text))?.[1] || text

/** Same-origin on the live Studio; from the live site when the Studio runs locally. */
const loadReport = async () => {
  for (const url of ['/seo-report.json', `${SITE}/seo-report.json`]) {
    try {
      const response = await fetch(url, { cache: 'no-store' })
      if (!response.ok) continue
      const data = await response.json()
      if (Array.isArray(data?.pages)) return { ...data, source: url }
    } catch {
      // try the next one
    }
  }
  return null
}

const ScoreTile = ({ score }) => {
  const tone = score >= 85 ? 'positive' : score >= 60 ? 'caution' : 'critical'
  const word = score >= 85 ? 'Good' : score >= 60 ? 'Needs work' : 'Poor'
  return (
    <Card padding={4} radius={3} border tone={tone}>
      <Stack space={3}>
        <Text size={1} muted>
          SEO score
        </Text>
        <Text size={4} weight="bold">
          {score} / 100
        </Text>
        <Text size={1}>{word} — share of indexable pages with no warnings</Text>
      </Stack>
    </Card>
  )
}

const BLOG_QUERY = `*[_type == "post" && !(_id in path("drafts.**"))] | order(coalesce(publishedDate, _createdAt) desc){
  _id, title, "slug": slug.current, seoTitle, metaDescription, primaryKeyword,
  "hasImage": defined(mainImage.asset), "alt": mainImage.alt, "faqs": count(faqs),
  "updated": coalesce(lastUpdated, publishedDate, _updatedAt)
}`

const blogChecks = (post) => {
  const title = post.seoTitle || post.title || ''
  const desc = post.metaDescription || ''
  const keyword = (post.primaryKeyword || '').toLowerCase()
  const months = (Date.now() - Date.parse(post.updated)) / (30 * 86400000)
  return [
    ['SEO title', post.seoTitle && title.length <= 60, post.seoTitle ? `${title.length} chars` : 'missing'],
    ['Meta description', desc.length >= 70 && desc.length <= 160, desc ? `${desc.length} chars` : 'missing'],
    ['Keyword set', Boolean(keyword), keyword || 'missing'],
    ['Keyword in title', keyword && title.toLowerCase().includes(keyword), keyword ? '' : '—'],
    ['Image with alt text', post.hasImage && Boolean(post.alt), post.hasImage ? (post.alt ? '' : 'no alt') : 'no image'],
    ['FAQs', post.faqs > 0, `${post.faqs || 0}`],
    ['Updated in the last year', months <= 12, `${Math.round(months)} months ago`],
  ]
}

const Check = ({ ok, label, note }) => (
  <Badge tone={ok ? 'positive' : 'caution'} fontSize={0} title={note}>
    {ok ? '✓' : '!'} {label}
    {note && !ok ? ` (${note})` : ''}
  </Badge>
)

const Seo = ({ report, posts, landings, color }) => {
  const [filter, setFilter] = useState('issues')
  const [query, setQuery] = useState('')
  const [issueFilter, setIssueFilter] = useState(null)

  if (report === undefined)
    return (
      <Flex justify="center" padding={6}>
        <Spinner muted />
      </Flex>
    )

  if (!report)
    return (
      <Card padding={4} radius={3} tone="caution" border>
        <Text size={1}>
          The SEO report is created when the site is built (seo-report.json). It will appear here after the next deploy of
          www.riskman.in.
        </Text>
      </Card>
    )

  const { totals } = report
  const issueGroups = {}
  for (const page of report.pages) {
    for (const issue of page.issues) {
      const key = issueGroup(issue.text)
      issueGroups[key] ||= { severity: issue.severity, label: key, pages: 0 }
      issueGroups[key].pages++
    }
  }
  const groups = Object.values(issueGroups).sort(
    (a, b) => ['error', 'warning', 'info'].indexOf(a.severity) - ['error', 'warning', 'info'].indexOf(b.severity) || b.pages - a.pages
  )

  const pages = report.pages.filter((p) => {
    if (query && !`${p.route} ${p.title}`.toLowerCase().includes(query.toLowerCase())) return false
    if (issueFilter)
      return p.issues.some((i) => issueGroup(i.text) === issueFilter)
    if (filter === 'issues') return p.issues.some((i) => i.severity !== 'info')
    return true
  })

  const blogRows = (posts || []).map((post) => ({ post, checks: blogChecks(post) }))
  const blogScore = blogRows.length
    ? Math.round((blogRows.reduce((n, r) => n + r.checks.filter((c) => c[1]).length, 0) / (blogRows.length * 7)) * 100)
    : null

  return (
    <Stack space={4}>
      <Grid columns={[1, 2, 4]} gap={3}>
        <ScoreTile score={report.score} />
        <StatTile
          label="Pages Google can index"
          value={number(totals.indexable)}
          sub={
            <Text size={1} muted>
              {number(totals.inSitemap)} in the sitemap
            </Text>
          }
        />
        <StatTile
          label="Text readable without JavaScript"
          value={`${number(totals.prerendered)} pages`}
          sub={
            <Text size={1} muted>
              {number(totals.withStructuredData)} with structured data
            </Text>
          }
        />
        <StatTile
          label="Problems found"
          value={`${number(totals.errors)} errors`}
          sub={
            <Text size={1} muted>
              {number(totals.warnings)} warnings · checked {dateTime(report.generatedAt)}
            </Text>
          }
        />
      </Grid>

      <Grid columns={[1, 1, 2]} gap={3}>
        <Panel title="What to fix" hint="Click an issue to see its pages">
          <Stack space={2}>
            {groups.length === 0 && (
              <Text size={1} muted>
                Nothing to fix
              </Text>
            )}
            {groups.map((g) => (
              <Card
                key={g.label}
                padding={3}
                radius={2}
                tone={issueFilter === g.label ? 'primary' : 'default'}
                border
                as="button"
                onClick={() => setIssueFilter(issueFilter === g.label ? null : g.label)}
                style={{ textAlign: 'left', cursor: 'pointer' }}
              >
                <Flex justify="space-between" align="center" gap={3}>
                  <Inline space={2}>
                    <Badge tone={SEVERITY_TONE[g.severity]} fontSize={0}>
                      {g.severity}
                    </Badge>
                    <Text size={1}>{g.label}</Text>
                  </Inline>
                  <Text size={1} weight="semibold">
                    {g.pages} {g.pages === 1 ? 'page' : 'pages'}
                  </Text>
                </Flex>
              </Card>
            ))}
          </Stack>
        </Panel>

        <Panel title="Pages ranking in search" hint="Landing pages of visits from search engines, in the selected period">
          <RankList rows={landings} color={color} empty="No visits from search engines yet" />
          <Inline space={2}>
            <Button as="a" href={`${SITE}/sitemap.xml`} target="_blank" rel="noreferrer" icon={LaunchIcon} text="Sitemap" mode="ghost" fontSize={1} />
            <Button as="a" href={`${SITE}/robots.txt`} target="_blank" rel="noreferrer" icon={LaunchIcon} text="robots.txt" mode="ghost" fontSize={1} />
            <Button
              as="a"
              href="https://search.google.com/search-console"
              target="_blank"
              rel="noreferrer"
              icon={LaunchIcon}
              text="Search Console"
              mode="ghost"
              fontSize={1}
            />
          </Inline>
        </Panel>
      </Grid>

      <Panel
        title="Every page"
        hint={issueFilter ? `Showing pages with: ${issueFilter}` : 'Title, description, heading and content checks from the last build'}
        action={
          <Inline space={1}>
            {[
              ['issues', 'With problems'],
              ['all', 'All pages'],
            ].map(([key, text]) => (
              <Button
                key={key}
                text={text}
                fontSize={1}
                padding={2}
                mode={filter === key && !issueFilter ? 'default' : 'ghost'}
                tone={filter === key && !issueFilter ? 'primary' : 'default'}
                onClick={() => {
                  setFilter(key)
                  setIssueFilter(null)
                }}
              />
            ))}
          </Inline>
        }
      >
        <TextInput icon={SearchIcon} placeholder="Search by URL or title" value={query} onChange={(e) => setQuery(e.currentTarget.value)} />
        <Stack space={2}>
          {pages.length === 0 && (
            <Text size={1} muted>
              No pages match
            </Text>
          )}
          {pages.map((p) => (
            <Card key={p.route} padding={3} radius={2} border>
              <Stack space={3}>
                <Flex justify="space-between" gap={3} align="center">
                  <Text size={1} weight="semibold" textOverflow="ellipsis">
                    <a href={`${SITE}${p.route}`} target="_blank" rel="noreferrer" style={{ color: 'inherit' }}>
                      {p.route}
                    </a>
                  </Text>
                  <Inline space={1}>
                    <Badge fontSize={0} tone={p.inSitemap ? 'positive' : 'default'}>
                      {p.inSitemap ? '✓ sitemap' : 'not in sitemap'}
                    </Badge>
                    {p.schemas.length > 0 && <Badge fontSize={0}>{p.schemas.join(', ')}</Badge>}
                  </Inline>
                </Flex>
                <Text size={1} muted textOverflow="ellipsis">
                  {p.title} · {p.title.length} chars · description {p.description.length} chars
                  {p.words !== null ? ` · ${number(p.words)} words · ${p.h1} h1` : ''}
                </Text>
                {p.issues.length > 0 && (
                  <Inline space={1}>
                    {p.issues.map((issue) => (
                      <Badge key={issue.text} tone={SEVERITY_TONE[issue.severity]} fontSize={0}>
                        {issue.text}
                      </Badge>
                    ))}
                  </Inline>
                )}
              </Stack>
            </Card>
          ))}
        </Stack>
      </Panel>

      <Panel
        title="Blog SEO"
        hint={blogScore === null ? 'Checks each published blog post' : `${blogScore}% of checks pass across ${blogRows.length} published posts`}
      >
        <Stack space={2}>
          {blogRows.map(({ post, checks }) => (
            <Card key={post._id} padding={3} radius={2} border>
              <Stack space={3}>
                <Text size={1} weight="semibold" textOverflow="ellipsis">
                  {post.title}
                </Text>
                <Inline space={1}>
                  {checks.map(([label, ok, note]) => (
                    <Check key={label} ok={Boolean(ok)} label={label} note={note} />
                  ))}
                </Inline>
              </Stack>
            </Card>
          ))}
        </Stack>
      </Panel>
    </Stack>
  )
}

/* ------------------------------------------------------------------ */
/* Content tab                                                         */
/* ------------------------------------------------------------------ */

const DRAFTS = 'drafts.'
const isDraft = (id) => id.startsWith(DRAFTS)
const baseId = (id) => (isDraft(id) ? id.slice(DRAFTS.length) : id)

// Readable names for document types in the lists
const TYPE_LABELS = {
  post: 'Blog post',
  event: 'Event',
  upcomingEvent: 'Upcoming event',
  leader: 'Team member',
  homePage: 'Home page',
  aboutPage: 'About page',
  careerPage: 'Careers page',
  industry: 'Industry',
  service: 'Service',
  photo: 'Moment',
  engagement: 'Global engagement',
  mediaAsset: 'Media asset',
  mediaFolder: 'Media folder',
  moduleVideo: 'Module video',
}
const typeLabel = (type) => TYPE_LABELS[type] || type

const CONTENT_QUERY = `{
  "posts": count(*[_type == "post" && !(_id in path("drafts.**"))]),
  "events": count(*[_type == "event" && !(_id in path("drafts.**"))]),
  "upcoming": count(*[_type == "upcomingEvent" && !(_id in path("drafts.**"))]),
  "team": count(*[_type == "leader" && !(_id in path("drafts.**"))]),
  "draftIds": *[_id in path("drafts.**") && !(_type match "sanity.*")]._id,
  "draftTypes": *[_id in path("drafts.**") && !(_type match "sanity.*")]._type,
  "notWebp": count(*[_type == "sanity.imageAsset" && !(mimeType in ["image/webp", "image/svg+xml", "image/gif"])]),
  "images": count(*[_type == "sanity.imageAsset"]),
  "careerId": *[_type == "careerPage" && !(_id in path("drafts.**"))][0]._id,
  "jobs": *[_type == "careerPage" && !(_id in path("drafts.**"))][0].jobOpenings[]{title, lastDate},
  "recent": *[!(_id in path("drafts.**")) && !(_type match "sanity.*") && !(_type match "system.*") && _type != "analyticsDay"]
    | order(_updatedAt desc)[0...8]{_id, _type, _updatedAt, "title": coalesce(title, name, heading, _type)}
}`

const DOC_FIELDS = `{_id, _type, _updatedAt, "title": coalesce(title, name, heading, _type)}`

/**
 * One row per document: a published copy and a draft of the same document
 * are merged, and the pair's state becomes the status.
 */
const mergeVersions = (docs) => {
  const byId = new Map()
  for (const doc of docs) {
    const id = baseId(doc._id)
    const row = byId.get(id) || { id, type: doc._type, title: doc.title, updated: doc._updatedAt, published: false, draft: false }
    if (isDraft(doc._id)) {
      row.draft = true
      row.title = doc.title // the draft holds the newest title
    } else row.published = true
    if (doc._updatedAt > row.updated) row.updated = doc._updatedAt
    byId.set(id, row)
  }
  // Work in progress first, then the most recently edited
  return [...byId.values()].sort(
    (a, b) => Number(b.draft) - Number(a.draft) || b.updated.localeCompare(a.updated)
  )
}

const Status = ({ row }) => {
  if (!row.published)
    return (
      <Badge tone="caution" fontSize={0}>
        Draft · never published
      </Badge>
    )
  if (row.draft)
    return (
      <Badge tone="primary" fontSize={0}>
        Published · has unpublished changes
      </Badge>
    )
  return (
    <Badge tone="positive" fontSize={0}>
      Published
    </Badge>
  )
}

/** Opens the document in the Studio's editor. */
const useOpenDocument = () => {
  const router = useRouter()
  return useCallback((id, type) => router.navigateIntent('edit', { id, type }), [router])
}

const DocRows = ({ rows, openDoc, showType }) => {
  const [query, setQuery] = useState('')
  const shown = rows.filter((r) => !query || `${r.title} ${typeLabel(r.type)}`.toLowerCase().includes(query.toLowerCase()))
  return (
    <Stack space={3}>
      {rows.length > 8 && (
        <TextInput icon={SearchIcon} placeholder="Search by title" value={query} onChange={(e) => setQuery(e.currentTarget.value)} />
      )}
      {shown.length === 0 && (
        <Text size={1} muted>
          Nothing here
        </Text>
      )}
      {shown.map((row) => (
        <Card key={row.id} padding={3} radius={2} border>
          <Flex align="center" gap={3} wrap="wrap">
            <Stack space={2} style={{ flex: 1, minWidth: 220 }}>
              <Text size={1} weight="semibold" textOverflow="ellipsis">
                {row.title}
              </Text>
              <Text size={1} muted>
                {showType ? `${typeLabel(row.type)} · ` : ''}edited {dateTime(row.updated)}
                {row.note ? ` · ${row.note}` : ''}
              </Text>
            </Stack>
            {row.status !== false && <Status row={row} />}
            <Button text="Open" icon={LaunchIcon} mode="ghost" fontSize={1} padding={2} onClick={() => openDoc(row.openId || row.id, row.type)} />
          </Flex>
        </Card>
      ))}
    </Stack>
  )
}

// Tiles that open a list of documents below them
const TILES = [
  { key: 'posts', label: 'Blog posts', types: ['post'] },
  { key: 'events', label: 'Events', types: ['event'] },
  { key: 'upcoming', label: 'Upcoming events', types: ['upcomingEvent'] },
  { key: 'team', label: 'Team members', types: ['leader'] },
  { key: 'jobs', label: 'Job openings' },
  { key: 'drafts', label: 'Unpublished drafts' },
]

const Content = ({ content, client }) => {
  const openDoc = useOpenDocument()
  const [selected, setSelected] = useState('drafts')
  const [rows, setRows] = useState(null)

  const today = dayKey(new Date())
  const jobs = content?.jobs || []

  useEffect(() => {
    if (!content) return undefined
    let live = true
    setRows(null)
    const tile = TILES.find((t) => t.key === selected)

    const load = async () => {
      if (tile.types) {
        const docs = await client.fetch(`*[_type in $types]${DOC_FIELDS}`, { types: tile.types })
        return mergeVersions(docs)
      }
      if (selected === 'drafts') {
        // Every draft, plus the published copy where one exists, to tell new from changed
        const ids = content.draftIds.flatMap((id) => [id, baseId(id)])
        const docs = await client.fetch(`*[_id in $ids]${DOC_FIELDS}`, { ids })
        return mergeVersions(docs).filter((r) => r.draft)
      }
      // Job openings live inside the Careers page document
      return jobs.map((job, i) => ({
        id: `${content.careerId}-${i}`,
        openId: content.careerId,
        type: 'careerPage',
        title: job.title,
        updated: content.recent.find((d) => d._id === content.careerId)?._updatedAt || new Date().toISOString(),
        note: job.lastDate ? (job.lastDate < today ? `closed ${job.lastDate} — still listed` : `open until ${job.lastDate}`) : 'no last date',
        status: false,
      }))
    }

    load()
      .then((result) => live && setRows(result))
      .catch(() => live && setRows([]))
    return () => {
      live = false
    }
    // jobs and today are derived from content
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [client, content, selected])

  if (!content)
    return (
      <Flex justify="center" padding={6}>
        <Spinner muted />
      </Flex>
    )

  const expired = jobs.filter((j) => j.lastDate && j.lastDate < today)
  const draftsOf = (types) => content.draftTypes.filter((t) => types.includes(t)).length
  const values = {
    posts: [content.posts, draftsOf(['post'])],
    events: [content.events, draftsOf(['event'])],
    upcoming: [content.upcoming, draftsOf(['upcomingEvent'])],
    team: [content.team, draftsOf(['leader'])],
    jobs: [jobs.length, null],
    drafts: [content.draftIds.length, null],
  }
  const selectedTile = TILES.find((t) => t.key === selected)

  return (
    <Stack space={4}>
      <Grid columns={[2, 3, 6]} gap={3}>
        {TILES.map((tile) => {
          const [value, drafts] = values[tile.key]
          const active = tile.key === selected
          return (
            <Card
              key={tile.key}
              as="button"
              padding={4}
              radius={3}
              border
              tone={active ? 'primary' : 'default'}
              onClick={() => setSelected(tile.key)}
              // A Card rendered as a button drops its border; keep it so the tile reads as one
              style={{ textAlign: 'left', cursor: 'pointer', border: '1px solid var(--card-border-color)' }}
              aria-pressed={active}
            >
              <Stack space={3}>
                <Text size={1} muted>
                  {tile.label}
                </Text>
                <Text size={4} weight="bold">
                  {number(value)}
                </Text>
                <Text size={1} muted>
                  {drafts ? `+ ${drafts} in draft` : active ? 'Showing below' : 'Click to see the list'}
                </Text>
              </Stack>
            </Card>
          )
        })}
      </Grid>

      <Panel
        title={selectedTile.label}
        hint={
          selected === 'drafts'
            ? 'Changes that are saved but not live on the site yet. Open one and press Publish.'
            : selected === 'jobs'
              ? 'Job openings on the Careers page'
              : 'Published, draft-only and changed documents'
        }
      >
        {rows === null ? (
          <Flex justify="center" padding={4}>
            <Spinner muted />
          </Flex>
        ) : (
          <DocRows rows={rows} openDoc={openDoc} showType={selected === 'drafts'} />
        )}
      </Panel>

      <Grid columns={[1, 1, 2]} gap={3}>
        <Panel title="Needs attention">
          <Stack space={3}>
            <Flex justify="space-between" gap={3}>
              <Text size={1}>Images not in WebP (slower to load)</Text>
              <Badge tone={content.notWebp ? 'caution' : 'positive'}>
                {number(content.notWebp)} of {number(content.images)}
              </Badge>
            </Flex>
            <Card as="button" padding={2} radius={2} onClick={() => setSelected('jobs')} style={{ textAlign: 'left', cursor: 'pointer' }}>
              <Flex justify="space-between" gap={3}>
                <Text size={1}>Job openings past their last date</Text>
                <Badge tone={expired.length ? 'caution' : 'positive'}>{expired.length}</Badge>
              </Flex>
            </Card>
            <Card as="button" padding={2} radius={2} onClick={() => setSelected('drafts')} style={{ textAlign: 'left', cursor: 'pointer' }}>
              <Flex justify="space-between" gap={3}>
                <Text size={1}>Unpublished drafts</Text>
                <Badge tone={content.draftIds.length ? 'caution' : 'positive'}>{content.draftIds.length}</Badge>
              </Flex>
            </Card>
          </Stack>
        </Panel>
        <Panel title="Recently edited" hint="Click to open">
          <Stack space={1}>
            {content.recent.map((doc) => (
              <Card
                key={doc._id}
                as="button"
                padding={2}
                radius={2}
                onClick={() => openDoc(doc._id, doc._type)}
                style={{ textAlign: 'left', cursor: 'pointer' }}
              >
                <Flex justify="space-between" gap={3}>
                  <Text size={1} textOverflow="ellipsis">
                    {doc.title}
                  </Text>
                  <Text size={1} muted>
                    {typeLabel(doc._type)} · {dateTime(doc._updatedAt)}
                  </Text>
                </Flex>
              </Card>
            ))}
          </Stack>
        </Panel>
      </Grid>
    </Stack>
  )
}

/* ------------------------------------------------------------------ */
/* Tool                                                                */
/* ------------------------------------------------------------------ */

/**
 * Studio home. Traffic comes from the site's own page-view counter
 * (api/track.js writes one `analyticsDay` document per day), SEO checks from
 * the seo-report.json the build writes, and the rest from the dataset — all
 * read with the signed-in editor's own access, so no extra key is involved.
 */
export function AnalyticsTool() {
  const client = useClient({ apiVersion: '2024-01-01' })
  const { scheme } = useRootTheme()
  const color = BAR[scheme] || BAR.light

  const [tab, setTab] = useState('overview')
  const [range, setRange] = useState(30)
  const [docs, setDocs] = useState(null)
  const [content, setContent] = useState(null)
  const [posts, setPosts] = useState(null)
  const [report, setReport] = useState(undefined)
  const [error, setError] = useState(null)

  useEffect(() => {
    let live = true
    setDocs(null)
    const from = lastDays(range, range)[0] // start of the previous period, for the comparison
    client
      .fetch('*[_type == "analyticsDay" && date >= $from] | order(date asc)', { from })
      .then((rows) => live && setDocs(rows))
      .catch((err) => live && setError(err.message))
    return () => {
      live = false
    }
  }, [client, range])

  useEffect(() => {
    client.fetch(CONTENT_QUERY).then(setContent).catch(() => setContent(null))
    client.fetch(BLOG_QUERY).then(setPosts).catch(() => setPosts([]))
    loadReport().then(setReport)
  }, [client])

  const view = useMemo(() => {
    if (!docs) return null
    const days = lastDays(range)
    const previousDays = new Set(lastDays(range, range))
    const current = docs.filter((d) => d.date >= days[0])
    const previous = docs.filter((d) => previousDays.has(d.date))
    const byDay = Object.fromEntries(current.map((d) => [d.date, d]))
    const paths = Object.assign({}, ...current.map((d) => d.paths || {}))
    const pathLabel = (key) => paths[key] || stripPrefix(key)

    const totals = (set) => ({
      views: sumField(set, 'views'),
      visitors: sumField(set, 'visitors'),
      sessions: sumField(set, 'sessions'),
      search: set.reduce((n, d) => n + (d.sources?.s_Search || 0), 0),
    })
    const hourTotals = sumMaps(current, 'hours')

    return {
      days,
      byDay,
      today: byDay[days[days.length - 1]],
      now: totals(current),
      before: totals(previous),
      pages: toRows(sumMaps(current, 'pages'), pathLabel, 10),
      landings: toRows(sumMaps(current, 'landings'), pathLabel, 8),
      searchLandings: toRows(sumMaps(current, 'searchLandings'), pathLabel, 10),
      notFound: toRows(sumMaps(current, 'notFound'), pathLabel, 10),
      sources: toRows(sumMaps(current, 'sources'), stripPrefix),
      devices: toRows(sumMaps(current, 'devices'), stripPrefix),
      countries: toRows(sumMaps(current, 'countries'), (key) => countryName(key.replace(/^c_/, ''))),
      hours: Array.from({ length: 24 }, (_, h) => {
        const key = String(h).padStart(2, '0')
        return { key, value: hourTotals[`h_${key}`] || 0 }
      }),
    }
  }, [docs, range])

  const tabs = [
    ['overview', 'Traffic'],
    ['seo', 'SEO'],
    ['content', 'Content'],
  ]

  return (
    // The Card gives headings outside the panels their text colour in both themes
    <Card height="fill" padding={[3, 4, 5]} style={{ overflowY: 'auto' }}>
      <Container width={5}>
        <Stack space={5}>
          <Flex justify="space-between" align="center" wrap="wrap" gap={3}>
            <Stack space={3}>
              <Heading size={2}>Website analytics</Heading>
              <Text size={1} muted>
                www.riskman.in · counted by the site itself · days in India time
              </Text>
            </Stack>
            {tab !== 'content' && (
              <Inline space={1}>
                {RANGES.map((days) => (
                  <Button
                    key={days}
                    text={`${days} days`}
                    mode={range === days ? 'default' : 'ghost'}
                    tone={range === days ? 'primary' : 'default'}
                    onClick={() => setRange(days)}
                  />
                ))}
              </Inline>
            )}
          </Flex>

          <TabList space={2}>
            {tabs.map(([id, label]) => (
              <Tab
                key={id}
                id={`analytics-tab-${id}`}
                aria-controls={`analytics-panel-${id}`}
                label={label}
                selected={tab === id}
                onClick={() => setTab(id)}
              />
            ))}
          </TabList>

          {error && (
            <Card padding={4} radius={3} tone="critical">
              <Text size={1}>Could not load analytics: {error}</Text>
            </Card>
          )}

          <TabPanel id="analytics-panel-overview" aria-labelledby="analytics-tab-overview" hidden={tab !== 'overview'}>
            {!view && !error ? (
              <Flex justify="center" padding={6}>
                <Spinner muted />
              </Flex>
            ) : (
              <Overview view={view} range={range} color={color} />
            )}
          </TabPanel>
          <TabPanel id="analytics-panel-seo" aria-labelledby="analytics-tab-seo" hidden={tab !== 'seo'}>
            <Seo report={report} posts={posts} landings={view?.searchLandings || []} color={color} />
          </TabPanel>
          <TabPanel id="analytics-panel-content" aria-labelledby="analytics-tab-content" hidden={tab !== 'content'}>
            <Content content={content} client={client} />
          </TabPanel>
        </Stack>
      </Container>
    </Card>
  )
}
