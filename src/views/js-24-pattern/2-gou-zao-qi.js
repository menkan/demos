
/**
 * 构造器模式
 * 
 * effect:
 * 创造特定类型的对象
 * 逻辑与业务的封装
 */

function Tools() {
  // 如果不是实例对象进来帮NEw实例
  if(!(this instanceof Tools)) return new Tools()
  const _ = this
  _.name = 'js tools'
  _.getElement = function(className) {
     return document.querySelector(className)
  }
  _.isArray = function(arr) {
     return Array.isArray.call(_, arr)
  }
}
let tools = Tools()
// console.log('>>>>>>>', tools.constructor.name);
