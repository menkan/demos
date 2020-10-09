
// const dom = new Proxy({}, {
//   get: function(target, Propery) {
//     return function(attrs = {}, ...children) {
//       el = document.createElement(Propery)
//       for(let prop of Object.keys(attrs)) {
//         el.setAttribute(prop, attrs[prop])
//       }
//       for(let child of children) {
//         if(typeof child === 'string') {
//           child = document.createTextNode(child)
//         }
//         el.appendChild(child)
//       }
//       return el
//     }
//   }
// })

// 返回实例内容.
// const proxy = new Proxy({}, {
//   get: function(target, propkey, receiver) {
//     return receiver // Return This instance
//   }
// })

const target = Object.defineProperties({}, {
  foo: {
    value: 123,
    writable: false,
    configurable: false
  },
})



