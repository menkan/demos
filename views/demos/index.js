const path = require('path')
const commonTool = require(path.join(__dirname, '../../utils/common.js'))

// console.log(commonTool.fillZero(19))

// console.log(commonTool.getTypeof(123))

// 深拷贝
let originObj = {
  field1: 1,
  field2: undefined,
  field3: 'ConardLi',
  field4: {
      child: 'child',
      child2: {
          child2: 'child2'
      }
  },
  field5: [1, 2, 3]
}
originObj.originObj = originObj

console.time()
let copyObj = commonTool.deepCopy(originObj)
console.log('copy print >>>>   ', copyObj)
console.timeEnd()


// console.log(Object.keys({
//   a: '1',
//   b: '2',
//   c: 3,
//   d: 4,
//   e: 5
// }))
