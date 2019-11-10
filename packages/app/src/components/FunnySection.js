import { Component } from '../main/Component.js'

export const FunnySection = 'x-funny'

const INTERSECTION_OPTIONS = {
  rootMargin: '100px'
}

window.customElements.define(FunnySection, class extends Component {
  getInitialState () {
    return { content: [], loading: false }
  }

  styles () {
    return `
    div {
      box-sizing: border-box;
      padding: 16px;
    } 
    section {
      border-radius: 3px;
      box-shadow: 6px 6px 0px rgb(254, 203, 200), -6px -6px 0px rgb(203, 204, 255);
      display: flex;
      flex-direction: row;
      height: 300px;
      justify-content: start;
      overflow-x: scroll;
      overflow-y: hidden;

      scroll-snap-type: x mandatory;
    }

    img, video {
      scroll-snap-align: center;
      height: 100%;
      object-fit: cover;
      width: 80%;
    }
    `
  }

  connectedCallback () {
    const el = this.shadowRoot.querySelector('div')
    const observer = new window.IntersectionObserver(
      async ([entry]) => {
        // Get funny content when is intersecting
        if (entry.isIntersecting) {
          observer.unobserve(el)
          const content = await this.services.getFunnyContent()
          this.setState({ content })
        }
      },
      INTERSECTION_OPTIONS
    )
    observer.observe(el)
  }

  renderItem ({ type, src }) {
    return type === 'video'
      ? `<video controls src="${src}"></video>`
      : `<img src="${src}" />`
  }

  render ({ attrs, state }) {
    const { content, loading } = state

    return `<div>
      <h3>😆Funny slider! 🤣</h3>
      <section>
        ${loading ? `<span>🌀</span>` : ''}
        ${content.map(this.renderItem).join('')}
        </section>
      </div>`
  }
})
