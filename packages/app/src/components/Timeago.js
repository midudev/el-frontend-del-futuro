import { Component } from '../main/Component.js'

export const Timeago = 'x-timeago'

const getDaysDiffFromNow = ts =>
  Math.floor((ts - +Date.now()) / 1000 / 60 / 60)

/*
  const rtf = new Intl.RelativeTimeFormat('es-ES')
  const diff = getDaysDiffFromNow(timestamp)
  date = diff > -24 // la diferencia es de menos de un dia
    ? rtf.format(diff, 'hours')
    : rtf.format(Math.floor(diff / 24), 'days')
*/
window.customElements.define(Timeago, class extends Component {
  styles () {
    return `
    time {
      color: var(--text);
      opacity: .8;
      font-size: 14px;
      letter-spacing: 1px;
    }`
  }

  render ({ attrs }) {
    if (!attrs.date || attrs.date === 'undefined') return ''
    const timestamp = +attrs.date
    let date = new Date(timestamp)

    return `<time>${date}</time>`
  }
})
