import { Logo } from '../components/Logo.js'
import { Article as SingleArticle } from '../components/Article.js'
import { Component } from '../main/Component.js'

class Article extends Component {
  styles () {
    return `
    p {
      margin-top: -16px;
      line-height: 150%;
      padding: 0 10px 50px;
    }
    `
  }
  getInitialState () {
    return { article: false }
  }

  connectedCallback () {
    const { id } = this.getAllAttributes()

    window.fetch(`https://el-frontend-del-futuro-api.midudev.now.sh/news/${id}`)
      .then(res => res.json())
      .then(article => {
        console.log(article)
        this.setState({ article })
      })
  }

  render ({ attrs, state }) {
    const { article } = state
    if (!article) {
      return `<div></div>`
    }

    const { content, id, title, subtitle, image } = article

    return `
      <div>
        <${Logo}></${Logo}>
        <${SingleArticle} id="${id}" title="${title}" subtitle="${subtitle}" image="${image}"></${SingleArticle}>
        <p>${content}</p>
      </div>
    `
  }
}

customElements.define('x-pages-article', Article)
