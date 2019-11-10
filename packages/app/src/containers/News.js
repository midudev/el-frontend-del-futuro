import '../components/Category.js'
import { Component } from '../main/Component.js'
import { Article } from '../components/Article.js'

export const News = 'x-news'

window.customElements.define(News, class extends Component {
  static get observedAttributes () { return ['selected'] }

  styles () {
    return 'div { min-height: 100vh }'
  }

  attributeChangedCallback () {
    this.update()
  }

  getInitialState () {
    return { news: [] }
  }

  async connectedCallback () {
    const news = await this.services.getNews()
    this.setState({ news })
  }

  render ({ attrs, state }) {
    const { selected } = attrs
    const { news } = state

    return (
      `<div>${news
        .filter(singleNews =>
          singleNews.categoryId === selected || selected === 'undefined'
        )
        .map(
          ({ date, id, title, subtitle, content, image }) => (
            `<${Article}
              date="${date}"
              id="${id}"
              image="${image}"
              subtitle="${subtitle}"
              title="${title}">
            </${Article}>`
          )).join('')}</div>`)
  }
})
