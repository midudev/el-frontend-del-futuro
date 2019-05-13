import { Component } from '../main/Component.js'
import { Link } from '../components/Link.js'

export const Category = 'x-category'

window.customElements.define(Category, class extends Component {
  static get observedAttributes () { return ['active'] }

  attributeChangedCallback (name, oldValue, newValue) {
    const el = this.shadowRoot.querySelector('slot').assignedNodes({ flatten: true })[0]
    newValue === null
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
      width: 75px;
    }
    ${Link}[active] {
      opacity: 1;
    }
    ${Link}[active] img {
      filter: grayscale(0);
    }
    span {
      display: block;
      text-align: center;
    }
    img {
      border: 1px solid #ddd;
      box-shadow: 0px 10px 14px #00000033;
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
    const isActive = typeof active !== 'undefined'

    return `<${Link} ${isActive ? 'active' : ''} href='/category/${id}'">
      <img alt="${title}" src="${image}">
      <span>${emoji}</span>
    </${Link}>`
  }
})
