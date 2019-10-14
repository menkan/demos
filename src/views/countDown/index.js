/**
 * Created by menkan_mark on 2019/03/30;
 * Last modify Time 2019/09/04: 13:00:00
 * Description: 可以改成jQuery -- soeasy library,挺好;
*/

/*
一、target
    开始时间,结束时间
二、setTimeOut 循环调用(setInterval 会存在bug...)
三、前端倒计时存在时间误差,尽可能减到最小(防止误差的方法[..])
...
*/


/*
soeasy 

Params:
{
	// 目标参数
	target: ['2019', '09', '15', '12', '12', '12']
	//
	startDate
}

Event:
	init()
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

  var soeasy = function (params){
    return new soeasy.fn.init(params)
  }
  
  soeasy.fn = soeasy.prototype = {
    constructor: soeasy,
    each: () => {
      console.log(each)
    }
  }

  var init = soeasy.fn.init = function (params){
	  console.log('2333333- - - - - ', params)
	  this.a = params.a
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
