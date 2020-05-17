/**
 * 观察者Pattern
 *
 * Description: 定义了一种一对多的关系. 所有观察对象同时监听某一主题对象,当主题对象状态发生变化时就会通知所有观察这对象.使得它们能自动更新itSelf
 *
 * effect:
 * 目标对象与观察者存在一种动态关联,增加了灵活性
 * 支持简单的广播通信,自动通知所有已经订阅过得对象
 * 目标对象和观察者之间的抽象耦合关系能够单独扩展和重用
 *
 * Notice:
 * 一定要先监听(特殊情况也可以先发布后订阅比如QQ的离线模式)
 * case:
 * 系统消息通知
 * 网站日志记录
 * 内容订阅功能
 * Javascript事件机制
 */

class Subject {
  constructor() {
    this.subs = {};
  }

  // 添加一个观察者
  addSub(key, event) {
    const subArr = this.subs[key];
    if (!subArr) {
      this.subs[key] = [];
    }
    this.subs[key].push(event);
  }

  trigger(key, message) {
    const subArr = this.subs[key];
    if (!subArr || subArr.length === 0) return false;
    for (let i = 0; i < subArr.length; i++) {
      subArr[i](message);
    }
  }

  unSub(key, event) {
    const subArr = this.subs[key];
    if (!subArr) return false;
    if (!event) this.subArr[key] = [];
    else {
      for (let i = 0; i < subArr.length; i++) {
        subArr[i]();
        if (subArr[i] === event) {
          subArr.splice(i, 1);
        }
      }
    }
  }
}

// test
// 订阅
let subA = new Subject();

let A = (msg) => {
  console.log(">>>>>>>我是订阅者.我是观察者", msg);
};

subA.addSub("A", A);

subA.trigger("A", "this a test msg");

// let num = 0
// setInterval(() => {
//    num++
//    subA.trigger('A', `我是信息啊 -- (${num})`)
// }, 2000);
