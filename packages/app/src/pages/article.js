import { Article as SingleArticle } from '../components/Article.js'
import { Component } from '../main/Component.js'

class Article extends Component {
  styles () {
    return `
    p {
      font-size: 21px;
      margin-top: -16px;
      line-height: 150%;
      padding: 16px 10px 32px;
    }
    `
  }

  getInitialState () {
    return { article: false }
  }

  async connectedCallback () {
    const { id } = this.getAllAttributes()
    const article = await this.services.getArticleBy({ id })
    this.setState({ article })
  }

  render ({ state }) {
    const { article } = state
    if (!article) {
      return '<div></div>'
    }

    const { content, id, title, subtitle, image } = article

    return `
      <${SingleArticle}
        show-fav=""
        id="${id}"
        title="${title}"
        subtitle="${subtitle}"
        image="${image}">
        <p>${content}</p>
      </${SingleArticle}>
    `
  }
}

customElements.define('x-pages-article', Article)
