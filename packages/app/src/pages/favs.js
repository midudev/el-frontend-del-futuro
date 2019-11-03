import storage from '../main/storage.js'

import { Logo } from '../components/Logo.js'
import { Link } from '../components/Link.js'

import { Component } from '../main/Component.js'

class Favs extends Component {
  styles () {
    return `
      article {
        align-content: center;
        box-sizing: border-box; 
        display: flex;
        padding: 20px;
        width: 100%;
        overflow: hidden;
        position: relative;
        transition: color 0.4s ease-in-out;
      }
      article:before {
        content: '';
        z-index: -1;
        position: absolute;
        top: 50%;
        left: 50%;
        width: 1em;
        height: 1em;
        border-radius: 50%;
        background-color: #eee;
        transform-origin: center;
        transform: translate(-50%, -50%) scale(0);
        transition: transform 0.45s ease-in-out;
      }
      article:hover {
        cursor: pointer;
      }
      article:hover::before {
        transform: translate(-50%, -50%) scale(50);
      }

      h3 {
        background: linear-gradient(to right,#d63b2d,#2140df);
        box-decoration-break: clone;
        position: relative;
        padding-left: 16px;
        flex: 1 1;
        text-decoration: none;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        -webkit-box-decoration-break: clone;
      }
      div {
        border-radius: 40px;
        box-sizing: border-box;
        padding-right: 16px;
        width: 100px;
        height: 100px;
        background-size: cover;
      }

      p {
        color: #444;
        font-size: 20px;
        text-align: center;
      }
    `
  }

  getInitialState () {
    return { favs: [] }
  }

  async connectedCallback () {
    const favs = await storage.get('favs') || []
    this.setState({ favs })
  }

  render ({ state }) {
    const { favs } = state
    return `
      <${Logo} with-favs-link="false"></${Logo}>
        <p><img src="/statics/see_favs.webp" alt="favs icon"></p>
        ${favs.length === 0 ? '<p>😶<br />No tienes todavía favoritos. ¡Dale caña!</p>' : ''}
        ${favs.map(fav => `
          <${Link} href='/article/${fav.id}'>
            <article>
              <div style="background-image: url('/statics/articles${fav.image}')"></div>
              <h3>${fav.title}</h3>
            </article>
          </${Link}>`).join('')}
    `
  }
}

customElements.define('x-pages-favs', Favs)
