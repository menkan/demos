/**
 * 迭代器Parttern
 *
 * Desc:
 * 提供一种方法顺序访问一个聚合对象中的各个元素,使用者并不需要关心该方法的内部表示
 *
 * effect:
 * 为遍历不同集合提供统一的接口
 * 保护原集合但又提供外部访问内部的方式
 *
 * case:
 * 数组的遍历方法: forEach, map, reduce...
 */


//  遍历数组或对象方法
function _each(el, event = (v, k, el) => {}) {
  let checkType = target => (Object.prototype.toString.call(target).slice(8, -1))

  if(['Array', 'String'].indexOf(checkType(el)) > -1) {
     for (let index = 0; index < el.length; index++) {
        event(el[i], i, el)
     }
  } else if(checkType(el) === 'Object') {
     for (const key in el) {
        if (el.hasOwnProperty(key)) {
           event(el[key], key, el)
        }
     }
  }
}
