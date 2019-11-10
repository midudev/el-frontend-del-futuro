import { Category } from '../components/Category.js'
import { Component } from 'miduReact'

export const Categories = 'x-categories'

window.customElements.define(Categories, class extends Component {
  static get observedAttributes () { return ['selected'] }

  attributeChangedCallback (name, oldValue, newValue) {
    const ul = this.shadowRoot.querySelector('ul')
    const allCategories = ul.querySelectorAll(Category)
    const activateEl = el => el?.setAttribute('active', '')

    if (newValue !== 'undefined') {
      allCategories.forEach(el => el.removeAttribute('active'))
      activateEl(ul.querySelector(`[id="${newValue}"]`))
    } else {
      allCategories.forEach(activateEl)
    }
  }

  getInitialState () {
    return { categories: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }] }
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
        ({ emoji = '.', id, image }) => (
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
