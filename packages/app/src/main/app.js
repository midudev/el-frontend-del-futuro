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

const synth = window.speechSynthesis

document.addEventListener('keydown', function (e) {
  if (e.key === 'º') {
    const recognition = new webkitSpeechRecognition()

    recognition.lang = 'es-ES'
    recognition.onresult = function(e) {
      const { transcript: message, confidence} = e.results[0][0]
      console.log(e.results)
      console.log("👂 Lo que me ha entendido es: " + message)
      console.log("Con una confianza de: " + confidence)
      
      let articles
      try {
        articles = Array.from(document.querySelector("x-pages-home").shadowRoot.querySelector("x-news").shadowRoot.querySelectorAll("x-article")).slice(0, 2)
      } catch (e) {}

      if (message.includes('las noticias')) {
        const voice = new SpeechSynthesisUtterance('¡Vale Miguel Ángel! Las dos primeras son...')
        synth.speak(voice)
        articles.forEach(el => {
          const title = el.getAttribute('title')
          const voice = new SpeechSynthesisUtterance(title)
          synth.speak(voice)
        })
        const againVoice = new SpeechSynthesisUtterance('¿Te puedo ayudar en algo más?')
        synth.speak(againVoice)
        return
      }

      const positions = ['primera', 'segunda', 'tercera']
      const index = positions.findIndex(position => message.includes(position)) || 0
      if (index >= 0) {
        const voice = new SpeechSynthesisUtterance(`Entrando en la ${positions[index]}`)
        synth.speak(voice)
        const href = articles[index].shadowRoot.querySelector('x-anchor').getAttribute('href')
        window.history.pushState({}, '', href)
        events.emit('navigation')
        const againVoice = new SpeechSynthesisUtterance('¿Te puedo ayudar en algo más?')
        synth.speak(againVoice)
        return
      }

      if (message.includes('gracias')) {
        const voice = new SpeechSynthesisUtterance('¡Gracias a ti! Un saludo a todos los asistentes del mitap. ¡Moláis mucho!')
        synth.speak(voice)
        return
      }
    }
    recognition.start()
  }
})
