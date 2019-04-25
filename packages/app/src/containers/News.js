import '../components/Category.js'
import { Component } from '../main/Component.js'
import { Article } from '../components/Article.js'

export const News = 'x-news'

window.customElements.define(News, class extends Component {
  static get observedAttributes () { return ['selected'] }

  styles () {
    return `div { min-height: 100vh }`
  }

  attributeChangedCallback () {
    this.update()
  }

  getInitialState () {
    return { news: [] }
  }

  connectedCallback () {
    window.fetch('https://el-frontend-del-futuro-api.midudev.now.sh/news')
      .then(res => res.json())
      .then(news => {
        this.setState({ news })
      })
  }

  render ({ attrs, state }) {
    const { selected } = attrs
    const { news } = state

    return (
      `<div>${news
        .filter(singleNews => singleNews.categoryId === selected || selected === 'undefined')
        .map(
          ({ id, title, subtitle, content, image }) => (
            `<${Article} id="${id}" link="" title="${title}" subtitle="${subtitle}" image="${image}"></${Article}>`
          )).join('')}</div>`)
  }
})
