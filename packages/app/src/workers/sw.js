/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.0/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "components/Article.js",
    "revision": "13747bd747a71b669f77e667db3d7e93"
  },
  {
    "url": "components/Category.js",
    "revision": "2cbb112287845dd1876a4f2123cd0e40"
  },
  {
    "url": "components/FunnySection.js",
    "revision": "f7e22b5a42bd0a717c0823d6e6042d95"
  },
  {
    "url": "components/Link.js",
    "revision": "9679af7a9d4be82d7108c733535ba373"
  },
  {
    "url": "components/Logo.js",
    "revision": "7280a79ee3dad87f5dbcaf1fabda3d48"
  },
  {
    "url": "containers/Categories.js",
    "revision": "3102924bf280f853b204045dd8f81c5f"
  },
  {
    "url": "containers/ListOfVideos.js",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "containers/News.js",
    "revision": "51e9073be83f1d5f985ed52feb44c381"
  },
  {
    "url": "index.html",
    "revision": "15c725a5d369ce97bafe938a89dad7f3"
  },
  {
    "url": "main/app.js",
    "revision": "47cd8b238ba82b098123393d009c5553"
  },
  {
    "url": "main/Component.js",
    "revision": "33e5acf5771833e3ec2ce995e7e95b04"
  },
  {
    "url": "main/events.js",
    "revision": "5ccd31ed5ef9631efe2b4cd977b783f0"
  },
  {
    "url": "main/polyfills.js",
    "revision": "9f2c5caaf11f244fc52c0244503380fb"
  },
  {
    "url": "pages/article.js",
    "revision": "99b3abc996289dc7867395e05d48d8fe"
  },
  {
    "url": "pages/home.js",
    "revision": "a8927ccfc4abceb5254445f66657859f"
  },
  {
    "url": "pages/videos.js",
    "revision": "91f7cb903aa1ecb115020a6545933b32"
  },
  {
    "url": "robots.txt",
    "revision": "f77c87f977e0fcce05a6df46c885a129"
  },
  {
    "url": "statics/articles/1.webp",
    "revision": "0af01ec5991c07fec939c8524f6f092e"
  },
  {
    "url": "statics/articles/10.webp",
    "revision": "448befeb490a1a6a2ebbbf3f18bf07fe"
  },
  {
    "url": "statics/articles/11.webp",
    "revision": "9c14fd0880528548c477174d02b81f95"
  },
  {
    "url": "statics/articles/2.webp",
    "revision": "d85220309eceb18d84e2335a9fe6e809"
  },
  {
    "url": "statics/articles/3.webp",
    "revision": "a76ddde633ecdb1354719219d981bbc1"
  },
  {
    "url": "statics/articles/4.webp",
    "revision": "6b8aa4079eea02c08d66e23cb162d96a"
  },
  {
    "url": "statics/articles/5.webp",
    "revision": "5b855de5a4e3fae9abb7914d1e092004"
  },
  {
    "url": "statics/articles/6.webp",
    "revision": "faec75a8ed16899f45dd7c0d46b32a67"
  },
  {
    "url": "statics/articles/7.webp",
    "revision": "d6a4c033c0a90ec2035d903615401ae9"
  },
  {
    "url": "statics/articles/8.webp",
    "revision": "e5fe227b034220a1b563ec7e1d3639a5"
  },
  {
    "url": "statics/articles/9.webp",
    "revision": "c133deb992616b371240315b1c75a2de"
  },
  {
    "url": "statics/category_actualidad.webp",
    "revision": "f8f11a65ed52657ce4a37e5a56d02b20"
  },
  {
    "url": "statics/category_cultura.webp",
    "revision": "41144ae91c92ab6f058971537b959ef2"
  },
  {
    "url": "statics/category_deportes.webp",
    "revision": "f10b43dc58d67819c3277556c021e723"
  },
  {
    "url": "statics/category_economia.webp",
    "revision": "1b44d006e239ead98446951185808733"
  },
  {
    "url": "statics/category_tecnologia.webp",
    "revision": "88c1304cba1db4d0aeb084acb6d3442d"
  },
  {
    "url": "statics/images/android-chrome-192x192.png",
    "revision": "851cb6bdbfb30c4696c1ea05f0eb4a5e"
  },
  {
    "url": "statics/images/android-chrome-512x512.png",
    "revision": "ca171afe52255bbef7e169f30b180ae1"
  },
  {
    "url": "statics/images/apple-touch-icon.png",
    "revision": "caef718bdb2a176ccae2296cc8c5a2d8"
  },
  {
    "url": "statics/images/favicon-16x16.png",
    "revision": "840f67254738921917b0270ec6f89be9"
  },
  {
    "url": "statics/images/favicon-32x32.png",
    "revision": "9d3dcffc0c9ee5bc8b9dd182e4ebe22d"
  },
  {
    "url": "statics/images/favicon.ico",
    "revision": "39e96bfb1bc915e0b05c157f7fac3f4b"
  },
  {
    "url": "statics/images/favicon.png",
    "revision": "6aaf6d71320809d474847b43bdf41650"
  },
  {
    "url": "statics/images/icons/icon-128x128.png",
    "revision": "2d4f1906c40f4ea4df31853ab783843f"
  },
  {
    "url": "statics/images/icons/icon-144x144.png",
    "revision": "16f86c1b32366713afcd87c0876b8df7"
  },
  {
    "url": "statics/images/icons/icon-152x152.png",
    "revision": "0dae642cea20bf88980682740dbeed80"
  },
  {
    "url": "statics/images/icons/icon-192x192.png",
    "revision": "f17e023d55a5133fdf7409d81167eea9"
  },
  {
    "url": "statics/images/icons/icon-384x384.png",
    "revision": "1723526cdd29dc3fe4ae4902e10a83b0"
  },
  {
    "url": "statics/images/icons/icon-512x512.png",
    "revision": "e1cfe7bf4327ed2d6c03ea44d6ff6c75"
  },
  {
    "url": "statics/images/icons/icon-72x72.png",
    "revision": "bc28e7e7217c16ec3aa0395c65107644"
  },
  {
    "url": "statics/images/icons/icon-96x96.png",
    "revision": "127ef98158f117d3d3954d6978622d3e"
  },
  {
    "url": "statics/images/mstile-150x150.png",
    "revision": "5b3d33c0d7a157f0f7efc9e8db5be77d"
  },
  {
    "url": "statics/images/safari-pinned-tab.svg",
    "revision": "fbffba144ae7eab2cfe37bc168a3a90f"
  },
  {
    "url": "statics/logo.svg",
    "revision": "65621e9b5b536ae20a1eaae3ef4f2a76"
  },
  {
    "url": "statics/manifest.json",
    "revision": "708ff863eef8d3bbc9a6657c25b8e35e"
  },
  {
    "url": "statics/robots.txt",
    "revision": "f77c87f977e0fcce05a6df46c885a129"
  },
  {
    "url": "statics/video_icon.webp",
    "revision": "0e7c976a9f154f2d2ce0c9f657f12852"
  },
  {
    "url": "workers/paint-modules.js",
    "revision": "9cadca90bf6934ec3e125ce3ea463643"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/\.(?:js,html,txt,webp,gif,jpg,webm,png,ico,svg,json)$/, new workbox.strategies.StaleWhileRevalidate({ "cacheName":"statics", plugins: [new workbox.expiration.Plugin({ maxEntries: 100, purgeOnQuotaError: false })] }), 'GET');
