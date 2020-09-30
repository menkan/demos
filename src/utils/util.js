/**
 * 各种方法、快捷方法
 * @Author menkan(xutongze)
 * @Created on 2020/09/30
 * @Version v0.0.1 2020/09/30
 * @Description 本着方便自己就是方便大众的行为、编辑Util tool events
 *
 * */

const cdom = new Proxy({}, {
  get(target, propKey){
    return function(attr = {}, ...childrens) {
      const el = document.createElement(proKey)
      for(let prop of Object.keys(attrs)) {
        el.setAttribute(prop, attrs[prop])
      }
      for(let child of childrens) {
        if(typeof child === 'string')
          child = document.createTextNode(child)
        el.appendChild(child)
      }
      return el
    }
  },
})
