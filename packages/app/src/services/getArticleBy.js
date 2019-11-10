import { CONFIG } from './index.js'

const repository = ({ id }) =>
  window.fetch(`${CONFIG.API}/news/${id}`)
    .then(res => res.json())

export default ({ id }) => repository({ id })
