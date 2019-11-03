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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

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
    "revision": "632cb0ef2080591012cf9f74864905fa"
  },
  {
    "url": "components/Category.js",
    "revision": "2bc92c71b9b5e9313e7337ed87d94eaa"
  },
  {
    "url": "components/Fav.js",
    "revision": "d7708f1f5e90ff521c34820381cd5cc4"
  },
  {
    "url": "components/FunnySection.js",
    "revision": "16cde7439780113cbe164c7ef4091e6f"
  },
  {
    "url": "components/Link.js",
    "revision": "9679af7a9d4be82d7108c733535ba373"
  },
  {
    "url": "components/Logo.js",
    "revision": "632e9e7efd535ddb10bc35d0488e736a"
  },
  {
    "url": "components/Timeago.js",
    "revision": "30dd38833ddecd83090580ae4b6c83fa"
  },
  {
    "url": "containers/Categories.js",
    "revision": "3102924bf280f853b204045dd8f81c5f"
  },
  {
    "url": "containers/News.js",
    "revision": "f1b006282eee2bbfa550be7bede6a0ac"
  },
  {
    "url": "index.html",
    "revision": "1df3f1e290fea62df8773804789c693e"
  },
  {
    "url": "main/app.js",
    "revision": "526e5f1501a27a9554076c7d798e51a8"
  },
  {
    "url": "main/Component.js",
    "revision": "66d001494c96c26883e94ef8eb579421"
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
    "url": "main/storage.js",
    "revision": "1d6bbd7a05adc95409def73a09e8ac1a"
  },
  {
    "url": "pages/article.js",
    "revision": "42f49d6fe41ebbe2481445512a4a9c75"
  },
  {
    "url": "pages/favs.js",
    "revision": "3d47d9bda90996ddb16511314d770f06"
  },
  {
    "url": "pages/home.js",
    "revision": "a8927ccfc4abceb5254445f66657859f"
  },
  {
    "url": "pages/videos.js",
    "revision": "5d8977accf9b1e1cd2b0e1e9188fe438"
  },
  {
    "url": "robots.txt",
    "revision": "f77c87f977e0fcce05a6df46c885a129"
  },
  {
    "url": "statics/add_fav.webp",
    "revision": "2067f9a66cabd79e2319a955db55bff6"
  },
  {
    "url": "statics/articles/0.webp",
    "revision": "9850ac7fcccc23e56f69d8d0eb9b334a"
  },
  {
    "url": "statics/articles/1.webp",
    "revision": "309e30f81d63e6034907f9165579f01e"
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
    "url": "statics/remove_fav.webp",
    "revision": "3bf191190ef8e1706dc593ba5a66b148"
  },
  {
    "url": "statics/robots.txt",
    "revision": "f77c87f977e0fcce05a6df46c885a129"
  },
  {
    "url": "statics/see_favs.webp",
    "revision": "11debb884a161a5dca4c3aab24cfceea"
  },
  {
    "url": "statics/video_icon.webp",
    "revision": "0e7c976a9f154f2d2ce0c9f657f12852"
  },
  {
    "url": "workers/paint-modules.js",
    "revision": "92a46cec37a96e3c6fee8bae6c03ec37"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/\.(?:js,html,txt,webp,gif,jpg,webm,png,ico,svg,json)$/, new workbox.strategies.StaleWhileRevalidate({ "cacheName":"statics", plugins: [new workbox.expiration.Plugin({ maxEntries: 100, purgeOnQuotaError: false })] }), 'GET');
