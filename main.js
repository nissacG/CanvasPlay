var height = window.innerHeight
var width = window.innerWidth
var canvas = document.querySelector('canvas')

canvas.height = height
canvas.width = width

var c = canvas.getContext('2d')


function Circle (x, y, dx, dy, radius){
  this.x = x
  this.y = y
  this.dx = dx
  this.dy = dy
  this.radius = radius
  
  this.draw = function () {
    c.beginPath()
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    c.strokeStyle = 'hotpink'
    c.lineWidth = '2'
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

// var circ = new Circle(200, 200, 3, 3, 30)

circleArr = []

for (var i = 0; i < 100; i++){
  var x = Math.random() * (width - r) + r
  var y = Math.random() * (height - r) + r
  var dx = (Math.random() - 0.5) * 3
  var dy = (Math.random() - 0.5) * 3
  var r = 30
  circleArr.push(new Circle(x, y, dx, dy, r))
}

function animateCircle() {
  requestAnimationFrame(animateCircle)

  c.clearRect(0, 0, width, height)

  for (var i = 0; i < circleArr.length; i++){
    circleArr[i].update()
  }
  
}

animateCircle()