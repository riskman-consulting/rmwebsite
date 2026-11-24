/**
 * Page-view counter for the Analytics tab in Sanity Studio (/cms).
 *
 * The site sends small beacons (src/components/common/PageViewTracker.jsx).
 * This Vercel function adds them to a single document per day in the site's
 * own Sanity dataset, `analytics.day.YYYY-MM-DD`, holding only counters:
 *
 *   page view   totals, pages, hours, sources, landing pages, devices,
 *               countries, cities, browsers, operating systems, languages,
 *               referring sites, UTM campaigns, returning visitors, visits
 *               that went past one page (for the bounce rate)
 *   engage      time on page and scroll depth (bucketed), exit pages
 *   event       counts of fixed actions: contact form / job application sent,
 *               phone / email / WhatsApp / download / outbound clicks
 *   notFound    missing URLs people opened
 *   vitals      real-visitor loading speed for the Studio's Speed tab
 *
 * Nothing about the visitor is stored: no IP, no cookie, no user agent, no
 * form content, no full referrer URL or query string — only names and counts.
 * Every value from the browser is checked against a fixed list or a strict
 * pattern before it is counted.
 *
 * The document id contains dots, so Sanity keeps it private even in a public
 * dataset: only signed-in Studio users can read it.
 *
 * Needs SANITY_WRITE_TOKEN (a Sanity API token with Editor rights) in the
 * Vercel environment. Without it the function answers 204 and counts nothing,
 * so the site is never affected.
 */

const PROJECT_ID = process.env.VITE_SANITY_PROJECT_ID
const DATASET = process.env.VITE_SANITY_DATA_SET
const TOKEN = process.env.SANITY_WRITE_TOKEN

const LIVE_HOSTS = new Set(['www.riskman.in', 'riskman.in'])
const MAX_BODY = 4096

const BOT_UA = /bot|crawl|spider|slurp|headless|lighthouse|preview|facebookexternalhit|embedly|whatsapp|curl|wget|python|node-fetch/i

/** Sanity field names: letters, digits and underscores, starting with a letter. */
const keyOf = (prefix, value) => `${prefix}_${String(value).replace(/[^a-zA-Z0-9]/g, '_')}`.slice(0, 120)

/** Calendar day in India, so "today" matches the team's day. */
const today = () =>
  new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Kolkata', year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date())

/** Hour of the day in India, "00"–"23". */
const hourNow = () =>
  new Intl.DateTimeFormat('en-GB', { timeZone: 'Asia/Kolkata', hour: '2-digit', hourCycle: 'h23' }).format(new Date())

/* ------------------------------------------------------------------ */
/* What is allowed in                                                  */
/* ------------------------------------------------------------------ */

const SOURCES = ['Search', 'LinkedIn', 'Social', 'Other site', 'Direct']

const EVENTS = [
  'Contact form sent',
  'Job application sent',
  'Phone click',
  'Email click',
  'WhatsApp click',
  'Download',
  'Outbound link',
]

const deviceOf = (ua) => {
  if (/ipad|tablet|(android(?!.*mobile))/i.test(ua)) return 'Tablet'
  if (/mobi|iphone|android/i.test(ua)) return 'Mobile'
  return 'Desktop'
}

/** Browser name only — the user agent itself is never stored. */
const browserOf = (ua) => {
  if (/edg(e|a|ios)?\//i.test(ua)) return 'Edge'
  if (/opr\/|opera/i.test(ua)) return 'Opera'
  if (/samsungbrowser/i.test(ua)) return 'Samsung Internet'
  if (/firefox|fxios/i.test(ua)) return 'Firefox'
  if (/chrome|crios|chromium/i.test(ua)) return 'Chrome'
  if (/safari/i.test(ua)) return 'Safari'
  return 'Other'
}

/** Operating system name only. */
const systemOf = (ua) => {
  if (/windows nt/i.test(ua)) return 'Windows'
  if (/android/i.test(ua)) return 'Android'
  if (/iphone|ipad|ipod/i.test(ua)) return 'iOS'
  if (/cros/i.test(ua)) return 'ChromeOS'
  if (/mac os x|macintosh/i.test(ua)) return 'macOS'
  if (/linux/i.test(ua)) return 'Linux'
  return 'Other'
}

/** A referring site's domain, e.g. "google.com" — never the full URL. */
const domainOf = (value) => {
  if (typeof value !== 'string') return null
  const host = value.toLowerCase().replace(/^www\./, '')
  if (!/^[a-z0-9-]+(\.[a-z0-9-]+)+$/.test(host) || host.length > 80) return null
  if (LIVE_HOSTS.has(host) || LIVE_HOSTS.has(`www.${host}`)) return null
  return host
}

/** One UTM value: lower case, letters/digits/._- and spaces, at most 40 characters. */
const utmPart = (value) => {
  if (typeof value !== 'string') return ''
  return value.toLowerCase().replace(/[^a-z0-9._ -]/g, '').trim().slice(0, 40)
}

/** City from Vercel's own header (not from the browser), as "City|CC". */
const cityOf = (req, country) => {
  let city = req.headers['x-vercel-ip-city'] || ''
  try {
    city = decodeURIComponent(city)
  } catch {
    return null
  }
  city = city.replace(/[^\p{L}\p{N} .'-]/gu, '').trim().slice(0, 40)
  return city && country !== 'XX' ? `${city}|${country}` : null
}

const langOf = (value) => (typeof value === 'string' && /^[a-z]{2,3}$/.test(value) ? value : null)

/* ------------------------------------------------------------------ */
/* Buckets                                                             */
/* ------------------------------------------------------------------ */

/**
 * Loading-speed buckets for real-visitor measurements (`type: "vitals"`).
 * Each value is counted in the first bucket it fits ("le_<edge>"), or "over".
 * The edges include the good / poor limits so the Studio can rate exactly.
 * Keep in sync with SPEED_BUCKETS in src/sanity/tools/analytics/SpeedTab.jsx.
 */
const SPEED_BUCKETS = {
  lcp: [1000, 1500, 2000, 2500, 3000, 4000, 6000, 10000],
  fcp: [1000, 1500, 1800, 2500, 3000, 4000, 6000],
  ttfb: [200, 400, 600, 800, 1200, 1800, 3000],
  inp: [100, 200, 300, 500, 1000],
  cls: [0.05, 0.1, 0.15, 0.25, 0.5],
  load: [1000, 2000, 3000, 4000, 6000, 8000, 12000],
}
const bucketOf = (edges, value) => {
  const edge = edges.find((e) => value <= e)
  return edge === undefined ? 'over' : `le_${String(edge).replace('.', '_')}`
}
const validMetric = (name, value) =>
  typeof value === 'number' && Number.isFinite(value) && value >= 0 && value <= (name === 'cls' ? 10 : 120000)

/** Seconds on a page. Keep in sync with TIME_BUCKETS in AnalyticsTool.jsx. */
const TIME_EDGES = [10, 30, 60, 180, 600]
/** Time on a page counts at most 30 minutes, so a forgotten tab can't skew the average. */
const MAX_SECONDS = 1800

/* ------------------------------------------------------------------ */
/* Handler                                                             */
/* ------------------------------------------------------------------ */

const readBody = (req) => {
  if (req.body && typeof req.body === 'object') return req.body
  const raw = typeof req.body === 'string' ? req.body : ''
  if (raw.length > MAX_BODY) return {}
  try {
    const parsed = JSON.parse(raw || '{}')
    return parsed && typeof parsed === 'object' ? parsed : {}
  } catch {
    return {}
  }
}

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store')
  if (req.method !== 'POST') return res.status(405).end()
  if (!TOKEN || !PROJECT_ID || !DATASET) return res.status(204).end()

  const ua = req.headers['user-agent'] || ''
  if (BOT_UA.test(ua)) return res.status(204).end()

  const body = readBody(req)
  const path = typeof body.path === 'string' ? body.path.split(/[?#]/)[0] : ''
  if (!path.startsWith('/') || path.length > 200 || /^\/(cms|api)(\/|$)/.test(path)) {
    return res.status(204).end()
  }

  const date = today()
  const pageKey = keyOf('p', path)
  const country = /^[A-Z]{2}$/.test(req.headers['x-vercel-ip-country'] || '') ? req.headers['x-vercel-ip-country'] : 'XX'
  const device = deviceOf(ua)
  const pathSet = { [`paths.${pageKey}`]: path }

  // Real-visitor loading speed (sent once per page load)
  if (body.type === 'vitals') {
    const counters = speedCounters(body.metrics, device, pageKey)
    if (counters) await count(date, counters, pathSet)
    return res.status(204).end()
  }

  // Time on page, scroll depth and exit page (sent when leaving a page)
  if (body.type === 'engage') {
    const counters = engageCounters(body, pageKey)
    if (counters) await count(date, counters, pathSet)
    return res.status(204).end()
  }

  // A fixed action, e.g. contact form sent or phone number clicked
  if (body.type === 'event') {
    if (!EVENTS.includes(body.name)) return res.status(204).end()
    await count(date, { [`events.${keyOf('e', body.name)}`]: 1 })
    return res.status(204).end()
  }

  if (body.type === 'notFound') {
    await count(date, { [`notFound.${pageKey}`]: 1 }, pathSet)
    return res.status(204).end()
  }

  if (body.type !== undefined) return res.status(204).end()

  // Page view
  const source = SOURCES.includes(body.source) ? body.source : null
  const counters = {
    views: 1,
    [`pages.${pageKey}`]: 1,
    [`hours.${keyOf('h', hourNow())}`]: 1,
  }
  const sets = { ...pathSet }

  // Once per visitor per day
  if (body.newVisitor === true) {
    counters.visitors = 1
    counters[`devices.${keyOf('d', device)}`] = 1
    counters[`countries.${keyOf('c', country)}`] = 1
    counters[`browsers.${keyOf('b', browserOf(ua))}`] = 1
    counters[`systems.${keyOf('o', systemOf(ua))}`] = 1
    if (body.returning === true) counters.returning = 1

    const city = cityOf(req, country)
    if (city) {
      const key = keyOf('y', city)
      counters[`cities.${key}`] = 1
      sets[`labels.${key}`] = city
    }
    const lang = langOf(body.lang)
    if (lang) counters[`languages.${keyOf('l', lang)}`] = 1
  }

  // A source is sent only on a visit's first page: that page is where the visit landed
  if (source) {
    counters.sessions = 1
    // Adds 0, so the day records the bounce rate even if no visit went further
    counters.engagedSessions = 0
    counters[`sources.${keyOf('s', source)}`] = 1
    counters[`landings.${pageKey}`] = 1
    if (source === 'Search') counters[`searchLandings.${pageKey}`] = 1

    const domain = domainOf(body.referrer)
    if (domain) {
      const key = keyOf('r', domain)
      counters[`referrers.${key}`] = 1
      sets[`labels.${key}`] = domain
    }

    const utm = body.utm && typeof body.utm === 'object' ? body.utm : {}
    const utmSource = utmPart(utm.source)
    const utmCampaign = utmPart(utm.campaign)
    if (utmSource || utmCampaign) {
      const label = [utmSource || '(no source)', utmPart(utm.medium), utmCampaign].filter(Boolean).join(' / ')
      const key = keyOf('u', label)
      counters[`campaigns.${key}`] = 1
      sets[`labels.${key}`] = label
    }
  }

  // The visit's second page: the visit did not bounce
  if (body.engaged === true) counters.engagedSessions = 1

  await count(date, counters, sets)
  return res.status(204).end()
}

/* ------------------------------------------------------------------ */
/* Counters                                                            */
/* ------------------------------------------------------------------ */

/** Counters for one visit's speed measurements, or null if nothing usable was sent. */
const speedCounters = (metrics, device, pageKey) => {
  if (!metrics || typeof metrics !== 'object') return null
  const counters = {}
  for (const [name, edges] of Object.entries(SPEED_BUCKETS)) {
    const value = metrics[name]
    if (!validMetric(name, value)) continue
    counters[`speed.${keyOf('d', device)}_${name}.${bucketOf(edges, value)}`] = 1
    // Per page, only LCP — enough to see which pages are slow
    if (name === 'lcp') counters[`speedPages.${pageKey}.${bucketOf(edges, value)}`] = 1
  }
  return Object.keys(counters).length ? counters : null
}

/** Counters for time on one page, how far it was scrolled and whether the visit ended there. */
const engageCounters = (body, pageKey) => {
  const { seconds, scroll } = body
  if (typeof seconds !== 'number' || !Number.isFinite(seconds) || seconds < 0 || seconds > 86400) return null
  if (typeof scroll !== 'number' || !Number.isFinite(scroll) || scroll < 0 || scroll > 100) return null
  const quarter = Math.min(100, Math.floor(scroll / 25) * 25)
  const counters = {
    [`engageTime.t_${bucketOf(TIME_EDGES, seconds)}`]: 1,
    [`scrollDepth.q_${quarter}`]: 1,
    [`pageReads.${pageKey}`]: 1,
    [`pageTime.${pageKey}`]: Math.round(Math.min(seconds, MAX_SECONDS)),
  }
  if (quarter >= 75) counters[`pageDeep.${pageKey}`] = 1
  if (body.exit === true) counters[`exits.${pageKey}`] = 1
  return counters
}

/**
 * Add `counters` to the day's document and `sets` as plain values. Each
 * object on the way to a counter ("pages", "speed.d_Mobile_lcp", …) and each
 * counter starts empty / at 0 the first time it is seen that day.
 */
async function count(date, counters, sets = {}) {
  const id = `analytics.day.${date}`
  const parts = [...Object.keys(counters), ...Object.keys(sets)].map((k) => k.split('.'))
  const parentsAt = (depth) => [...new Set(parts.filter((p) => p.length > depth).map((p) => p.slice(0, depth).join('.')))]

  const mutations = [{ createIfNotExists: { _id: id, _type: 'analyticsDay', date } }]
  for (const depth of [1, 2]) {
    const parents = parentsAt(depth)
    if (parents.length) mutations.push({ patch: { id, setIfMissing: Object.fromEntries(parents.map((k) => [k, {}])) } })
  }
  mutations.push({
    patch: {
      id,
      setIfMissing: Object.fromEntries(Object.keys(counters).map((k) => [k, 0])),
      ...(Object.keys(sets).length ? { set: sets } : {}),
      inc: counters,
    },
  })
  await mutate(mutations)
}

/** Apply mutations to the dataset; failures are logged, never thrown. */
async function mutate(mutations) {
  try {
    const response = await fetch(`https://${PROJECT_ID}.api.sanity.io/v2024-01-01/data/mutate/${DATASET}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${TOKEN}` },
      body: JSON.stringify({ mutations }),
    })
    if (!response.ok) console.error('[track] Sanity mutate failed', response.status, await response.text())
  } catch (err) {
    console.error('[track] Sanity mutate error', err)
  }
}
