import { useCallback, useEffect, useState } from 'react'
import { Badge, Button, Card, Flex, Grid, Inline, Select, Spinner, Stack, Text, TextInput } from '@sanity/ui'
import { LaunchIcon, PlayIcon } from '@sanity/icons'

/**
 * Speed tab — runs Google PageSpeed Insights (the Lighthouse engine behind
 * pagespeed.web.dev) against any page of the live site, shows the result
 * against the recommended targets, lists what slows that page down, and keeps
 * a history of tests in the dataset (`speedTest` documents) so improvements
 * can be tracked over time.
 *
 * Works without an API key, but Google rate-limits anonymous requests. Set
 * VITE_PAGESPEED_API_KEY (a Google Cloud key with the PageSpeed Insights API
 * enabled, restricted to the riskman.in referrer) for reliable use.
 */

const SITE = 'https://www.riskman.in'
const API = 'https://www.googleapis.com/pagespeedonline/v5/runPagespeed'

// Read by full name so Vite inlines only this variable (see src/sanity/env.js)
const API_KEY = (() => {
  try {
    return import.meta.env.VITE_PAGESPEED_API_KEY
  } catch {
    return undefined
  }
})()

const PAGES = [
  ['/', 'Home'],
  ['/about', 'About'],
  ['/services', 'Services'],
  ['/products/riskman-grc', 'Product — RiskMan GRC'],
  ['/products/riskman-grc/enterprise-risk-management', 'Module — Enterprise Risk Management'],
  ['/products/riskman-grc/risk-based-internal-audit', 'Module — Risk Based Internal Audit'],
  ['/products/riskman-grc/control-testing', 'Module — Control Testing'],
  ['/products/riskman-grc/action-taken-report', 'Module — Action Taken Report'],
  ['/products/riskman-grc/policy', 'Module — Policy and SOP'],
  ['/products/riskman-grc/global-sox', 'Module — Global SOX'],
  ['/industries', 'Industries'],
  ['/blogs', 'Blog'],
  ['/careers', 'Careers'],
  ['/contact', 'Contact'],
]

/* ------------------------------------------------------------------ */
/* Targets                                                             */
/* ------------------------------------------------------------------ */

// "Good" and "poor" limits from web.dev (Core Web Vitals + Lighthouse metrics)
const LAB_METRICS = [
  { id: 'largest-contentful-paint', key: 'lcp', name: 'Largest Contentful Paint', short: 'LCP', plain: 'Main content (hero image or title) is visible', good: 2500, poor: 4000, core: true },
  { id: 'first-contentful-paint', key: 'fcp', name: 'First Contentful Paint', short: 'FCP', plain: 'First text or image appears on screen', good: 1800, poor: 3000 },
  { id: 'total-blocking-time', key: 'tbt', name: 'Total Blocking Time', short: 'TBT', plain: 'Time the page is frozen and ignores taps', good: 200, poor: 600 },
  { id: 'cumulative-layout-shift', key: 'cls', name: 'Cumulative Layout Shift', short: 'CLS', plain: 'How much content jumps around while loading', good: 0.1, poor: 0.25, unitless: true, core: true },
  { id: 'speed-index', key: 'si', name: 'Speed Index', short: 'SI', plain: 'How quickly the page visibly fills in', good: 3400, poor: 5800 },
  { id: 'server-response-time', key: 'ttfb', name: 'Server response time', short: 'TTFB', plain: 'Time for the server to start answering', good: 800, poor: 1800 },
]

// Real-visitor (Chrome UX Report) metrics returned in `loadingExperience`
const FIELD_METRICS = [
  { id: 'LARGEST_CONTENTFUL_PAINT_MS', short: 'LCP', plain: 'Main content visible', good: 2500, poor: 4000 },
  { id: 'INTERACTION_TO_NEXT_PAINT', short: 'INP', plain: 'Response to taps and clicks', good: 200, poor: 500 },
  { id: 'CUMULATIVE_LAYOUT_SHIFT_SCORE', short: 'CLS', plain: 'Content jumping', good: 0.1, poor: 0.25, unitless: true, scale: 100 },
  { id: 'FIRST_CONTENTFUL_PAINT_MS', short: 'FCP', plain: 'First content appears', good: 1800, poor: 3000 },
  { id: 'EXPERIMENTAL_TIME_TO_FIRST_BYTE', short: 'TTFB', plain: 'Server starts answering', good: 800, poor: 1800 },
]

const RATING = {
  good: { label: 'Good', tone: 'positive' },
  mid: { label: 'Needs work', tone: 'caution' },
  poor: { label: 'Poor', tone: 'critical' },
}
const rate = (value, good, poor) => (value <= good ? RATING.good : value <= poor ? RATING.mid : RATING.poor)
const rateScore = (score) => (score >= 90 ? RATING.good : score >= 50 ? RATING.mid : RATING.poor)

const formatValue = (value, unitless) => {
  if (value == null || Number.isNaN(value)) return '—'
  if (unitless) return value.toFixed(2)
  return value >= 1000 ? `${(value / 1000).toFixed(1)} s` : `${Math.round(value)} ms`
}
const formatLimit = (value, unitless) => (unitless ? String(value) : value >= 1000 ? `${value / 1000} s` : `${value} ms`)
const formatBytes = (bytes) => (bytes >= 1048576 ? `${(bytes / 1048576).toFixed(1)} MB` : `${Math.round(bytes / 1024)} KB`)
const stripMarkdown = (text = '') => text.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/`/g, '')
const firstLink = (text = '') => /\]\((https?:[^)]+)\)/.exec(text)?.[1]

/* ------------------------------------------------------------------ */
/* Reading a PageSpeed result                                          */
/* ------------------------------------------------------------------ */

const summarise = (data, path, strategy) => {
  const lh = data.lighthouseResult
  const audits = lh.audits
  const lab = Object.fromEntries(LAB_METRICS.map((m) => [m.key, audits[m.id]?.numericValue ?? null]))

  // Everything Lighthouse says would save time or bytes, biggest first
  const seen = new Set()
  const fixes = Object.values(audits)
    .map((a) => {
      const metricSavings = a.metricSavings || {}
      const ms = Math.max(a.details?.overallSavingsMs || 0, metricSavings.LCP || 0, metricSavings.FCP || 0, metricSavings.TBT || 0)
      const bytes = a.details?.overallSavingsBytes || 0
      return { id: a.id, title: a.title, score: a.score, display: a.displayValue, description: a.description, ms, bytes, mode: a.scoreDisplayMode }
    })
    .filter((a) => a.score !== null && a.score < 0.9 && (a.ms > 0 || a.bytes > 0) && a.mode !== 'notApplicable')
    .sort((a, b) => b.ms - a.ms || b.bytes - a.bytes)
    .filter((a) => (seen.has(a.title) ? false : seen.add(a.title)))
    .slice(0, 10)

  const field = data.loadingExperience?.metrics && Object.keys(data.loadingExperience.metrics).length ? data.loadingExperience : null
  const origin = data.originLoadingExperience?.metrics && Object.keys(data.originLoadingExperience.metrics).length ? data.originLoadingExperience : null

  return {
    path,
    strategy,
    url: lh.finalDisplayedUrl || lh.finalUrl || data.id,
    testedAt: lh.fetchTime || new Date().toISOString(),
    score: Math.round((lh.categories.performance.score || 0) * 100),
    lab,
    weight: audits['total-byte-weight']?.numericValue ?? null,
    requests: audits['network-requests']?.details?.items?.length ?? null,
    fixes,
    field,
    origin,
  }
}

/* ------------------------------------------------------------------ */
/* Pieces                                                              */
/* ------------------------------------------------------------------ */

const Box = ({ title, hint, children, action }) => (
  <Card padding={4} radius={3} border>
    <Stack space={4}>
      <Flex justify="space-between" align="flex-start" gap={3} wrap="wrap">
        <Stack space={2} flex={1}>
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

const MetricTile = ({ metric, value }) => {
  const rating = value == null ? null : rate(value, metric.good, metric.poor)
  return (
    <Card padding={3} radius={2} border tone={rating?.tone || 'default'}>
      <Stack space={3}>
        <Flex justify="space-between" align="center" gap={2}>
          <Text size={1} weight="semibold">
            {metric.short}
            {metric.core ? ' · Core Web Vital' : ''}
          </Text>
          {rating && (
            <Badge tone={rating.tone} fontSize={0}>
              {rating.label}
            </Badge>
          )}
        </Flex>
        <Text size={4} weight="bold">
          {formatValue(value, metric.unitless)}
        </Text>
        <Text size={1} muted>
          {metric.plain}. Target: under {formatLimit(metric.good, metric.unitless)}
        </Text>
      </Stack>
    </Card>
  )
}

const FieldData = ({ experience, label }) => (
  <Stack space={3}>
    <Inline space={2}>
      <Text size={1} weight="semibold">
        {label}
      </Text>
      {experience.overall_category && (
        <Badge tone={experience.overall_category === 'FAST' ? 'positive' : experience.overall_category === 'AVERAGE' ? 'caution' : 'critical'} fontSize={0}>
          {experience.overall_category === 'FAST' ? 'Passes Core Web Vitals' : 'Does not pass Core Web Vitals'}
        </Badge>
      )}
    </Inline>
    <Grid columns={[1, 2, 5]} gap={2}>
      {FIELD_METRICS.filter((m) => experience.metrics[m.id]).map((m) => {
        const raw = experience.metrics[m.id].percentile
        const value = m.scale ? raw / m.scale : raw
        const rating = rate(value, m.good, m.poor)
        return (
          <Card key={m.id} padding={3} radius={2} border tone={rating.tone}>
            <Stack space={2}>
              <Text size={1} weight="semibold">
                {m.short} · {rating.label}
              </Text>
              <Text size={3} weight="bold">
                {formatValue(value, m.unitless)}
              </Text>
              <Text size={0} muted>
                {m.plain}
              </Text>
            </Stack>
          </Card>
        )
      })}
    </Grid>
  </Stack>
)

const Result = ({ result }) => {
  const scoreRating = rateScore(result.score)
  return (
    <Stack space={4}>
      <Box
        title={`Result — ${result.strategy === 'mobile' ? 'Mobile' : 'Desktop'}`}
        hint={`${result.url} · tested ${new Date(result.testedAt).toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' })}`}
        action={
          <Button
            as="a"
            href={`https://pagespeed.web.dev/analysis?url=${encodeURIComponent(result.url)}&form_factor=${result.strategy}`}
            target="_blank"
            rel="noreferrer"
            icon={LaunchIcon}
            text="Full report"
            mode="ghost"
            fontSize={1}
          />
        }
      >
        <Grid columns={[1, 3]} gap={3}>
          <Card padding={3} radius={2} border tone={scoreRating.tone}>
            <Stack space={3}>
              <Text size={1} weight="semibold">
                Performance score
              </Text>
              <Text size={5} weight="bold">
                {result.score}
                <span style={{ fontSize: '0.5em', fontWeight: 500 }}> / 100</span>
              </Text>
              <Text size={1} muted>
                {scoreRating.label}. Target: 90 or above
              </Text>
            </Stack>
          </Card>
          <Card padding={3} radius={2} border>
            <Stack space={3}>
              <Text size={1} weight="semibold">
                Page weight
              </Text>
              <Text size={5} weight="bold">
                {result.weight != null ? formatBytes(result.weight) : '—'}
              </Text>
              <Text size={1} muted>
                Everything downloaded. Target: under 1.6 MB
              </Text>
            </Stack>
          </Card>
          <Card padding={3} radius={2} border>
            <Stack space={3}>
              <Text size={1} weight="semibold">
                Requests
              </Text>
              <Text size={5} weight="bold">
                {result.requests ?? '—'}
              </Text>
              <Text size={1} muted>
                Files loaded. Fewer is faster; aim for under 60
              </Text>
            </Stack>
          </Card>
        </Grid>
        <Grid columns={[1, 2, 3]} gap={3}>
          {LAB_METRICS.map((m) => (
            <MetricTile key={m.key} metric={m} value={result.lab[m.key]} />
          ))}
        </Grid>
        <Text size={1} muted>
          Lab test: one simulated visit{result.strategy === 'mobile' ? ' on a mid-range phone with a slow 4G connection' : ' on a desktop with a fast connection'}. Scores vary a little between runs — test twice before
          comparing.
        </Text>
      </Box>

      <Box
        title="Real visitors (last 28 days)"
        hint="Measured by Google from Chrome users who visited the site. This is what Google uses for ranking. Shown only when the page has enough traffic."
      >
        {result.field || result.origin ? (
          <Stack space={4}>
            {result.field && <FieldData experience={result.field} label="This page" />}
            {result.origin && <FieldData experience={result.origin} label="Whole site (riskman.in)" />}
          </Stack>
        ) : (
          <Text size={1} muted>
            Not enough real-visitor data yet for this page. Use the lab result above until traffic grows.
          </Text>
        )}
      </Box>

      <Box title="What slows this page down" hint="Google's suggestions for this exact page, biggest time saving first.">
        {result.fixes.length ? (
          <Stack space={3}>
            {result.fixes.map((fix) => {
              const link = firstLink(fix.description)
              return (
                <Card key={fix.id} padding={3} radius={2} border>
                  <Stack space={3}>
                    <Flex justify="space-between" gap={3} wrap="wrap">
                      <Text size={1} weight="semibold">
                        {fix.title}
                      </Text>
                      <Inline space={2}>
                        {fix.ms > 0 && (
                          <Badge tone={fix.ms >= 1000 ? 'critical' : 'caution'} fontSize={0}>
                            Save ~{formatValue(fix.ms)}
                          </Badge>
                        )}
                        {fix.bytes > 0 && <Badge fontSize={0}>Save {formatBytes(fix.bytes)}</Badge>}
                      </Inline>
                    </Flex>
                    {fix.display && (
                      <Text size={1} muted>
                        {fix.display}
                      </Text>
                    )}
                    <Text size={1} muted>
                      {stripMarkdown(fix.description)}
                    </Text>
                    {link && (
                      <Text size={1}>
                        <a href={link} target="_blank" rel="noreferrer">
                          How to fix →
                        </a>
                      </Text>
                    )}
                  </Stack>
                </Card>
              )
            })}
          </Stack>
        ) : (
          <Text size={1} muted>
            Nothing significant to fix on this page.
          </Text>
        )}
      </Box>
    </Stack>
  )
}

const Targets = () => (
  <Box title="Recommended loading times" hint="What a fast website should hit. Google treats a page as fast when 75% of visits meet the 'Good' limit.">
    <Card radius={2} border overflow="auto">
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
        <thead>
          <tr style={{ textAlign: 'left' }}>
            {['Metric', 'What it measures', 'Good', 'Needs work', 'Poor'].map((h) => (
              <th key={h} style={{ padding: '10px 12px', borderBottom: '1px solid var(--card-border-color)', fontWeight: 600 }}>
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {[
            ...LAB_METRICS.map((m) => [`${m.short} — ${m.name}${m.core ? ' (Core Web Vital)' : ''}`, m.plain, m.good, m.poor, m.unitless]),
            ['INP — Interaction to Next Paint (Core Web Vital)', 'Response to taps and clicks (real visitors only)', 200, 500, false],
          ].map(([name, plain, good, poor, unitless]) => (
            <tr key={name}>
              <td style={{ padding: '10px 12px', borderBottom: '1px solid var(--card-border-color)', fontWeight: 600 }}>{name}</td>
              <td style={{ padding: '10px 12px', borderBottom: '1px solid var(--card-border-color)' }}>{plain}</td>
              <td style={{ padding: '10px 12px', borderBottom: '1px solid var(--card-border-color)' }}>≤ {formatLimit(good, unitless)}</td>
              <td style={{ padding: '10px 12px', borderBottom: '1px solid var(--card-border-color)' }}>
                {formatLimit(good, unitless)} – {formatLimit(poor, unitless)}
              </td>
              <td style={{ padding: '10px 12px', borderBottom: '1px solid var(--card-border-color)' }}>&gt; {formatLimit(poor, unitless)}</td>
            </tr>
          ))}
          <tr>
            <td style={{ padding: '10px 12px', fontWeight: 600 }}>Performance score</td>
            <td style={{ padding: '10px 12px' }}>Lighthouse summary of the lab metrics</td>
            <td style={{ padding: '10px 12px' }}>90 – 100</td>
            <td style={{ padding: '10px 12px' }}>50 – 89</td>
            <td style={{ padding: '10px 12px' }}>0 – 49</td>
          </tr>
        </tbody>
      </table>
    </Card>
    <Text size={1} muted>
      In plain terms: the main content should be visible within 2.5 seconds on a phone, the page should respond to a tap within 0.2 seconds, and nothing
      should jump around while it loads. Visitors start leaving after about 3 seconds.
    </Text>
  </Box>
)

// Site-specific findings, measured from the production build (Nov 2026)
const TIPS = [
  {
    priority: 'High',
    title: 'Compress and resize hero images',
    why: 'Large images are the most common cause of a slow LCP. 87 images in the build are over 400 KB; the SOC 2 and SOC 3 hero images are about 6.8 MB each, and others on CSA, RBIA and Digital Transformation are 2–5 MB.',
    how: 'Export hero images as WebP (or AVIF) at most 1600 px wide, aiming for under 200 KB (under 100 KB for other images). Give every <img> a width and height, add loading="lazy" to images below the first screen and fetchpriority="high" to the hero image.',
  },
  {
    priority: 'High',
    title: 'Load each page’s code only when it is visited',
    why: 'Almost every page is bundled into one 2.1 MB JavaScript file that every visitor downloads, even for the home page. This drives up Total Blocking Time and delays the first paint on phones.',
    how: 'Switch the routes in App.jsx to React.lazy(() => import(...)) with a <Suspense> fallback, the way the Studio route already is. Each visitor then downloads only the code for the page they open.',
  },
  {
    priority: 'Medium',
    title: 'Load fewer font weights, earlier',
    why: 'Inter is loaded with all nine weights through a CSS @import, which the browser only discovers after downloading the stylesheet.',
    how: 'Load it from index.html with <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> and a <link rel="stylesheet"> for only the weights in use (400, 500, 600, 700), or self-host the font files.',
  },
  {
    priority: 'Medium',
    title: 'Delay YouTube embeds until clicked',
    why: 'The Home and About pages embed a YouTube player that downloads several hundred KB of scripts on page load, even if the visitor never plays it.',
    how: 'Show the video thumbnail with a play button and insert the iframe only on click (a "lite YouTube" facade).',
  },
  {
    priority: 'Low',
    title: 'Remove unused packages',
    why: 'framer-motion is used across the site and AOS in one file, while GSAP, react-motion, Lenis and the three.js packages are installed but never imported. Unused packages are not shipped to visitors, but they slow installs and builds.',
    how: 'Move the one AOS animation to framer-motion, then remove aos, gsap, @gsap/react, react-motion, lenis, @studio-freight/lenis, @react-three/fiber and @react-three/drei from package.json.',
  },
  {
    priority: 'Medium',
    title: 'Request Sanity images at the size shown',
    why: 'Images from the CMS are served at their uploaded size unless the URL asks for less.',
    how: 'Use the Sanity image URL builder with .width(...) and .auto("format") so the CDN returns a resized WebP/AVIF.',
  },
  {
    priority: 'Low',
    title: 'Prevent layout shifts',
    why: 'Content that moves while loading hurts CLS and makes visitors mis-tap.',
    how: 'Reserve space for images, videos, ads and banners (width/height or aspect-ratio), and avoid inserting content above what is already on screen.',
  },
  {
    priority: 'Done',
    title: 'Long-term caching of built files',
    why: 'Files in /assets are already cached by browsers for a long time (vercel.json), so repeat visits are fast.',
    how: 'Nothing to do — keep this header when changing vercel.json.',
  },
]

const PRIORITY_TONE = { High: 'critical', Medium: 'caution', Low: 'default', Done: 'positive' }

const Tips = () => (
  <Box title="How to make the website faster" hint="Specific to this site, most impactful first. After each change, deploy and run a test above to see the difference.">
    <Stack space={3}>
      {TIPS.map((tip) => (
        <Card key={tip.title} padding={3} radius={2} border>
          <Stack space={3}>
            <Inline space={2}>
              <Badge tone={PRIORITY_TONE[tip.priority]} fontSize={0}>
                {tip.priority === 'Done' ? 'Already done' : `${tip.priority} impact`}
              </Badge>
              <Text size={1} weight="semibold">
                {tip.title}
              </Text>
            </Inline>
            <Text size={1}>
              <strong>Why:</strong> {tip.why}
            </Text>
            <Text size={1}>
              <strong>How:</strong> {tip.how}
            </Text>
          </Stack>
        </Card>
      ))}
    </Stack>
  </Box>
)

const History = ({ rows, onPick }) => (
  <Box title="Test history" hint="Every test run here is saved, so you can compare before and after a change.">
    {!rows ? (
      <Spinner muted />
    ) : !rows.length ? (
      <Text size={1} muted>
        No tests yet. Run one above.
      </Text>
    ) : (
      <Card radius={2} border overflow="auto">
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
          <thead>
            <tr style={{ textAlign: 'left' }}>
              {['Date', 'Page', 'Device', 'Score', 'LCP', 'TBT', 'CLS', 'Weight'].map((h) => (
                <th key={h} style={{ padding: '8px 10px', borderBottom: '1px solid var(--card-border-color)', fontWeight: 600, whiteSpace: 'nowrap' }}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => {
              const s = rateScore(r.score)
              return (
                <tr key={r._id} style={{ cursor: 'pointer' }} onClick={() => onPick(r.path, r.strategy)} title="Select this page and device">
                  <td style={{ padding: '8px 10px', whiteSpace: 'nowrap' }}>{new Date(r.testedAt).toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' })}</td>
                  <td style={{ padding: '8px 10px' }}>{r.path}</td>
                  <td style={{ padding: '8px 10px' }}>{r.strategy === 'mobile' ? 'Mobile' : 'Desktop'}</td>
                  <td style={{ padding: '8px 10px' }}>
                    <Badge tone={s.tone} fontSize={0}>
                      {r.score}
                    </Badge>
                  </td>
                  <td style={{ padding: '8px 10px' }}>{formatValue(r.lcp)}</td>
                  <td style={{ padding: '8px 10px' }}>{formatValue(r.tbt)}</td>
                  <td style={{ padding: '8px 10px' }}>{formatValue(r.cls, true)}</td>
                  <td style={{ padding: '8px 10px' }}>{r.weight != null ? formatBytes(r.weight) : '—'}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </Card>
    )}
  </Box>
)

/* ------------------------------------------------------------------ */
/* Real visitors (measured by the site itself — no API key)            */
/* ------------------------------------------------------------------ */

// Same buckets as api/track.js — keep in sync
const SPEED_BUCKETS = {
  lcp: [1000, 1500, 2000, 2500, 3000, 4000, 6000, 10000],
  fcp: [1000, 1500, 1800, 2500, 3000, 4000, 6000],
  ttfb: [200, 400, 600, 800, 1200, 1800, 3000],
  inp: [100, 200, 300, 500, 1000],
  cls: [0.05, 0.1, 0.15, 0.25, 0.5],
  load: [1000, 2000, 3000, 4000, 6000, 8000, 12000],
}
const bucketKey = (edge) => `le_${String(edge).replace('.', '_')}`

const RUM_METRICS = [
  { key: 'lcp', short: 'LCP', name: 'Main content visible', good: 2500, poor: 4000, core: true },
  { key: 'inp', short: 'INP', name: 'Response to taps and clicks (≈)', good: 200, poor: 500, core: true },
  { key: 'cls', short: 'CLS', name: 'Content jumping', good: 0.1, poor: 0.25, unitless: true, core: true },
  { key: 'fcp', short: 'FCP', name: 'First content on screen', good: 1800, poor: 3000 },
  { key: 'ttfb', short: 'TTFB', name: 'Server response', good: 800, poor: 1800 },
  { key: 'load', short: 'Load', name: 'Whole page loaded', good: 3000, poor: 6000 },
]
const DEVICES = ['Mobile', 'Desktop', 'Tablet']

/** Add up bucket counts from several `{ le_x: n, over: n }` objects. */
const addBuckets = (groups) => {
  const total = {}
  for (const g of groups) for (const [k, v] of Object.entries(g || {})) total[k] = (total[k] || 0) + (v || 0)
  return total
}

/** Visits, 75th-percentile bucket and good / needs-work / poor shares from bucket counts. */
const readBuckets = (counts, edges, good, poor) => {
  const rows = [...edges.map((e) => ({ edge: e, n: counts[bucketKey(e)] || 0 })), { edge: Infinity, n: counts.over || 0 }]
  const total = rows.reduce((s, r) => s + r.n, 0)
  if (!total) return null
  let seen = 0
  const p75 = rows.find((r) => (seen += r.n) >= total * 0.75).edge
  const share = (test) => rows.filter((r) => test(r.edge)).reduce((s, r) => s + r.n, 0) / total
  return {
    total,
    p75,
    good: share((e) => e <= good),
    mid: share((e) => e > good && e <= poor),
    poor: share((e) => e > poor),
  }
}

const p75Text = (p75, edges, unitless) =>
  p75 === Infinity ? `over ${formatLimit(edges[edges.length - 1], unitless)}` : `under ${formatLimit(p75, unitless)}`

const ShareBar = ({ stats }) => (
  <Stack space={2}>
    <div style={{ display: 'flex', height: 6, borderRadius: 3, overflow: 'hidden', background: 'var(--card-border-color)' }}>
      <div style={{ width: `${stats.good * 100}%`, background: '#2e9e5b' }} />
      <div style={{ width: `${stats.mid * 100}%`, background: '#e0a106' }} />
      <div style={{ width: `${stats.poor * 100}%`, background: '#d9363e' }} />
    </div>
    <Text size={0} muted>
      {Math.round(stats.good * 100)}% good · {Math.round(stats.mid * 100)}% needs work · {Math.round(stats.poor * 100)}% poor
    </Text>
  </Stack>
)

const RealVisitors = ({ docs, range }) => {
  const [device, setDevice] = useState('Mobile')
  if (!docs) {
    return (
      <Box title="Real visitors" hint="Loading…">
        <Spinner muted />
      </Box>
    )
  }

  const devices = device === 'All' ? DEVICES : [device]
  const metricStats = RUM_METRICS.map((m) => ({
    ...m,
    stats: readBuckets(
      addBuckets(docs.flatMap((d) => devices.map((dev) => d.speed?.[`d_${dev}_${m.key}`]))),
      SPEED_BUCKETS[m.key],
      m.good,
      m.poor
    ),
  }))
  const measured = metricStats.find((m) => m.key === 'lcp')?.stats?.total || 0

  // Slowest pages by LCP (all devices), with their labels from the page-view data
  const labels = Object.assign({}, ...docs.map((d) => d.paths || {}))
  const pageKeys = [...new Set(docs.flatMap((d) => Object.keys(d.speedPages || {})))]
  const pages = pageKeys
    .map((key) => ({
      key,
      label: labels[key] || key.replace(/^p_/, '/').replace(/_/g, '-'),
      stats: readBuckets(addBuckets(docs.map((d) => d.speedPages?.[key])), SPEED_BUCKETS.lcp, 2500, 4000),
    }))
    .filter((p) => p.stats)
    .sort((a, b) => b.stats.p75 - a.stats.p75 || b.stats.poor - a.stats.poor || b.stats.total - a.stats.total)
    .slice(0, 15)

  return (
    <Box
      title={`Real visitors — last ${range} days`}
      hint="Measured in the browsers of people visiting www.riskman.in (first page of each visit). This is the speed your visitors actually get, and what Google uses for ranking. No API key needed."
      action={
        <Inline space={1}>
          {[...DEVICES, 'All'].map((d) => (
            <Button key={d} text={d} fontSize={1} mode={device === d ? 'default' : 'ghost'} tone={device === d ? 'primary' : 'default'} onClick={() => setDevice(d)} />
          ))}
        </Inline>
      }
    >
      {!measured ? (
        <Text size={1} muted>
          No speed measurements for {device === 'All' ? 'any device' : device.toLowerCase()} visitors in this period yet. Measuring starts once this version is
          deployed; numbers appear as people visit the live site (local and preview sites are not counted).
        </Text>
      ) : (
        <Stack space={4}>
          <Text size={1} muted>
            Based on {number(measured)} page loads. Each figure is what 75% of visits beat — the same way Google reports Core Web Vitals.
          </Text>
          <Grid columns={[1, 2, 3]} gap={3}>
            {metricStats.map((m) => {
              const rating = m.stats ? rate(m.stats.p75 === Infinity ? Number.MAX_VALUE : m.stats.p75, m.good, m.poor) : null
              return (
                <Card key={m.key} padding={3} radius={2} border tone={rating?.tone || 'default'}>
                  <Stack space={3}>
                    <Flex justify="space-between" align="center" gap={2}>
                      <Text size={1} weight="semibold">
                        {m.short}
                        {m.core ? ' · Core Web Vital' : ''}
                      </Text>
                      {rating && (
                        <Badge tone={rating.tone} fontSize={0}>
                          {rating.label}
                        </Badge>
                      )}
                    </Flex>
                    <Text size={3} weight="bold">
                      {m.stats ? p75Text(m.stats.p75, SPEED_BUCKETS[m.key], m.unitless) : '—'}
                    </Text>
                    <Text size={1} muted>
                      {m.name}. Target: under {formatLimit(m.good, m.unitless)}
                    </Text>
                    {m.stats && <ShareBar stats={m.stats} />}
                  </Stack>
                </Card>
              )
            })}
          </Grid>

          {pages.length > 0 && (
            <Stack space={3}>
              <Text size={1} weight="semibold">
                Pages by main-content load time (LCP, all devices) — slowest first
              </Text>
              <Card radius={2} border overflow="auto">
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
                  <thead>
                    <tr style={{ textAlign: 'left' }}>
                      {['Page', 'Page loads', 'LCP (75% of visits)', 'Visits rated good'].map((h) => (
                        <th key={h} style={{ padding: '8px 10px', borderBottom: '1px solid var(--card-border-color)', fontWeight: 600 }}>
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {pages.map((p) => {
                      const r = rate(p.stats.p75 === Infinity ? Number.MAX_VALUE : p.stats.p75, 2500, 4000)
                      return (
                        <tr key={p.key}>
                          <td style={{ padding: '8px 10px' }}>
                            <a href={`${SITE}${p.label}`} target="_blank" rel="noreferrer" style={{ color: 'inherit' }}>
                              {p.label}
                            </a>
                          </td>
                          <td style={{ padding: '8px 10px' }}>{number(p.stats.total)}</td>
                          <td style={{ padding: '8px 10px' }}>
                            <Badge tone={r.tone} fontSize={0}>
                              {p75Text(p.stats.p75, SPEED_BUCKETS.lcp)} · {r.label}
                            </Badge>
                          </td>
                          <td style={{ padding: '8px 10px' }}>{Math.round(p.stats.good * 100)}%</td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </Card>
              <Text size={0} muted>
                Pages with only a few loads can swing a lot — trust pages with more visits. INP is approximate: the slowest tap or click on the first page.
              </Text>
            </Stack>
          )}
        </Stack>
      )}
    </Box>
  )
}

const number = (n) => new Intl.NumberFormat('en-IN').format(Math.round(n || 0))

/* ------------------------------------------------------------------ */
/* Tab                                                                 */
/* ------------------------------------------------------------------ */

const HISTORY_QUERY = `*[_type == "speedTest"] | order(testedAt desc)[0...40]{_id, path, strategy, testedAt, score, lcp, tbt, cls, weight}`

export const Speed = ({ client, docs, range }) => {
  const [path, setPath] = useState('/')
  const [custom, setCustom] = useState('')
  const [strategy, setStrategy] = useState('mobile')
  const [running, setRunning] = useState(false)
  const [result, setResult] = useState(null)
  const [error, setError] = useState(null)
  const [history, setHistory] = useState(null)

  const loadHistory = useCallback(() => {
    client.fetch(HISTORY_QUERY).then(setHistory).catch(() => setHistory([]))
  }, [client])
  useEffect(loadHistory, [loadHistory])

  const target = custom.trim() || path
  const url = /^https?:\/\//.test(target) ? target : `${SITE}${target.startsWith('/') ? '' : '/'}${target}`

  const run = async () => {
    setRunning(true)
    setError(null)
    setResult(null)
    try {
      const params = new URLSearchParams({ url, strategy, category: 'performance' })
      if (API_KEY) params.set('key', API_KEY)
      const res = await fetch(`${API}?${params}`)
      const data = await res.json()
      if (!res.ok) {
        const msg = data?.error?.message || `HTTP ${res.status}`
        throw new Error(
          res.status === 429
            ? API_KEY
              ? 'This API key has used its quota for now (25,000 tests a day, 240 a minute). Try again shortly.'
              : 'Google’s shared limit for tests without an API key is used up. Add VITE_PAGESPEED_API_KEY (steps below) to run tests.'
            : msg
        )
      }
      const summary = summarise(data, target, strategy)
      setResult(summary)
      // Keep a history; a failed save should not hide the result
      client
        .create({
          _type: 'speedTest',
          path: summary.path,
          url: summary.url,
          strategy,
          testedAt: summary.testedAt,
          score: summary.score,
          ...summary.lab,
          weight: summary.weight,
          requests: summary.requests,
        })
        .then(loadHistory)
        .catch(() => {})
    } catch (err) {
      setError(err.message)
    } finally {
      setRunning(false)
    }
  }

  return (
    <Stack space={5}>
      <RealVisitors docs={docs} range={range} />

      <Box
        title="Lab test with Google PageSpeed (optional)"
        hint="Runs one simulated visit on any page right now — useful to check a change straight after deploying. In-Studio results need a free API key; the pagespeed.web.dev button works without one."
      >
        <Grid columns={[1, 1, 3]} gap={3}>
          <Stack space={2}>
            <Text size={1} weight="semibold">
              Page
            </Text>
            <Select value={path} onChange={(e) => setPath(e.currentTarget.value)} disabled={running || !!custom.trim()}>
              {PAGES.map(([p, label]) => (
                <option key={p} value={p}>
                  {label}
                </option>
              ))}
            </Select>
          </Stack>
          <Stack space={2}>
            <Text size={1} weight="semibold">
              Or another path / URL
            </Text>
            <TextInput
              value={custom}
              placeholder="/services/cybersecurity"
              onChange={(e) => setCustom(e.currentTarget.value)}
              disabled={running}
            />
          </Stack>
          <Stack space={2}>
            <Text size={1} weight="semibold">
              Device
            </Text>
            <Inline space={1}>
              {[
                ['mobile', 'Mobile'],
                ['desktop', 'Desktop'],
              ].map(([id, label]) => (
                <Button
                  key={id}
                  text={label}
                  mode={strategy === id ? 'default' : 'ghost'}
                  tone={strategy === id ? 'primary' : 'default'}
                  onClick={() => setStrategy(id)}
                  disabled={running}
                />
              ))}
            </Inline>
          </Stack>
        </Grid>
        <Flex gap={3} align="center" wrap="wrap">
          {/* Without a key Google refuses in-Studio tests, so the working option leads */}
          {API_KEY && (
            <Button icon={PlayIcon} text={running ? 'Testing…' : 'Run speed test'} tone="primary" onClick={run} disabled={running} />
          )}
          {/* Works without an API key: the same test on Google's own site, in a new tab */}
          <Button
            as="a"
            href={`https://pagespeed.web.dev/analysis?url=${encodeURIComponent(url)}&form_factor=${strategy}`}
            target="_blank"
            rel="noreferrer"
            icon={LaunchIcon}
            text="Test on pagespeed.web.dev"
            tone={API_KEY ? 'default' : 'primary'}
            mode={API_KEY ? 'ghost' : 'default'}
          />
          <Text size={1} muted>
            {running ? `Testing ${url} — this takes about 20–60 seconds.` : url}
          </Text>
        </Flex>
        {running && (
          <Flex justify="center" padding={4}>
            <Spinner muted />
          </Flex>
        )}
        {error && (
          <Card padding={3} radius={2} tone="critical">
            <Text size={1}>Test failed: {error}</Text>
          </Card>
        )}
        {!API_KEY && (
          <Text size={1} muted>
            The button opens Google’s free test for the chosen page in a new tab — no key needed. Optional: to see and save results here instead, add a
            free PageSpeed Insights API key as VITE_PAGESPEED_API_KEY in Vercel (Google Cloud Console → enable “PageSpeed Insights API” → Credentials →
            create API key, restricted to https://www.riskman.in/*), then redeploy.
          </Text>
        )}
      </Box>

      {result && <Result result={result} />}

      <Targets />
      <Tips />
      <History
        rows={history}
        onPick={(p, s) => {
          setCustom(PAGES.some(([x]) => x === p) ? '' : p)
          if (PAGES.some(([x]) => x === p)) setPath(p)
          setStrategy(s)
        }}
      />
    </Stack>
  )
}

export default Speed
