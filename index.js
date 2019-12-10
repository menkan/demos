

/**
 * 函数防抖
 * @param {function} fn 
 * @param {delay} wait 
 */

// function debounce(fn, wait) {
//   let timer = null

//   return function() {
//     let context = this
//     let args = arguments

//     if(timer) {
//       clearTimeout(timer)
//       timer = null
//     }

//     timer = setTimeout(function() {
//       fn.apply(context, args)
//     }, wait)
//   }
// }

// let fn = function() {
//   console.log('Boom')
// }

// setInterval(debounce(fn, 300), 1000);

function throttle(fn, gapTime) {
  
  let _lastTime = null
  
  return function() {
    let _nowTime = +new Date()
    if(_nowTime - _lastTime > gapTime || !_lastTime) {
      console.log('坏孩子执行函数', _nowTime ,  _lastTime , gapTime ,  _lastTime)
      fn()
      _lastTime = _nowTime
    }
  }
}

let fn = function() {
  console.log('boom')
}

setInterval(throttle(fn, 2000), 10);