import { Category } from '../components/Category.js'
import { Component } from 'Component'

export const Categories = 'x-categories'

window.customElements.define('x-categories', class extends Component {
  static get observedAttributes () { return ['selected'] }

  attributeChangedCallback (name, oldValue, newValue) {
    const ul = this.shadowRoot.querySelector('slot').assignedNodes({ flatten: true })[0]
    const activeLi = ul.querySelectorAll('[active]')

    if (activeLi.length > 0) {
      activeLi.forEach(element => element.removeAttribute('active'))
      const categoryElement = ul.querySelector(`[id="${newValue}"]`)
      if (categoryElement) {
        categoryElement.setAttribute('active', '')
      } else {
        ul.querySelectorAll(Category).forEach(el => el.setAttribute('active', ''))
      }
    }
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

  connectedCallback () {
    window.fetch('https://el-frontend-del-futuro-api.midudev.now.sh/categories')
      .then(res => res.json())
      .then(categories => {
        this.setState({ categories })
      })
  }

  isSelected ({ id, selected }) {
    return selected === id || selected === 'undefined'
  }

  render ({ attrs, state }) {
    const { categories } = state
    const { selected } = attrs

    return (
      `<ul>${categories.map(
        ({ active, emoji, id, image }) => (
          `<li>
              <${Category} id="${id}" ${this.isSelected({ id, selected }) ? 'active' : ''} emoji="${emoji}" title="${id}" image="${image}"></${Category}>
            <li>`
        )).join('')}
    </ul>`)
  }
})
