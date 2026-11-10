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
 * Real-visitor loading speed for the Speed tab in Sanity Studio. Measures the
 * page the visit started on — the only real page load in a single-page app —
 * with the browser's own Performance API, and sends the numbers once when the
 * visitor leaves or switches tab. No library, nothing about the visitor.
 *
 *   lcp  main content visible          fcp  first content on screen
 *   ttfb server started answering      load whole page finished loading
 *   cls  layout shift (session window) inp  slowest tap/click response (≈ INP)
 */
let vitalsStarted = false
const startVitals = () => {
  if (vitalsStarted || typeof PerformanceObserver === 'undefined') return
  vitalsStarted = true
  // A page opened in a background tab never shows a real load
  if (document.visibilityState === 'hidden') return

  const path = window.location.pathname
  const metrics = {}
  const observe = (type, onEntry, options = {}) => {
    try {
      new PerformanceObserver((list) => list.getEntries().forEach(onEntry)).observe({ type, buffered: true, ...options })
    } catch {
      // metric not supported in this browser
    }
  }

  observe('paint', (e) => {
    if (e.name === 'first-contentful-paint') metrics.fcp = e.startTime
  })
  observe('largest-contentful-paint', (e) => {
    metrics.lcp = e.startTime
  })

  // CLS: the largest burst of shifts (gaps under 1 s, burst at most 5 s)
  let cls = 0
  let burst = 0
  let burstStart = 0
  let lastShift = 0
  observe('layout-shift', (e) => {
    if (e.hadRecentInput) return
    if (burst && e.startTime - lastShift < 1000 && e.startTime - burstStart < 5000) burst += e.value
    else {
      burst = e.value
      burstStart = e.startTime
    }
    lastShift = e.startTime
    cls = Math.max(cls, burst)
  })

  observe(
    'event',
    (e) => {
      if (e.interactionId) metrics.inp = Math.max(metrics.inp || 0, e.duration)
    },
    { durationThreshold: 40 }
  )

  let sent = false
  const flush = () => {
    if (sent) return
    const nav = performance.getEntriesByType('navigation')[0]
    if (nav) {
      if (nav.responseStart > 0) metrics.ttfb = nav.responseStart
      if (nav.loadEventEnd > 0) metrics.load = nav.loadEventEnd
    }
    if (metrics.fcp === undefined && metrics.lcp === undefined) return
    metrics.cls = Math.round(cls * 1000) / 1000
    sent = true
    send({ type: 'vitals', path, metrics })
  }
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') flush()
  })
  window.addEventListener('pagehide', flush)
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

  // Loading speed of the page the visit started on (once per page load)
  useEffect(() => {
    if (!isLive()) return
    const path = window.location.pathname
    if (path === '/cms' || path.startsWith('/cms/')) return
    startVitals()
  }, [])

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
