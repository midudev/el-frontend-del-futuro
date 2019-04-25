import { Component } from '../main/Component.js'

export const FunnySection = 'x-funny'

window.customElements.define(FunnySection, class extends Component {
  getInitialState () {
    return { show: false }
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
      scroll-snap-type: x mandatory;
      overflow-x: scroll;
      overflow-y: hidden;
      display: flex;
      flex-direction: row;
      height: 300px;
      justify-content: start;
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
    const el = this.shadowRoot.querySelector('slot').assignedNodes({ flatten: true })[0]
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        // Update our state when observer callback fires
        if (entry.isIntersecting) {
          observer.unobserve(el)
          this.setState({ show: true })
        }
      },
      {
        rootMargin: '100px'
      }
    )
    observer.observe(el)
  }

  render ({ attrs, state }) {
    const { show } = state

    if (!show) {
      return `<div></div>`
    }

    return `
    <div>
      <h3>😆Funny slider! 🤣</h3>
      <section>
        <video controls src='https://i.imgur.com/fmvchrL.mp4'></video>
        <img src='https://i.imgur.com/pJ99KKC.jpg' />
        <video controls src='https://i.imgur.com/GDlB647.mp4'></video>
        <img src='https://i.imgur.com/i29LQCN.jpg' />
        <video controls src='https://i.imgur.com/CNFBvOt.mp4'></video>
        <video controls src='https://i.imgur.com/AGpQujt.mp4'></video>
        <video controls src='https://i.imgur.com/KWMmSAu.mp4'></video>
      </section>
    </div>
    `
  }
})
