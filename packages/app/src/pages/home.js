import { Categories } from '../containers/Categories.js'
import { News } from '../containers/News.js'
import { FunnySection } from '../components/FunnySection.js'
import { Component } from 'miduReact'

class Home extends Component {
  static get observedAttributes () { return ['id'] }

  attributeChangedCallback () {
    const { id = 'undefined' } = this.getAllAttributes()

    this.shadowRoot.querySelector(Categories).setAttribute('selected', id)
    this.shadowRoot.querySelector(News).setAttribute('selected', id)
  }

  render ({ attrs }) {
    const { id } = attrs
    return `
      <${Categories} selected="${id}"></${Categories}>
      <${News} selected="${id}"></${News}>
      <${FunnySection}></${FunnySection}>
    `
  }
}

customElements.define('x-pages-home', Home)
