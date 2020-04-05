/*
	Author: 徐同泽
	UpdateTime: 2019/10/02
	Descriptions: 炫酷跳动时钟
*/

const CANVAS_WIDTH = '1024'       // canvas 宽度
const CANVAS_HEIGHT = '600'       // canvas 高度
const RADIUS = 7                  // 一个小球的半径
const MARGIN_TOP = 60             // 距离 canvas 顶部距离
const MARGIN_LEFT = 70            // 距离 canvas 左边距离

// 结束时间;倒计时会用到这个、需要更改逻辑
const endDate = getEndTime(2019, 9 - 1, 22, 18, 30, 0)
var curShowTimeSeconds = 0

var balls = []
const colour = ['red', 'green', 'yellow', 'pink', 'yellowgreen']

const digits = digit


let getEndTime = (year = 2020, month = 1, day = 1, hour = 0, minutes = 0, seconds = 0) => new Date(year, month - 1, day, hour, minutes, seconds);

// Get current Time;
let getNewTime = () => new Date;

function init(ctx) {
  let hour = curShowTimeSeconds.getHours()
  let minutes = curShowTimeSeconds.getMinutes()
  let seconds = curShowTimeSeconds.getSeconds()

  // clean canves
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)

  // Hours
  readerDigit(MARGIN_LEFT, MARGIN_TOP, parseInt(hour / 10), ctx)
  readerDigit(MARGIN_LEFT + 15 * (RADIUS + 1), MARGIN_TOP, parseInt(hour % 10), ctx)

  // :
  readerDigit(MARGIN_LEFT + 30 * (RADIUS + 1), MARGIN_TOP, 10, ctx)
  
  // Minutes
  readerDigit(MARGIN_LEFT + 39 * (RADIUS + 1), MARGIN_TOP, parseInt(minutes / 10), ctx)
  readerDigit(MARGIN_LEFT + 54 * (RADIUS + 1), MARGIN_TOP, parseInt(minutes % 10), ctx)
  
  // :
  readerDigit(MARGIN_LEFT + 69 * (RADIUS + 1), MARGIN_TOP, 10, ctx)

  // Seconds
  readerDigit(MARGIN_LEFT + 78 * (RADIUS + 1), MARGIN_TOP, parseInt(seconds / 10), ctx)
  readerDigit(MARGIN_LEFT + 93 * (RADIUS + 1), MARGIN_TOP, parseInt(seconds % 10), ctx)

  for(let i = 0; i < balls.length; i++) {
    ctx.fillStyle = balls[i].color
    ctx.beginPath()
    ctx.arc(balls[i].x, balls[i].y, RADIUS, 0, 2*Math.PI, true)
    ctx.closePath()
    ctx.fill()
  }
}

// 页面挂载default balls
function readerDigit(x, y, number, ctx) {
  let r = RADIUS
  ctx.fillStyle = 'rgb(0, 102, 153)'
  for(var i = 0; i < digits[number].length; i++) {
    for(var j = 0; j < digits[number][i].length; j++) {
      // console.log(digits[number][i])
      if(digits[number][i][j]) {
        ctx.beginPath()
        ctx.arc(
          x + j * 2 * (r + 1) + (r + 1),
          y + i * 2 * (r + 1) + (r + 1),
          r,
          0,
          2 * Math.PI, false)
        ctx.closePath()
        ctx.fill()
      }
    }
  }
}

function update() {
  let newTime = getNewTime()
  let oldTime = curShowTimeSeconds

  
  let newH = newTime.getHours()
  let newM = newTime.getMinutes()
  let newS = newTime.getSeconds()
  
  let oldH = oldTime.getHours()
  let oldM = oldTime.getMinutes()
  let oldS = oldTime.getSeconds()

  if(newS != oldS) {
    if(parseInt(oldH / 10) !== parseInt(newH / 10)) {
      addBalls(MARGIN_LEFT, MARGIN_TOP, parseInt(newH / 10))
    }
    if(parseInt(oldH % 10) !== parseInt(newH % 10)){
      addBalls(MARGIN_LEFT + 15 * (RADIUS + 1), MARGIN_TOP, parseInt(newH % 10))
    }

    if(parseInt(oldM / 10) !== parseInt(newM / 10)) {
      addBalls(MARGIN_LEFT + 39 * (RADIUS + 1), MARGIN_TOP, parseInt(newM / 10))
    }
    if(parseInt(oldM % 10) !== parseInt(newM % 10)){
      addBalls(MARGIN_LEFT + 54 * (RADIUS + 1), MARGIN_TOP, parseInt(newM % 10))
    }

    if(parseInt(oldS / 10) !== parseInt(newS / 10)) {
      addBalls(MARGIN_LEFT + 78 * (RADIUS + 1), MARGIN_TOP, parseInt(newS / 10))
    }
    if(parseInt(oldS % 10) !== parseInt(newS % 10)){
      addBalls(MARGIN_LEFT + 93 * (RADIUS + 1), MARGIN_TOP, parseInt(newS % 10))
    }
    curShowTimeSeconds = newTime
  }
  updateBalls()
}

// 添加小球
function addBalls(x, y, num) {
  for(var i = 0; i < digits[num].length; i++) {
    for(var j = 0; j < digits[num][i].length; j++) {
      if(digits[num][i][j]) {
        var aBall = {
          x: x + j * 2 * (RADIUS + 1) + (RADIUS + 1),
          y: y + i * 2 * (RADIUS + 1) + (RADIUS + 1),
          g: 1.5 + Math.random(),
          vx: Math.pow(-1, Math.ceil(Math.random() * 1000)) * 4,
          vy: -5,
          color: colour[Math.floor(Math.random() * colour.length)],
        }
        balls.push(aBall)
      }
    }
  }

  var count = 0
  for(var k = 0; k < balls.length; k++) {
    if(balls[k].x + RADIUS > 0 && balls[k].x + RADIUS < CANVAS_WIDTH)
      balls[count++] = balls[k]
  }

  while(balls.length > Math.min(count, 300)) {
    balls.pop()
  }
}

function updateBalls() {
  for(var i = 0; i < balls.length; i ++) {
    balls[i].x += balls[i].vx
    balls[i].y += balls[i].vy
    balls[i].vy += balls[i].g
    if(balls[i].y >= CANVAS_HEIGHT - RADIUS) {
      balls[i].y = CANVAS_HEIGHT - RADIUS
      balls[i].vy = - balls[i].vy * 0.75
    }
  }
}

window.onload = function(){
  // Query element and set config.
  var ELEMENT = document.getElementById('canvas')
  ELEMENT.width = CANVAS_WIDTH
  ELEMENT.height = CANVAS_HEIGHT

  var context = ELEMENT.getContext('2d')
  curShowTimeSeconds = getNewTime()

  init(context)
  setInterval(() => {
    init(context)
    update()
  }, 60);
}
