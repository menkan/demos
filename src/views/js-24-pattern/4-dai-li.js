/**
 * 代理 Pattern
 *
 * effect:
 * 远程代理(一个对象对另一个对象的局部代理)
 * 虚拟代理(对于需要创建开销很大的对象如渲染网页大图时, 可以先用缩略图代替真图)
 * 安全代理(保护真是对象的访问权限)
 * 缓存代理(一些开销比较大的运算提供暂时的存储,下次运算时如果传递的参数相同\则可以直接返回前面存储的运算结果)
 *
 * Notice:
 * 使用代理会增加代码复杂度. 所以应该有选择的使用代理
 *
 * case:
 * 通过缓存代理来优化计算性能
 * 图片占位符号/骨架屏
 * 合并请求\资源
 */


//  1\case
const sum = (a, b) => a + b;
let proxySum = (function() {
   let cache = {}
   return function() {
      let args = Array.prototype.join.call(arguments, ',')
      if(args in cache) {
         return cache[args]
      }
      cache[args] = sum(...arguments) // 数组函数形参解构..
      return cache[args]
   }
}())

console.time()
console.log('>>>>>>>', proxySum(1, 2));
console.timeEnd()
console.time()
console.log('>>>>>>>', proxySum(2, 2));
console.timeEnd()
console.time()
console.log('>>>>>>>', proxySum(1, 2));
console.timeEnd()
console.time()
console.log('>>>>>>>', proxySum(2, 2));
console.timeEnd()
