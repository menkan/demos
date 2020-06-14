/**
 * 外观 Pattern
 *
 * Description:
 * 为子系统中的一组接口提供一个一致的表现,使得子系统更容易使用而不需要关注内部复杂而繁琐的细节
 *
 * effect:
 * 对接口和调用者进行了一定的解耦
 * 创造经典的三层结构MVC
 * 在开发阶段减少不同子系统之间的依赖和耦合, 方便各个子系统的迭代和扩展
 * 为大型复杂系统提供一个清晰的接口
 *
 * Notice:
 * 当外观模式被开发者连续调用时会造成一定的性能损耗, 这是由于每次调用都会进行可用性检测
 *
 * case:
 * 兼容不同浏览器的事件绑定封装
 */

//  封装ONEvent去兼容各个浏览器某些事件
function on1() {
  console.log(">>>>>>>需要去判断是否兼容某些浏览器");
  //  第二个版本: 好处是判断一次即可. 不用每次调用多次判断是否是否兼容改浏览器;
  if (document.addEventListener) {
    return function (type, fun) {
      document.addEventListener(type, fun, false);
    };
  } else if (document.attachEvent) {
    return function (type, fun) {
      document.attachEvent(`on${type}`, fun);
    };
  } else {
    return function (type, fun) {
      document[`on${type}`] = fun;
    };
  }

  // 第一个版本: 缺点: 每次调用都会去判断[IfElse]
  //   if (document.addEventListener) document.addEventListener(type, fun, false);
  //   else if (document.attachEvent) document.attachEvent(`on${type}`, fun);
  //   else document[`on${type}`] = fun;
}
const on = on1();

on("scroll", () => {
  console.log(">>>>>>>resize execute");
});
on("scroll", () => {
  console.log(">>>>>>>scroll execute222");
});
on("scroll", () => {
  console.log(">>>>>>>scroll execute3333");
});
on("scroll", () => {
  console.log(">>>>>>>scroll execute4444");
});
