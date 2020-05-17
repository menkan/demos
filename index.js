/**
 * 工厂Pattern
 * 
 * Desc: 工厂模式顾名思义. 形式上的一个流水工程. 相似的功能相似的能力. 为止的类型[object object]
 * 可以采用构造器模式去定义它的类型.
 *
 */

//  简单工厂模式
function cobj() {
   let obj = {}
   obj.name = 'xxxxx'
   obj.getHello = (msg = 'hello') => {console.log('>>>>>>>hello my is consoleLOG')}
   return obj
}

let obj = new cobj()

obj.getHello()