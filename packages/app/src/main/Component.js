// ⚛️ My own React powered by Web Components!
export class Component extends HTMLElement {
  constructor () {
    super()

    this.attachShadow({ mode: 'open' })
    const styles = typeof this.styles === 'function'
      ? `<style>${this.styles()}</style>`
      : ''

    this.shadowRoot.innerHTML = `${styles}<slot id="render"></slot>`

    this.state = typeof this.getInitialState === 'function'
      ? this.getInitialState()
      : {}

    this._render({
      attrs: this.getAllAttributes(),
      state: this.state
    })
  }

  getAllAttributes () {
    const attrs = {}
    if (this.hasAttributes()) {
      for (var i = this.attributes.length - 1; i >= 0; i--) {
        const { name, value } = this.attributes[i]
        attrs[name] = value
      }
      return attrs
    } else {
      return attrs
    }
  }

  setState (newState) {
    this.state = Object.assign({}, this.state, newState)
    this._render({ attrs: this.getAllAttributes(), state: this.state })
  }

  render () {
    throw new Error('render must be defined')
  }

  _render ({ attrs, state }) {
    this.shadowRoot.querySelector('#render').innerHTML = this.render({ attrs, state })
  }

  update () {
    this._render({ attrs: this.getAllAttributes(), state: this.state })
  }
}
