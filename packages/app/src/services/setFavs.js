import storage from './storageRepository.js'

export default favs => storage.set('favs', favs)
