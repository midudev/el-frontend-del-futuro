import { Component } from '../main/Component.js'

export const Timeago = 'x-timeago'

const diffFromNow = ts => Math.floor((ts - +Date.now()) / 1000 / 60 / 60)
/*
  const rtf = new Intl.RelativeTimeFormat('es', { style: 'short' })
  const diff = diffFromNow(articleDate)
  const timeago = diff > -24
    ? rtf.format(diff, 'hours')
    : rtf.format(Math.floor(diff / 24), 'days')
*/

window.customElements.define(Timeago, class extends Component {
  styles () {
    return `time {
      color: #555;
      font-size: 14px;
      letter-spacing: 1px;
    }`
  }

  render ({ attrs }) {
    if (!attrs.date || attrs.date === 'undefined') return ``
    const timestamp = +attrs.date
    const articleDate = new Date(timestamp)

    const rtf = new Intl.RelativeTimeFormat('es', { style: 'short' })
    const diff = diffFromNow(articleDate)
    const timeago = diff > -24
      ? rtf.format(diff, 'hours')
      : rtf.format(Math.floor(diff / 24), 'days')

    // return `<time>${articleDate.toLocaleDateString('es-ES')}</time>`
    return `<time>${timeago}</time>`
  }
})
