import { Component } from 'miduReact'

export const Fav = 'x-fav'

const ADD_IMG = '/statics/add_fav.webp'
const REMOVE_IMG = '/statics/remove_fav.webp'

window.customElements.define(Fav, class extends Component {
  styles () {
    return `
    <style>
      button {
        background: transparent;
        border: 0;
        padding: 0 16px 16px;
        float: right
      }
    </style>
    `
  }

  async connectedCallback () {
    const id = this.getAttribute('id')
    const { hasFav } = await this.getFavs(id)
    this.setState({ hasFav })

    this.shadowRoot.addEventListener('click', this.toggleFav)
  }

  async getFavs (id) {
    const favs = await this.services.getFavs()
    const hasFav = favs.some(fav => fav.id === id)
    console.log({ favs, hasFav })
    return { favs, hasFav }
  }

  toggleFav = async (e) => {
    e.preventDefault()

    const { id, title, image } = this.getAllAttributes()
    const { favs, hasFav } = await this.getFavs(id)

    const newFavs = hasFav
      ? favs.filter(fav => fav.id !== id)
      : [...favs, { id, title, image }]

    await this.services.setFavs(newFavs)
    this.setState({ hasFav: !hasFav })
  }

  getImage (hasFav) {
    return hasFav ? REMOVE_IMG : ADD_IMG
  }

  render ({ attrs, state }) {
    const { hasFav } = state

    return `<button>
      <img src='${this.getImage(hasFav)}' alt='fav icon' />
    </button>`
  }
})
