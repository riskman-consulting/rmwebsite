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

/** The referring site's domain only ("google.com") — never the full URL, which can carry personal data. */
const referrerDomain = (referrer) => {
  try {
    const host = new URL(referrer).hostname.replace(/^www\./, '')
    return LIVE_HOSTS.has(host) || LIVE_HOSTS.has(`www.${host}`) ? null : host
  } catch {
    return null
  }
}

/** utm_source / utm_medium / utm_campaign of the landing URL, cleaned; null when there are none. */
const utmOf = (search) => {
  const params = new URLSearchParams(search)
  const clean = (v) => (v || '').toLowerCase().replace(/[^a-z0-9._ -]/g, '').trim().slice(0, 40)
  const utm = {
    source: clean(params.get('utm_source')),
    medium: clean(params.get('utm_medium')),
    campaign: clean(params.get('utm_campaign')),
  }
  return utm.source || utm.campaign ? utm : null
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
 * Counts one action, e.g. trackEvent('Contact form sent'). Only the action's
 * name is sent — never what was typed. The name must be one of EVENTS in
 * api/track.js, anything else is ignored there.
 */
export const trackEvent = (name) => {
  if (isLive()) send({ type: 'event', name, path: window.location.pathname })
}

/** Link clicks worth counting, by where the link goes. */
const linkEvent = (anchor) => {
  const href = anchor.getAttribute('href') || ''
  if (/^tel:/i.test(href)) return 'Phone click'
  if (/^mailto:/i.test(href)) return 'Email click'
  if (/^whatsapp:/i.test(href)) return 'WhatsApp click'
  let url
  try {
    url = new URL(href, window.location.href)
  } catch {
    return null
  }
  if (/(^|\.)(wa\.me|whatsapp\.com)$/i.test(url.hostname)) return 'WhatsApp click'
  if (anchor.hasAttribute('download') || /\.(pdf|docx?|xlsx?|pptx?|zip)$/i.test(url.pathname)) return 'Download'
  if (/^https?:$/.test(url.protocol) && !LIVE_HOSTS.has(url.hostname)) return 'Outbound link'
  return null
}

/**
 * Time on the current page (only while the tab is visible) and how far down
 * it was scrolled. Sent when the visitor moves to another page, or — marked
 * as the visit's exit page — when the tab is hidden or closed.
 */
const engagement = {
  path: null,
  visibleMs: 0,
  shownAt: 0,
  scroll: 0,
  sent: false,
}

const scrollPercent = () => {
  const doc = document.documentElement
  const height = doc.scrollHeight - window.innerHeight
  if (height <= 0) return 100 // the whole page fits on screen
  return Math.min(100, Math.round((window.scrollY / height) * 100))
}

const flushEngagement = (exit) => {
  const e = engagement
  if (!e.path || e.sent) return
  if (e.shownAt) e.visibleMs += Date.now() - e.shownAt
  e.shownAt = 0
  e.sent = true
  send({ type: 'engage', path: e.path, seconds: Math.round(e.visibleMs / 1000), scroll: e.scroll, exit })
}

const startEngagement = (path) => {
  Object.assign(engagement, {
    path,
    visibleMs: 0,
    shownAt: document.visibilityState === 'visible' ? Date.now() : 0,
    scroll: 0,
    sent: false,
  })
  // After the new page has rendered, so a short page counts as fully seen
  requestAnimationFrame(() => {
    engagement.scroll = Math.max(engagement.scroll, scrollPercent())
  })
}

let listenersAdded = false
const addListeners = () => {
  if (listenersAdded) return
  listenersAdded = true

  let ticking = false
  window.addEventListener(
    'scroll',
    () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        ticking = false
        engagement.scroll = Math.max(engagement.scroll, scrollPercent())
      })
    },
    { passive: true }
  )

  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') flushEngagement(true)
    else if (!engagement.sent) engagement.shownAt = Date.now()
  })
  window.addEventListener('pagehide', () => flushEngagement(true))

  document.addEventListener(
    'click',
    (event) => {
      const anchor = event.target instanceof Element ? event.target.closest('a[href]') : null
      const name = anchor && linkEvent(anchor)
      if (name) trackEvent(name)
    },
    { capture: true, passive: true }
  )
}

/**
 * Counts page views for the Analytics tab in Sanity Studio. Sends one beacon
 * per route change to /api/track, plus one with the time spent on the page
 * just left. The only things stored in the browser are the day of the last
 * visit (to count a visitor once a day, and tell new from returning) and a
 * per-tab page count (to count the traffic source once a visit, and whether
 * the visit went past one page). No cookie. Renders nothing.
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

    addListeners()
    // Time on the page being left; then start timing this one
    flushEngagement(false)
    startEngagement(pathname)

    const day = todayKey()
    const lastVisit = storage(localStorage, 'rm_last_visit')
    const newVisitor = lastVisit !== day
    if (newVisitor) storage(localStorage, 'rm_last_visit', day)

    // Pages seen in this tab's visit ("rm_session" is the older flag, kept for open tabs)
    const pagesBefore = Number(storage(sessionStorage, 'rm_pages')) || (storage(sessionStorage, 'rm_session') ? 1 : 0)
    storage(sessionStorage, 'rm_pages', String(pagesBefore + 1))

    const data = { path: pathname, newVisitor }
    if (newVisitor) {
      data.returning = Boolean(lastVisit)
      data.lang = (navigator.language || '').split('-')[0].toLowerCase()
    }
    if (pagesBefore === 0) {
      data.source = sourceOf(document.referrer)
      data.referrer = referrerDomain(document.referrer)
      data.utm = utmOf(window.location.search)
      // Only a visit counted with a source can later count as not bounced
      if (data.source) storage(sessionStorage, 'rm_counted', '1')
    }
    // The visit's second page: it did not bounce
    if (pagesBefore === 1 && storage(sessionStorage, 'rm_counted')) data.engaged = true

    send(data)
  }, [pathname])

  return null
}
