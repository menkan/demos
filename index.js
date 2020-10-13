
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

// const target = Object.defineProperties({}, {
//   foo: {
//     value: 123,
//     writable: false,
//     configurable: false
//   },
// })

// const handler = {
//   get: function(target, propkey)
//   {
//     return target[propkey]
//   }
// }

// const proxy = new Proxy(target, handler)

// proxy.foo


// SET 方法用来拦截赋值操作。
// let example = {
//   set: function(target, propkey, propval, receiver) {
//     return target[propkey] = propval
//   }
// }

// let valiator = {
//   set: function(target, key, val) {
//     if(key === 'age') {
//       if(!Number.isInteger(val)) {
//         throw new TypeError('The age is not an interger.')
//       }
//       if(val > 200) {
//         throw new TypeError('The age seems invalid.')
//       }
//     }
//     return target[key] = val
//   }
// }

// let person = new Proxy({}, valiator)

// person.age = 100


// function invariant(key, action) {
//   if(key[0] === '_') {
//     throw new Error(`Invalid attempt to ${action} private "${key}" property`)
//   }
// }

// const handler = {
//   get(target, key){
//     invariant(key, 'get')
//     return target[key]
//   },
//   set(target, key, val){
//     invariant(key, 'set')
//     target[key] = val
//     return true
//   },
// }


// const target = {};
// const proxy = new Proxy(target, handler);
// proxy._prop
// proxy._prop = 'cc'
// const handler = {
//   apple(target, ctx, args) {
//     return Reflect.apply(...arguments)
//   }
// }


// const handler = {
//   has(target, key) {
//     return key in target;
//   }
// }
// 
// const handler2 = {
//   construct(target, args, newTarget){
//     return new target(...args)
//   }
// }
//



// const handler = {
//   defineProperty(target, key, descriptor) {
//     return false
//   }
// }

// let target = {}
// let proxy = new Proxy(target, handler)

// proxy.foo = 'bar'

// Object.getOwnPropertyDescriptor()
// 返回一个描述对象或Undefined.

// const handler = {
//   getOwnPropertyDescriptor(target, key){
//     // if(`${key}`.startsWith('_')) {}
//     if(key[0] === '_') {
//       return undefined
//     }
//     return Object.getOwnPropertyDescriptor(target, key)
//   }
// }
// let target = {_foo: 'aaa', bar: 'baz'}
// let proxy = new Proxy(target, handler)
// Object.getOwnPropertyDescriptor(proxy, 'wat')

// Object.getOwnPropertyDescriptor(proxy, 'bar')

// 'use strict'

// let target = {}
// Object.preventExtensions(target)
// const proxy = new Proxy(target, {
//   isExtensible(target) {
//     console.log(`COMMON PRLOG >> >>>>>> perform that logs`, );
//     return Object.isExtensible(target)
//   },
// })
// Object.isExtensible(proxy)



let target = {};
let handler = {};

let {proxy, revoke} = Proxy.revocable(target, handler);

proxy.foo = 123;
proxy.foo // 123

revoke();
proxy.foo // TypeError: Revoked
