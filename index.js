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

/**
 *  一、工厂模式
 */

 function factoryModule({ name }) {
    let Obj = {}
    Obj.name = name
    return new Obj()
 }

import utils from './src/utils/common.js'


console.log(utils.checkCardNumber('0123456789'));
