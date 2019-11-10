const { speechSynthesis: synth } = window.speechSynthesis

const say = msg => {
  const voice = new window.SpeechSynthesisUtterance(msg)
  synth.speak(voice)
}

document.addEventListener('keydown', function (e) {
  if (e.key === '1') {
    const recognition = new webkitSpeechRecognition() // eslint-disable-line

    recognition.lang = 'es-ES'
    recognition.onresult = function (e) {
      const { transcript: message, confidence } = e.results[0][0]
      console.log(e.results)
      console.log('👂 Lo que me ha entendido es: ' + message)
      console.log('Con una confianza de: ' + confidence)

      if (message.includes('apaga')) {
        document.body.classList.add('is-dark')
        say('Apagando luces, Miguelito!')
      } else if (message.includes('enciende')) {
        say('A ver. Que no soy tu criada. Esos modales.')
      } else if (message.includes('enciende') && message.includes('favor')) {
        say('Asi sí...')
        document.body.classList.remove('is-dark')
      }

      recognition.start()
    }
  }
})
