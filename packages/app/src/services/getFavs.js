import storage from './storageRepository.js'

export default async () => {
  const allFavs = await storage.get('favs') || []
  return allFavs
}
