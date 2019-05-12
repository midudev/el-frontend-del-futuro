import { storage } from 'std:kv-storage'

export const Fav = 'x-fav'

const ADD_IMG = '/statics/add_fav.webp'
const REMOVE_IMG = '/statics/remove_fav.webp'

window.customElements.define(Fav, class extends HTMLElement {
  constructor () {
    super()

    this._shadowRoot = this.attachShadow({ mode: 'open' })
  }

  async connectedCallback () {
    const id = this.getAttribute('id')
    const title = this.getAttribute('title')
    const image = this.getAttribute('image')

    const { hasFav } = await this.getFavs(id)

    this._shadowRoot.innerHTML = `
    <style>
      button {background: transparent; border: 0; padding: 0 16px 16px; float: right}
    </style>
    <button>
    <img src="${this.getImage(hasFav)}" alt='fav icon' />
    </button>`

    this._shadowRoot.querySelector('button').addEventListener('click', async e => {
      e.preventDefault()

      const { favs, hasFav } = await this.getFavs(id)

      this._shadowRoot.querySelector('img').setAttribute('src', this.getImage(!hasFav))

      const newFavs = hasFav
        ? favs.filter(fav => fav.id !== id)
        : [...favs, { id, title, image }]

      await storage.set('favs', newFavs)
    })
  }

  getImage (hasFav) {
    return hasFav ? REMOVE_IMG : ADD_IMG
  }

  async getFavs (id) {
    const favs = await storage.get('favs') || []
    const hasFav = favs.some(fav => fav.id === id)
    return { favs, hasFav }
  }
})
