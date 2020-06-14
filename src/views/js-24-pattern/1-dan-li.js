
/**
 * 单例模式
 * 有一个实例。且只有一个
 * effect: 
 * * 模块之间的通信
 * * 保证某个类的对象唯一性
 * * 防止变量污染
 */

/**
 * HTML
<div id="fish" weight="100">fish</div>
 */

(function(){
  "use strict"
  let fish = null
  function catchFish() {
     if(fish) {
        return {
           fish,
           drankWater: function (){
              let prop = this.fish.getAttribute('weight')
              prop = Number(prop)
              console.log('??????? THIS ERROR: ', this)
              this.fish.setAttribute('weight', ++prop)
           }
        }
     } else {
        fish = document.querySelector('#fish')
        return {
           fish,
           drankWater: function (){
              console.log('??????? this ERROR: ', this);
              let prop = this.fish.getAttribute('weight')
              prop = Number(prop)
              this.fish.setAttribute('weight', ++prop)
           }
        }
     }
  }
  // 每三秒中给鱼儿喂水一次
  setInterval(() => {
     catchFish().drankWater()
  }, 3000)
})()
