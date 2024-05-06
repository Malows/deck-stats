/*
 * This file (which will be your service worker)
 * is picked up by the build system ONLY if
 * quasar.config file > pwa > workboxMode is set to "InjectManifest"
 */

// eslint-disable-next-line no-undef
declare const self: ServiceWorkerGlobalScope &
  typeof globalThis & { skipWaiting: () => void }

import { clientsClaim } from 'workbox-core'
import {
  precacheAndRoute,
  cleanupOutdatedCaches,
  createHandlerBoundToURL
} from 'workbox-precaching'
import { registerRoute, NavigationRoute } from 'workbox-routing'

self.skipWaiting()
clientsClaim()

// Use with precache injection
precacheAndRoute(self.__WB_MANIFEST)

cleanupOutdatedCaches()

// Non-SSR fallbacks to index.html
// Production SSR fallbacks to offline.html (except for dev)
if (process.env.MODE !== 'ssr' || process.env.PROD) {
  registerRoute(
    new NavigationRoute(
      createHandlerBoundToURL(process.env.PWA_FALLBACK_HTML),
      { denylist: [new RegExp(process.env.PWA_SERVICE_WORKER_REGEX), /workbox-(.)*\.js$/] }
    )
  )
}

// icons
// {
//   "src": "icons/icon-128x128.png",
//   "sizes": "128x128",
//   "type": "image/png"
// },
// {
//   "src": "icons/icon-192x192.png",
//   "sizes": "192x192",
//   "type": "image/png"
// },
// {
//   "src": "icons/icon-256x256.png",
//   "sizes": "256x256",
//   "type": "image/png"
// },
// {
//   "src": "icons/icon-384x384.png",
//   "sizes": "384x384",
//   "type": "image/png"
// },
// {
//   "src": "icons/icon-512x512.png",
//   "sizes": "512x512",
//   "type": "image/png"
// }
