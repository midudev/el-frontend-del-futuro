// eslint-disable-next-line
registerPaint('slanted-bg', class {
  constructor () {
    this.hue = 200
  }

  paint (ctx, geom, properties, args) {
    // draw random colors
    ctx.fillStyle = 'hsl(' + this.hue + ', 100%, 30%, 70%)'
    this.hue = this.hue + 10

    ctx.beginPath()
    ctx.moveTo(0, 0)
    ctx.lineTo(geom.width, 0)
    ctx.lineTo(geom.width - 20, geom.height)
    ctx.lineTo(0, geom.height)
    ctx.fill()

    ctx.globalCompositeOperation = 'source-atop'

    ctx.fillStyle = 'rgba(0,0,0,.15)'
    ctx.beginPath()
    ctx.moveTo(0, geom.height)
    ctx.lineTo(geom.width, geom.height - 8)
    ctx.lineTo(geom.width, geom.height)
    ctx.fill()
  }
})

// eslint-disable-next-line
registerPaint('squircle', class {
  paint (ctx, size) {
    ctx.fillStyle = 'black'

    // n=4 draw a squircle
    const n = 4

    let m = n
    if (n > 100) m = 100
    if (n < 0.00000000001) m = 0.00000000001
    const r = size.width / 2
    const w = size.width / 2
    const h = size.height / 2

    ctx.beginPath()

    for (let i = 0; i < (2 * r + 1); i++) {
      const x = (i - r) + w
      const y = (Math.pow(Math.abs(Math.pow(r, m) - Math.pow(Math.abs(i - r), m)), 1 / m)) + h

      if (i == 0) { ctx.moveTo(x, y) } else { ctx.lineTo(x, y) }
    }

    for (let i = (2 * r); i < (4 * r + 1); i++) {
      const x = (3 * r - i) + w
      const y = (-Math.pow(Math.abs(Math.pow(r, m) - Math.pow(Math.abs(3 * r - i), m)), 1 / m)) + h
      ctx.lineTo(x, y)
    }

    ctx.closePath()
    ctx.fill()
  }
})
