import { Component } from '../main/Component'
import { Link } from '../components/Link.js'
import { Timeago } from '../components/Timeago.js'

export const Article = 'x-article'

window.customElements.define(Article, class extends Component {
  styles () {
    return `img {
      height: auto;
      object-fit: cover;
      width: 100%;
    }

    h2 {
      max-width: 90%;
      position: absolute;
      top: 0;
    }

    h4 {
      color: #333;
      margin: 0;
      font-size: 14px;
      text-transform: uppercase;
    }
    
    header {
      box-sizing: border-box;
      padding: 4px 10px;
    }
    
    span {
      -webkit-box-decoration-break: clone;
      background: paint(slanted-bg);
      box-decoration-break: clone;
      color: #fff;
      font-size: 26px;
      line-height: 30px;
      padding-left: 10px;
      padding-right: 30px;
    }

    article {
      padding-top: 80px;
      padding-bottom: 32px;
      position: relative;
    }
    `
  }

  render ({ attrs, state }) {
    const { title, subtitle, image, id, date } = attrs

    return `
    <article>
      <h2><span>${title}</span></h2>
      <${Link} href='/article/${id}'>
        <img alt="image" src="/statics/articles${image}" loading="lazy" intrinsicsize="250x150" />
        <header>
          <${Timeago} date="${date}"></${Timeago}>
          <h4>${subtitle}</h4>
        </header>
      </${Link}>
      <slot></slot>
    </article>
    `
  }
})
