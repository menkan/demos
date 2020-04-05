// Javascript 设计模式学习;

/**
 *  一、工厂模式
 */

 function factoryModule({ name }) {
    let Obj = {}
    Obj.name = name
    return new Obj()
 }
