/**
 * Page-view counter for the Analytics tab in Sanity Studio (/cms).
 *
 * The site sends one small beacon per page view (src/components/common/
 * PageViewTracker.jsx). This Vercel function adds it to a single document per
 * day in the site's own Sanity dataset, `analytics.day.YYYY-MM-DD`, holding
 * totals and per-page / source / device / country / hour counts, the page each
 * visit started on (and which of those came from search), and the missing
 * URLs people opened (sent by the Not Found page as `type: "notFound"`). Nothing about the
 * visitor is stored beyond those counters: no IP, no cookie, no user agent.
 *
 * Needs SANITY_WRITE_TOKEN (a Sanity API token with Editor rights) in the
 * Vercel environment. Without it the function answers 204 and counts nothing,
 * so the site is never affected.
 */

const PROJECT_ID = process.env.VITE_SANITY_PROJECT_ID
const DATASET = process.env.VITE_SANITY_DATA_SET
const TOKEN = process.env.SANITY_WRITE_TOKEN

const BOT_UA = /bot|crawl|spider|slurp|headless|lighthouse|preview|facebookexternalhit|embedly|whatsapp|curl|wget|python|node-fetch/i

/** Sanity field names: letters, digits and underscores, starting with a letter. */
const keyOf = (prefix, value) => `${prefix}_${String(value).replace(/[^a-zA-Z0-9]/g, '_')}`.slice(0, 120)

/** Calendar day in India, so "today" matches the team's day. */
const today = () =>
  new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Kolkata', year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date())

/** Hour of the day in India, "00"–"23". */
const hourNow = () =>
  new Intl.DateTimeFormat('en-GB', { timeZone: 'Asia/Kolkata', hour: '2-digit', hourCycle: 'h23' }).format(new Date())

const deviceOf = (ua) => {
  if (/ipad|tablet|(android(?!.*mobile))/i.test(ua)) return 'Tablet'
  if (/mobi|iphone|android/i.test(ua)) return 'Mobile'
  return 'Desktop'
}

const SOURCES = ['Search', 'LinkedIn', 'Social', 'Other site', 'Direct']

const readBody = (req) => {
  if (req.body && typeof req.body === 'object') return req.body
  try {
    return JSON.parse(req.body || '{}')
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
  const id = `analytics.day.${date}`
  const pageKey = keyOf('p', path)
  const country = /^[A-Z]{2}$/.test(req.headers['x-vercel-ip-country'] || '') ? req.headers['x-vercel-ip-country'] : 'XX'
  const device = deviceOf(ua)
  const source = SOURCES.includes(body.source) ? body.source : null

  const notFound = body.type === 'notFound'

  const counters = notFound
    ? { [`notFound.${pageKey}`]: 1 }
    : {
        views: 1,
        [`pages.${pageKey}`]: 1,
        [`hours.${keyOf('h', hourNow())}`]: 1,
        ...(body.newVisitor ? { visitors: 1, [`devices.${keyOf('d', device)}`]: 1, [`countries.${keyOf('c', country)}`]: 1 } : {}),
        // A source is sent only on a visit's first page: that page is where the visit landed
        ...(source ? { sessions: 1, [`sources.${keyOf('s', source)}`]: 1, [`landings.${pageKey}`]: 1 } : {}),
        ...(source === 'Search' ? { [`searchLandings.${pageKey}`]: 1 } : {}),
      }

  const mutations = [
    { createIfNotExists: { _id: id, _type: 'analyticsDay', date } },
    {
      patch: {
        id,
        setIfMissing: {
          views: 0,
          visitors: 0,
          sessions: 0,
          pages: {},
          paths: {},
          sources: {},
          devices: {},
          countries: {},
          hours: {},
          landings: {},
          searchLandings: {},
          notFound: {},
        },
      },
    },
    {
      patch: {
        id,
        // Each counter starts at 0 the first time it is seen that day
        setIfMissing: Object.fromEntries(Object.keys(counters).map((k) => [k, 0])),
        set: { [`paths.${pageKey}`]: path },
        inc: counters,
      },
    },
  ]

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
  return res.status(204).end()
}
