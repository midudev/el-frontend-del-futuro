let cachedStorage

const asyncLocalStorage = {
  set: function (key, value) {
    return Promise.resolve().then(function () {
      window.localStorage.setItem(key, JSON.stringify(value))
    })
  },
  get: function (key) {
    return Promise.resolve().then(function () {
      return JSON.parse(window.localStorage.getItem(key))
    })
  }
}

const getStorage = () => {
  // return Promise.resolve(asyncLocalStorage)

  if (cachedStorage) return Promise.resolve(cachedStorage)

  return import('std:kv-storage')
    .then(({ default: storage }) => {
      cachedStorage = storage
      return storage
    })
    .catch(() => asyncLocalStorage)
}

export default {
  get: key => getStorage().then(storage => storage.get(key)),
  set: (key, value) => getStorage().then(storage => storage.set(key, value))
}
