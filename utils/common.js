/**
 * Craeted by 2019/06/18 10:40;
 * Descriptions: common utilsJs
*/

function CommonUtils() {
  this.auther = 'menKan'
  this.createdTime = '2019/06/18'
}

/**
 * desc: browser window  infos
 */
CommonUtils.prototype.getBrowserInfo = function() {
  let browserInfo = window.navigator.userAgent.toLowerCase()
  // "mozilla/5.0 (macintosh; intel mac os x 10_14_3) applewebkit/537.36 (khtml, like gecko) chrome/74.0.3729.169 safari/537.36"

  let text = { origin: browserInfo }

  let regExp = /\w+\/\S+/ig
  let arr = browserInfo.match(regExp)

  for(let item of arr){
    let temp = item.split('/')
    text[temp[0]] = temp[1]
  }
  return text
}

const commonUtils = new CommonUtils()