// TODO LIST
// 1.2048 canvas游戏
// 2.H5拼图游戏
// 3.pc版别踩白块
// 4.html扫雷游戏
// 5.html5刮刮乐
// 6.css3抽奖大转盘
// 7.canvas放大镜
// 8.jquery购物车[原生购物车]
// 9.css红包模糊效果
// 10.canvas小游戏
// 11.jquery图片瀑布流
// 12.html5实现本地图片裁剪
// 13.js实现代码压缩成圣诞树
// 14.Node实现校花评比排名
// 15.js实现图片轮播效果
// 16.优化socket聊天室
// 17.HTML实现markdown编辑器实时预览
// 18.nodejs私人笔记
// Javascript 设计模式学习;


// Demos.
// let person = {
//   name: '张三'
// }

let proxy = new Proxy({}, {
  get: function(target, propKey) {
    console.log('我被调用获取了——————>>', target, propKey)
    return target[propKey]
  }
})

// proxy -> get
// 可以被新对象继承、Object.create(object)

// let bproxy = Object.create(proxy)
// console.log(bproxy)
// console.log('__>>', bproxy.name)
//
// 创建数组监控拦截内容
function S
