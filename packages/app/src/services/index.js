export const CONFIG = {
  API: 'https://el-frontend-del-futuro-api.midudev.now.sh'
}

const importService = serviceName => async params => {
  const { default: service } = await import(`./${serviceName[0]}.js`)
  return service(params)
}

export default {
  getCategories: importService`getCategories`,
  getNews: importService`getNews`
}
