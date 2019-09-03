/**
 * Craeted by 2019/06/18 10:40;
 * Descriptions: common utilTool
*/

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

  fillZero(number) {
    return '' + (number >= 10 ? number : `0${number}`)
  }

  getTypeof(param) {
    let toString = Object.prototype.toString
    let str = toString.call(param)
    return str.substring(8, str.length - 1)
  }

  // 深拷贝
  deepCopy(param, map = new WeakMap()) {
    if(typeof param === 'object') {
      const isArray = Array.isArray(param)
      let temporary = isArray ? [] : {}
      if (map.get(param)) {
        return map.get(param)
      }
      map.set(param, temporary)
      const keys = isArray ? undefined : Object.assign(param)
      // for(const key in param) {
      //   temporary[key] = this.deepCopy(param[key], map)
      // }
      forEach(keys || param, (value, key) => {
        console.log('keys>>>', keys)
        if (keys) {
          key = value;
        }
        temporary[key] = this.deepCopy(param[key], map)
      })
      return temporary
    } else {
      return param
    }
  }

}

module.exports = new common
