/**
 * Created by menKan_mark on 2019/10/23;
 */

class Cookie {
  constructor() {}

  // set Cookie
  setCookie (name, value, expires, path = '/') {
    let temporary = `${ name }=${ value };expires${ expires };path=${ path }`
    document.cookie = temporary
  }

  // remove Cookie
  removeCookie (name) {}

  // update Cookie value
  updateCookie (name, value) {}

  // get Cookie
  getCookie (name) {}
}

module.exports = new Cookie()
