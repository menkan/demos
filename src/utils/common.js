/**
 * @Craeted by menkan_mark on 2019/06/18 10:40;
 * @LastChanged by menkan_mark on 2019/12/12
 * @Descriptions common utilTool
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
  /**
   * @description Query URL Params.
   * @param {String} urlString
   * @return Object 
   */
  getUrlQueryParams(urlString) {
    const temporary = {}

    // Way One
    // const urlObj = new URLSearchParams(urlString)
    // for(const k in urlObj) {
    //   temporary[k] = urlObj[k]
    // }

    // Way Two
    // [Browser]
    let searchStr = window.location.search.substring(1)   
    let paramArray = searchStr.split('&')
    for(const key of paramArray) {
      let arr = key.split('=')
      temporary[arr[0]] = arr[1]
    }
    return temporary
  }

  /**
   * Mobile terminal
   * 移动端查看当前是什么pc
   * 主要支持 安卓 & 苹果 & ipad & 微信 & 支付宝 & 是否是手机端
   */
  getBrowserInfos() {
    return {
      isAndroid: Boolean(navigator.userAgent.match(/android/ig)),      
      isIphone: Boolean(navigator.userAgent.match(/iphone|ipod/ig)),      
      isIpad: Boolean(navigator.userAgent.match(/ipad/ig)),      
      isWeixin: Boolean(navigator.userAgent.match(/MicroMessenger/ig)),      
      isAli: Boolean(navigator.userAgent.match(/AlipayClient/ig)),
      isPhone: Boolean(/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent))
    }
  }

  // @Function 防抖
  // wait 秒内只执行一次。 多次调用只执行最后一次
  debounce(fn, wait) {
    let timer = null;
    return function() {
      let context = this;
      let args = arguments;
      if(timer) { clearTimeout(timer); timer = null; };
      timer = setTimeout(function() {
        fn.apply(context, args);
      }, wait);
    }
  }
  // @Function 节流
  throttle(fn, gapTime) {
    let _lastTime = null
    return function() {
      let _nowTime = +new Date();
      if(_nowTime - _lastTime > gapTime || !_lastTime) {
        fn();_lastTime = _nowTime;
      }
    }
  }

  // 判断小数是否相等
  // 不是很理解
  epsEqu(x,y) {
    return Math.abs(x - y) < Math.pow(2, -53);
  }

  // count Down
  countDown () {}

  // Order request（promise）
  orderList(arr) {
    return new Promise((resolve, reject) => {
      let index = 0
      next()
      function next() {
        arr[index].then(function (res) {
          index++;
          if (index == arr.length) resolve()
          else next()
        }).catch(e => {
          reject()
        })
      }
    })
  }
}

module.exports = new common
