import { Component } from 'miduReact'

export const Router = 'x-router'

// 🐵-patch pushState, DON'T DO THIS AT HOME
;(function (history) {
  const { pushState } = history
  history.pushState = (...args) => {
    pushState.apply(history, args)
    if (typeof history.onpushstate === 'function') {
      history.onpushstate()
    }
  }
})(window.history)

const ROUTES = [
  {
    path: '/',
    component: 'x-pages-home',
    module: '/pages/home.js'
  },
  {
    path: '/category/:id',
    component: 'x-pages-home',
    module: '/pages/home.js'
  },
  {
    path: '/article/:id',
    component: 'x-pages-article',
    module: '/pages/article.js'
  },
  {
    path: '/favs',
    component: 'x-pages-favs',
    module: '/pages/favs.js'
  },
  {
    path: '/videos',
    component: 'x-pages-videos',
    module: '/pages/videos.js'
  }
]

window.customElements.define(Router, class extends Component {
  constructor () {
    super()
    // check path for the first time
    this.checkPathAgainstRoutes()
    // and when the and onpushstate or onpopstate fires
    window.history.onpushstate = this.checkPathAgainstRoutes
    window.onpopstate = this.checkPathAgainstRoutes
  }

  checkPathAgainstRoutes = () => {
    const {
      component,
      module: moduleToImport,
      ...matchedRoute
    } = ROUTES.find(this.matchRoute)
    // extract the id. It's on our case always the second segment
    const [, id] = this.matchRoute(matchedRoute)

    // if we component is already loaded and we have an id
    // we only have to change the attribute to avoid the blink
    const { firstElementChild: actualRouteComponent } = this.shadowRoot
    if (actualRouteComponent?.tagName?.toLowerCase() === component) {
      return actualRouteComponent.setAttribute('id', id)
    }

    // dynamically import the module and then render it
    import(moduleToImport).then(() => {
      const idAttr = id ? `id=${id}` : ''
      this.shadowRoot.innerHTML = `<${component} ${idAttr}></${component}>`
    })
  }

  matchRoute (route) {
    const { pathname } = window.location
    const { path } = route
    const dynamicPath = path.replace(/:[^\s/]+/g, '([\\w-]+)')
    const matcher = new RegExp(`^${dynamicPath}$`)
    return pathname.match(matcher)
  }

  render () {
    return ''
  }
})
