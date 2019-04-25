module.exports = {
  'globDirectory': 'src/',
  'globPatterns': [
    '**/*.{js,html,txt,webp,gif,jpg,webm,png,ico,svg,json}'
  ],
  'swDest': 'src/workers/sw.js',

  runtimeCaching: [{
    urlPattern: /\.(?:js,html,txt,webp,gif,jpg,webm,png,ico,svg,json)$/,

    // Apply a cache-first strategy.
    handler: 'StaleWhileRevalidate',

    options: {
      // Use a custom cache name.
      cacheName: 'statics',

      expiration: {
        maxEntries: 100
      }
    }
  }]
}
