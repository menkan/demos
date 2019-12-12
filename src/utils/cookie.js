/**
 * @Created by menKan_mark on 2019/10/23;
 * @LastChanged by menkan_mark on 2019/12/12;
 * @Description about cookie (add, remove, change, get);
 */

class Cookie {
  constructor(){
    this.name = 'cookie'
  }

  setCookie (key, value, expires, path = '/') {
    let date = new Date()
    date.setTime(date.getTime() + expires * 60 * 60 * 1000)
    // 默认;path=/
    // 如何更换path还需要查看文献
    document.cookie = `${key}=${escape(value)};expires=${date.toUTCString()}`
  }

  removeCookie (name) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval=getCookie(name);
    if(cval!=null) document.cookie= name + "="+cval+";expires="+exp.toUTCString();
  }

  // 更新就是设置cookie -> 调用
  // updateCookie (key, value) {
  //   document.cookie = `${key}=${escape(value)}`
  // }

  getCookie (name) {
    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
    if(arr=document.cookie.match(reg)) return unescape(arr[2]);
    else return null;
  }
}

module.exports = Cookie
