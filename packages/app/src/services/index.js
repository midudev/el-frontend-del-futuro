const isDev = window.location.host.includes('localhost')

export const CONFIG = {
  API: isDev
    ? 'http://localhost:3000'
    : 'https://el-frontend-del-futuro-api.midudev.now.sh'
}

const importService = serviceName => async params => {
  const { default: service } = await import(`./${serviceName[0]}.js`)
  return service(params)
}

export default {
  getArticleBy: importService`getArticleBy`,
  getCategories: importService`getCategories`,
  getFavs: importService`getFavs`,
  getFunnyContent: importService`getFunnyContent`,
  getNews: importService`getNews`,
  setFavs: importService`setFavs`
}
