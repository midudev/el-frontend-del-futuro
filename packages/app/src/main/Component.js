import services from '../services/index.js'

// ⚛️ My own React powered by Web Components!
export class Component extends HTMLElement {
  constructor () {
    super()

    this.attachShadow({ mode: 'open' })

    this.state = typeof this.getInitialState === 'function'
      ? this.getInitialState()
      : {}

    // inject services to be used in every component
    this.services = services

    this._render({
      attrs: this.getAllAttributes(),
      state: this.state
    })
  }

  _render ({ attrs, state }) {
    const styles = this.getStyles()
    const content = this.render({ attrs, state })
    this.shadowRoot.innerHTML = `${styles}${content}`
  }

  getAllAttributes () {
    const attrs = {}
    for (var i = this.attributes.length - 1; i >= 0; i--) {
      const { name, value } = this.attributes[i]
      attrs[name] = value
    }
    return attrs
  }

  getStyles () {
    return typeof this.styles === 'function'
      ? `<style>${this.styles()}</style>`
      : ''
  }

  setState (newState) {
    this.state = { ...this.state, ...newState }
    this.update()
  }

  render () {
    throw new Error('render must be defined')
  }

  update () {
    this._render({ attrs: this.getAllAttributes(), state: this.state })
  }
}
