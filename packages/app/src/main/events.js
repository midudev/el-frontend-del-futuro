// from: https://github.com/developit/mitt

/** Mitt: Tiny (~200b) functional event emitter / pubsub.
 *  @name mitt
 *  @returns {Mitt}
 */
function events (all) {
  all = all || Object.create(null)

  return {
    on: function on (type, handler) {
      (all[type] || (all[type] = [])).push(handler)
    },

    off: function off (type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1)
      }
    },

    emit: function emit (type, evt) {
      (all[type] || []).slice().map(function (handler) { handler(evt) });
      (all['*'] || []).slice().map(function (handler) { handler(type, evt) })
    }
  }
}

export default events()
