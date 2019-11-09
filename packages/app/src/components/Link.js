export const Link = 'x-anchor'

window.customElements.define(Link, class extends HTMLElement {
  constructor () {
    super()

    const shadowRoot = this.attachShadow({ mode: 'open' })
    const href = this.getAttribute('href')

    shadowRoot.innerHTML = `
    <style>a {text-decoration: none;}</style>
    <a href='${href}'><slot></slot></a>`

    shadowRoot.querySelector('a').addEventListener('click', function (e) {
      e.preventDefault()
      window.history.pushState({}, '', href)
    })
  }
})
