import './polyfills.js'
import './events.js'

import '../components/Logo.js'
import events from './events.js';

function initRouter () {
  let actualRoute = ''
  const routerEl = document.getElementById('router')

  const routes = [
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
      path: '/videos',
      component: 'x-pages-videos',
      module: '/pages/videos.js'
    }
  ]

  const matchRoute = route => {
    const { pathname } = window.location
    const matcher = new RegExp('^' + route.path.replace(/:[^\s/]+/g, '([\\w-]+)') + '$')
    return pathname.match(matcher)
  }

  const checkPathAgainstRoutes = () => {
    for (let route of routes) {
      const matchedRoute = matchRoute(route)

      if (matchedRoute) {
        const id = matchedRoute[1]
        if (actualRoute === route.component) {
          routerEl.querySelector(route.component).setAttribute('id', id)
        } else {
          import(route.module).then(module => { // eslint-disable-line
            actualRoute = route.component
            const idAttr = id ? `id=${id}` : ''
            routerEl.innerHTML = `<${route.component} ${idAttr}></${route.component}>`
          })
        }

        break
      }
    }
  }

  checkPathAgainstRoutes()
  events.on('navigation', checkPathAgainstRoutes)
  window.onpopstate = checkPathAgainstRoutes
}

initRouter()

const voiceMessages = [
  'No te he entendido bien.',
  'Ja ja ja. Te había entendido antes. Tienes 11 noticias por leer.',
  'Gracias las que tu tienes.'
]
let i = 0

const synth = window.speechSynthesis

document.addEventListener('keydown', function (e) {
  if (e.key === 'º') {
    const recognition = new webkitSpeechRecognition()

    recognition.lang = 'es-ES'
    recognition.onresult = function() {
      const voice = new SpeechSynthesisUtterance(voiceMessages[i])
      synth.speak(voice)
      i++
    }
    recognition.start()
  }
})
