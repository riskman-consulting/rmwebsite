import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Only the live site counts — not local dev, not Vercel preview deployments
const LIVE_HOSTS = new Set(['www.riskman.in', 'riskman.in'])

// Same calendar day as api/track.js uses (India), so a visitor counts once a day
const todayKey = () =>
  new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Kolkata' }).format(new Date())

/** Where the visit came from, as one of the buckets api/track.js accepts. */
const sourceOf = (referrer) => {
  if (!referrer) return 'Direct'
  let host = ''
  try {
    host = new URL(referrer).hostname.replace(/^www\./, '')
  } catch {
    return 'Direct'
  }
  if (LIVE_HOSTS.has(host) || LIVE_HOSTS.has(`www.${host}`)) return null
  if (/(^|\.)(google|bing|yahoo|duckduckgo|yandex|baidu|ecosia)\./.test(host)) return 'Search'
  if (/(^|\.)(linkedin\.com|lnkd\.in)$/.test(host)) return 'LinkedIn'
  if (/(^|\.)(facebook|instagram|twitter|x|t|youtube|whatsapp|reddit)\.(com|co)$/.test(host)) return 'Social'
  return 'Other site'
}

// Storage can throw in private windows; tracking must never break the page
const storage = (store, key, value) => {
  try {
    if (value === undefined) return store.getItem(key)
    store.setItem(key, value)
  } catch {
    return null
  }
  return null
}

const isLive = () => LIVE_HOSTS.has(window.location.hostname)

/** One beacon to api/track.js; never throws. */
const send = (data) => {
  const payload = JSON.stringify(data)
  // text/plain keeps sendBeacon a simple request
  const blob = new Blob([payload], { type: 'text/plain' })
  try {
    if (navigator.sendBeacon?.('/api/track', blob)) return
  } catch {
    // fall through to fetch
  }
  fetch('/api/track', { method: 'POST', body: payload, keepalive: true }).catch(() => {})
}

/**
 * Called by the Not Found page: records which missing URL someone opened, so
 * the Analytics tab can list broken links worth a redirect.
 */
export const reportNotFound = (path) => {
  if (isLive()) send({ type: 'notFound', path })
}

/**
 * Counts page views for the Analytics tab in Sanity Studio. Sends one beacon
 * per route change to /api/track. The only things stored in the browser are
 * the day of the last visit (to count a visitor once a day) and a per-tab
 * flag (to count the traffic source once a visit). Renders nothing.
 */
export default function PageViewTracker() {
  const { pathname } = useLocation()

  useEffect(() => {
    if (!isLive()) return
    if (pathname === '/cms' || pathname.startsWith('/cms/')) return

    const day = todayKey()
    const newVisitor = storage(localStorage, 'rm_last_visit') !== day
    if (newVisitor) storage(localStorage, 'rm_last_visit', day)

    let source = null
    if (!storage(sessionStorage, 'rm_session')) {
      storage(sessionStorage, 'rm_session', '1')
      source = sourceOf(document.referrer)
    }

    send({ path: pathname, newVisitor, source })
  }, [pathname])

  return null
}
