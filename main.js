var height = window.innerHeight
var width = window.innerWidth
var canvas = document.querySelector('canvas')
canvas.height = height
canvas.width = width
var c = canvas.getContext('2d')

colorArr = ['#34495e', '#bdc3c7', '#c23616', '#e1b12c' ]

function Circle(x, y, dx, dy, radius, fill) {
  this.x = x
  this.y = y
  this.dx = dx
  this.dy = dy
  this.radius = radius
  this.fill = fill
  this.draw = function () {
    c.beginPath()
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    c.fillStyle = fill
    c.fill()
    c.lineWidth = '0.5'
    c.stroke()
  }
  this.update = function () {
    if (this.x + this.radius > width || this.x - this.radius < 0) {
      this.dx = -this.dx
    }
    if (this.y + this.radius > height || this.y - this.radius < 0) {
      this.dy = -this.dy
    }
    this.x += this.dx
    this.y += this.dy
    this.draw()
  }
}


circleArr = []
for (var i = 0; i < 200; i++) {
  var r = Math.random() * 30 + 5
  var x = Math.random() * (width - r * 2) + r
  var y = Math.random() * (height - r * 2) + r
  var dx = (Math.random() - 0.5) * 2
  var dy = (Math.random() - 0.5) * 2
  var fill = colorArr[Math.floor(Math.random() * colorArr.length)]
  circleArr.push(new Circle(x, y, dx, dy, r, fill))
}

function animateCircle() {
  requestAnimationFrame(animateCircle)
  c.clearRect(0, 0, width, height)
  for (var i = 0; i < circleArr.length; i++) {
    circleArr[i].update()
  }
}
animateCircle()