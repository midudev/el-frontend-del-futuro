import { Logo } from '../components/Logo.js'
import { Article as SingleArticle } from '../components/Article.js'
import { Fav } from '../components/Fav.js'

import { Component } from 'miduReact'

class Article extends Component {
  styles () {
    return `
    p {
      font-size: 21px;
      margin-top: -16px;
      line-height: 175%;
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
        <${Fav} id="${id}" title="${title}" image="${image}"></${Fav}>
        <p>${content}</p>
      </div>
    `
  }
}

customElements.define('x-pages-article', Article)
