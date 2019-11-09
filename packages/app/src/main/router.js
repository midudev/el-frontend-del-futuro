// 🐵-patch pushState, DON'T DO THIS AT HOME
(function (history) {
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

const matchRoute = route => {
  const { pathname } = window.location
  const { path } = route
  const dynamicPath = path.replace(/:[^\s/]+/g, '([\\w-]+)')
  const matcher = new RegExp(`^${dynamicPath}$`)
  return pathname.match(matcher)
}

const createCheckPathAgainstRoutes = ({ routerEl }) => () => {
  const {
    component,
    module: moduleToImport,
    ...matchedRoute
  } = ROUTES.find(matchRoute)
  // extract the id. It's on our case always the second segment
  const [, id] = matchRoute(matchedRoute)

  // if we component is already loaded and we have an id
  // we only have to change the attribute
  // to avoid white blink
  const { firstElementChild: actualRouteComponent } = routerEl
  if (actualRouteComponent?.tagName?.toLowerCase() === component) {
    return id && actualRouteComponent.setAttribute('id', id)
  }

  // dynamically import the module and then render it
  import(moduleToImport).then(() => {
    const idAttr = id ? `id=${id}` : ''
    routerEl.innerHTML = `<${component} ${idAttr}></${component}>`
  })
}

export const initializeRouter = ({ routerId = 'router' } = {}) => {
  const routerEl = document.getElementById(routerId)
  const checkPathAgainstRoutes = createCheckPathAgainstRoutes({ routerEl })
  // check path for the first time
  checkPathAgainstRoutes()
  // and when the and onpushstate or onpopstate fires
  window.history.onpushstate = checkPathAgainstRoutes
  window.onpopstate = checkPathAgainstRoutes
}
