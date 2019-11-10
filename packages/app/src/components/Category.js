import { Component } from '../main/Component.js'
import { Link } from '../components/Link.js'

const DEFAULT_IMAGE = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mN88x8AAt0B7bEE+qwAAAAASUVORK5CYII='

const isUndefined = c => typeof c === 'undefined' || c === 'undefined'

export const Category = 'x-category'

window.customElements.define(Category, class extends Component {
  static get observedAttributes () { return ['active'] }

  attributeChangedCallback (name, oldValue, newValue) {
    const el = this.shadowRoot.querySelector(Link)
    return newValue === null
      ? el.removeAttribute('active')
      : el.setAttribute('active', '')
  }

  styles () {
    return `${Link} {
      align-content: center;
      align-items: center;
      background: none;
      border: 0;
      opacity: .3;
      text-align: center;
      text-decoration: none;
      transition: opacity .3s;
      width: 75px;
    }
    ${Link}[active], ${Link}[active] span {
      opacity: 1;
    }
    ${Link}[active] img {
      filter: grayscale(0);
    }
    span {
      display: block;
      text-align: center;
      opacity: .3;
    }
    img {
      transition: filter .3s ease;
      box-shadow: 0px 10px 14px #00000022;
      border-radius: 50%;
      height: auto;
      filter: grayscale(1);
      overflow: hidden;
      object-fit: cover;
      height: 75px;
      width: 75px;
    }`
  }

  render ({ attrs }) {
    const { active, id, emoji, image, title = '' } = attrs
    const isActive = !isUndefined(active)
    const showEmoji = !isUndefined(emoji)
    const imageToShow = isUndefined(image) ? DEFAULT_IMAGE : image

    return `<${Link} ${isActive ? 'active' : ''} href='/category/${id}'">
      <img alt="${title}" src="${imageToShow}">
      ${showEmoji ? `<span>${emoji}</span>` : ''}
    </${Link}>`
  }
})
