
function oneFun() {
  return new Promise((resolve, reject) => {
    setTimeout( _ => {
      console.log('1')
      resolve()
    }, 1000)
  })
}

function towFun() {
  return new Promise((resolve, reject) => {
    setTimeout( _ => {
      console.log('2')
      // resolve()
      reject()
    }, 2000)
  })
}

function order(arr) {
  return new Promise((resolve, reject) => {
    let index = 0
    next()
    function next() {
      arr[index].then(function (res) {
        index++;
        if (index == arr.length) resolve()
        else next()
      }).catch(e => {
        reject()
      })
    }
  })
}

order([oneFun(), towFun()]).then(res => {
  console.log('3')
}).catch(e => {
  console.log('error')
})

// 1
// 2
// 3