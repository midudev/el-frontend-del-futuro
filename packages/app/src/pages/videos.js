import { Component } from '../main/Component.js'

const pipIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 7h-8v6h8V7zm2-4H3c-1.1 0-2 .9-2 2v14c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98V5c0-1.1-.9-2-2-2zm0 16.01H3V4.98h18v14.03z"/></svg>'

customElements.define('x-pages-videos', class extends Component {
  styles () {
    return `
    img {
      display: block;
      margin: auto;
      text-align: center;
    }
    button {
      background: transparent;
      border: 0;
      height: 32px;
      padding: 0;
      width: 32px;
    }
    div {
      max-width: 100%;
      padding: 16px;
    }
    article {
      margin-bottom: 16px;
    }
    video {
      display: block;
      height: auto;
      width: 100%;
    }
    `
  }

  connectedCallback () {
    this.shadowRoot.querySelectorAll('button').forEach(function (el) {
      el.addEventListener('click', async function () {
        // get the video, that is the previous element
        const video = el.previousSibling
        // first, check if video is the pictureInPicture
        const isVideoInPip = document.pictureInPictureElement
        // if the video is in Pip, then exit the PiP, if not activate it
        await (isVideoInPip
          ? document.exitPictureInPicture()
          : video.requestPictureInPicture()
        )
      })
    })
  }

  render () {
    return `
      <div>
        <img src="/statics/video_icon.webp" alt='video icon'>
        <article>
          <h3>😱 Se gasta 100.000 💶 de golpe al ver que su tarjeta estaba a punto de caducar</h3>
          <video id="1" controls src='/statics/tarjeta.webm'></video><button video="1">${pipIcon}</button>
        </article>

        <article>
          <h3>Cenar solo un yogur, principal causa de mortalidad ☠️ entre los españoles 🇪🇸</h3>
          <video id="2" controls src='/statics/yogur.webm'></video><button video="2">${pipIcon}</button>
        </article>
      </div>`
  }
})
