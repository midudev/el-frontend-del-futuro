import { CONFIG } from './index.js'

const apiRepository = () =>
  window.fetch(`${CONFIG.API}/news`).then(res => res.json())

export default () => {
  return apiRepository()
}
