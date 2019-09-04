/**
 * Created by menkan_mark on 2019/03/30;
 * Last modify Time 2019/09/04: 13:00:00
 * Description: 可以改成jQuery -- soeasy library,挺好;
 */

(function(global, factory){
  if(typeof module === 'object' && typeof module.exports === 'object') {
    module.exports = 
      global.document ? 
      factory(global, true) : 
      function (w) {
        if (!w.document) {
          throw new Error("--- requires a window with a document");
        }
        return factory(w);
      };
  } else {
    factory(global)
  }
})(typeof window !== "undefined" ? window : this, function(global, noGlobal) {
  var gg = 'ggg333'

  var soeasy = function (selector){
    return new soeasy.fn.init()
  }
  
  soeasy.fn = soeasy.prototype = {
    constructor: soeasy,
    each: () => {
      console.log(each)
    }
  }

  var init = soeasy.fn.init = function (){
    // 构造函数  init
    return '333'
  }

  init.prototype = soeasy.fn;

  // 构造函数 init 
  soeasy.fn.dd = function() {
    console.log('ddddddddddd')
  },

  // soeasy 函数直接调用的 echo object
  soeasy.each = function(){
    console.log('echo')
  }
  if (!noGlobal) { global.soeasy = global.$ = soeasy }
  return soeasy
});
