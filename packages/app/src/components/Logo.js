import { Component } from '../main/Component.js'
import { Link } from '../components/Link.js'

export const Logo = 'x-logo'

const SVG_LOGO = `<svg preserveAspectRatio="xMidYMid" style="background:0 0" viewBox="0 0 300 80">
<defs>
  <filter id="editing-vr">
    <feFlood flood-color="rgba(100%,0%,0%,0.314)" flood-opacity=".7" result="c1"/>
    <feFlood flood-color="rgba(0%,0%,100%,0.301)" flood-opacity=".7" result="c3"/>
    <feComposite in="c1" in2="SourceAlpha" operator="in" result="text-c1"/>
    <feComposite in="c3" in2="SourceAlpha" operator="in" result="text-c3"/>
    <feOffset dx="-6" dy="5" in="text-c1" result="text1"/>
    <feOffset dx="6" dy="-5" in="text-c3" result="text3"/>
    <feBlend in="SourceGraphic" in2="text1" mode="multiply" result="text4"/>
    <feBlend in="text4" in2="text3" mode="multiply"/>
  </filter>
</defs>
<path d="M15.1.9Q7.68.9 4.42-2.43 1.98-4.86 1.98-8.96q0-1.34.26-2.88l4.35-24.77 11.71-4.86-1.85 10.69h17.66l-1.6 9.02H14.85l-1.28 7.23q-.26 1.22-.26 2.18 0 4.03 3.84 4.03 2.05 0 3.43-1.73 1.37-1.73 1.88-4.61h10.63Q30.4.9 15.1.9zm54.66-9.09q1.47 0 2.62-.64l-.32 7.23q-3 2.5-6.84 2.5-8.71 0-8.71-7.3 0-1.28.26-2.75l1.41-7.87q.19-1.16.19-2.31 0-3.07-3.23-3.07-3.24 0-5.03 2.18L46.53 0H35.65l8.57-48.58H55.1L51.46-27.9q3.52-3.78 8.83-3.78 6.46 0 8.38 2.88 1.35 1.92 1.35 4.29t-.39 4.35l-1.73 9.54q-.06.38-.06.7 0 1.73 1.92 1.73zM89.09.9Q75.78.9 75.78-8.32q0-1.28.25-2.75l1.35-7.94q1.08-6.14 5.66-9.44 4.58-3.29 12.13-3.29 12.86 0 12.86 9.72 0 1.41-.25 3.08l-.77 4.54H87.49l-.26 1.47q-.13.77-.13 1.41Q87.1-8 91.26-8q1.54 0 2.63-.96 1.09-.96 1.28-2.24l10.62.13Q103.68.9 89.09.9zm-.96-19.2h8.64q.25-1.09.25-2.02 0-.93-.83-1.89-.83-.96-2.65-.96-1.83 0-3.33 1.22-1.51 1.21-2.08 3.65zm55.29-27.78h11.52L146.88 0H135.3l-8.07-25.22L122.88 0H111.3l8.12-46.08h11.91l7.93 23.55 4.16-23.55zM169.02.9q-13.31 0-13.31-9.22 0-1.28.26-2.75l1.34-7.94q1.09-6.14 5.67-9.44 4.57-3.29 12.12-3.29 12.87 0 12.87 9.72 0 1.41-.26 3.08l-.77 4.54h-19.52l-.25 1.47q-.13.77-.13 1.41 0 3.52 4.16 3.52 1.54 0 2.62-.96 1.09-.96 1.28-2.24l10.63.13Q183.62.9 169.02.9zm-.96-19.2h8.64q.26-1.09.26-2.02 0-.93-.83-1.89-.83-.96-2.66-.96-1.82 0-3.33 1.22-1.5 1.21-2.08 3.65zm64.77-12.48h10.88q.9 2.68.9 7.13 0 4.45-1.09 8.55-1.09 4.09-3.3 7.77-2.2 3.68-6.14 5.95Q230.14.9 225.02.9q-7.68 0-10.24-4.29Q210.18.9 204.48.9q-7.68 0-10.56-3.27Q192-4.54 192-8.83q0-2.24.51-4.99l3.01-16.96h10.88l-3.01 17.02q-.19.96-.19 1.73 0 3.65 3.78 3.65 2.62 0 3.96-2.28 1.35-2.27 2.31-7.96l2.17-12.16h10.88l-3 17.02q-.2.96-.2 1.73 0 3.65 3.78 3.65 6.66 0 6.66-13.96 0-3.26-.52-7.23l-.19-1.21zm47.43 6.65q0 2.11-1.28 3.91h-10.5q.51-.39.51-1.28 0-.9-1.02-1.44-1.03-.55-2.63-.55-4.8 0-4.8 2.95 0 1.15 1.8 1.66 1.79.51 4.35.83 2.56.32 5.12.93 2.56.61 4.35 2.4 1.79 1.79 1.79 4.8 0 5.31-4.25 8.06Q269.44.9 261.31.9t-11.39-2.63q-2.56-2.05-2.56-5.63 0-1.02.19-2.11l10.69-.13q-.13.9 1.06 1.57 1.18.67 3.48.67 2.31 0 3.33-.48 1.03-.48 1.03-1.82 0-.9-1.8-1.25-1.79-.35-4.38-.61t-5.18-.83q-2.6-.58-4.39-2.43-1.79-1.86-1.79-4.87 0-5.82 4.51-8.96 4.51-3.13 13.03-3.13 13.12 0 13.12 7.61z" filter="url(#editing-vr)" transform="translate(10 69)"/>
</svg>`

window.customElements.define(Logo, class extends Component {
  styles () {
    return `
    section {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    svg {
      display: block;
      margin: 16px;
      width: 200px;
    }

    svg path {
      fill: var(--text);
    }
    
    img {
      margin-right: 16px;
      height: 48px;
      width: 48px;
    }
    `
  }

  render ({ attrs }) {
    let {
      'with-video-link': withVideoLink,
      'with-favs-link': withFavsLink
    } = attrs
    withVideoLink = withVideoLink !== 'false'
    withFavsLink = withFavsLink !== 'false'

    return `
    <section>
    <${Link} href='/'>
    ${SVG_LOGO}
    </${Link}>
    <div>
    ${withFavsLink
    ? `<${Link} href="/favs">
          <img src="/statics/see_favs.webp" alt='favs icon' />
        </${Link}>`
    : ''
}
    ${withVideoLink
    ? `<${Link} href="/videos">
        <img src="/statics/video_icon.webp" alt='video icon' />
      </${Link}>`
    : ''
}
</div>
    </section>`
  }
})
