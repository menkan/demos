/**
 * Craeted by 2019/06/18 10:40;
 * Descriptions: common utilTool
*/

// forEach
function forEach(array, callback) {
  let index = -1
  const lengths = array.length
  while(++index < lengths) {
    callback(array[index], index)
  }
  return array
}

class common {
  constructor() {
    this.auther = 'menkan_mark'
    this.createdTime = '2019/09/03'
  }

  /**
   * @description fillZero
   * @param {target} string fill Zero or other
   * @param {length} len fill length
   * @param {symbol} symbol symbol default ` `
   */
  fillZero(string, len, symbol) {
    string = String(this.getTypeof(string) === 'Number' && Math.abs(string) || string)
    let index = -1
    if(!symbol && symbol !== 0) symbol = ' '
    len = len - string.length
    while(++index < len) {
      string = `${symbol}${string}`
    }
    return string
    // so easy a methods
    // return '' + (number >= 10 ? number : `0${number}`)
  }

  /**
   * @description Query for it’s type
   * @param {param} param 
   */
  getTypeof(param) {
    let str = Object.prototype.toString.call(param)
    return str.substring(8, str.length - 1)
  }

  /**
   * @description deep copy
   * @param {*} param object or other
   * @param {*} map  No need  transmission param
   */
  deepCopy(param, map = new WeakMap()) {
    // 1、判断条件--> 判断什么类型 通过 this.getTypeof
    // 2、可继续遍历的类型, map, set...
    // 3、不可继续遍历类型, 基本类型
    // 4、函数拷贝
    if(typeof param === 'object') {
      const isArray = Array.isArray(param)
      let temporary = isArray ? [] : {}
      if (map.get(param)) {
        return map.get(param)
      }
      map.set(param, temporary)
      const keys = isArray ? undefined : Object.keys(param)
      forEach(keys || param, (value, key) => {
        if (keys) { key = value }
        temporary[key] = this.deepCopy(param[key], map)
      })
      return temporary
    } else {
      return param
    }
  }

  // - more -
}

module.exports = new common
