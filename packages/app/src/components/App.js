import { Component } from '../main/Component.js'
import { Router } from './Router.js'
import { Logo } from './Logo.js'

export const App = 'x-app'

window.customElements.define(App, class extends Component {
  render ({ attrs, state }) {
    return `
      <${Logo}></${Logo}>
      <${Router}></${Router}>
    `
  }
})
