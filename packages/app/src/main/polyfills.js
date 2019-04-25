/* eslint-disable */
if (!Array.prototype.hasOwnProperty('lastItem')) {
  Object.defineProperty(Array.prototype, 'lastItem', {
    enumerable: false,
    configurable: false,
    get () {
      let len = this.length
      if (len === 0) {
        return undefined
      } else if (len > 0) {
        return this[len - 1]
      }
    },
    set (value) {
      let len = this.length
      if (len > 0) {
        len = len - 1
      }
      return this[len] = value
    }
  })
}