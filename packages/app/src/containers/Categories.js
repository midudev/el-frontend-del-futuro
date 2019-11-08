import { Category } from '../components/Category.js'
import { Component } from '../main/Component.js'

export const Categories = 'x-categories'

window.customElements.define(Categories, class extends Component {
  static get observedAttributes () { return ['selected'] }

  attributeChangedCallback (name, oldValue, newValue) {
    const ul = this.shadowRoot.querySelector('ul')

    ul.querySelectorAll(Category)
      .forEach(el => el.removeAttribute('active'))

    ul.querySelector(`[id="${newValue}"]`)?.setAttribute('active', '')
  }

  getInitialState () {
    return { categories: [] }
  }

  styles () {
    return `
      ul {
        box-sizing: border-box;
        display: flex;
        list-style: none;
        margin: 0;
        overflow-x: scroll;
        overflow-y: hidden;
        overscroll-behavior: contain;
        padding: 8px;
        width: 100%;
        -webkit-overflow-scrolling: touch;
      }

      li {
        margin: 0 4px;
      }
    `
  }

  async connectedCallback () {
    const categories = await this.services.getCategories()
    this.setState({ categories })
  }

  isSelected ({ id, selected }) {
    const isSelected = selected === id || selected === 'undefined'
    return isSelected ? 'active' : ''
  }

  render ({ attrs, state }) {
    const { categories } = state
    const { selected } = attrs

    return (
      `<ul>${categories.map(
        ({ emoji, id, image }) => (
          `<li>
              <${Category}
                id="${id}" ${this.isSelected({ id, selected })}
                emoji="${emoji}"
                title="${id}"
                image="${image}">
              </${Category}>
            <li>`
        )).join('')}
    </ul>`)
  }
})
