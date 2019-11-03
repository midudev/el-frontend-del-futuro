// const cachedStorage = null

const asyncLocalStorage = {
  set: function (key, value) {
    return Promise.resolve().then(function () {
      window.localStorage.setItem(key, value)
    })
  },
  get: function (key) {
    return Promise.resolve().then(function () {
      return window.localStorage.getItem(key)
    })
  }
}

const getStorage = () => {
  return asyncLocalStorage
  // if (cachedStorage) return Promise.resolve(cachedStorage)

  // return import('std:kv-storage')
  //   .then(storage => { cachedStorage = storage })
  //   .catch(() => asyncLocalStorage)
}

export default {
  get: key => getStorage().then(storage => storage.get(key)),
  set: (key, value) => getStorage().then(storage => storage.set(key, value))
}
