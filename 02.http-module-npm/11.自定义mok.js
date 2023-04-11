// 向 module.exports 对象上挂载 username 属性
module.exports.username = 'zs'

// 挂载方法
module.exports.sayHello = () => {
  console.log('hello')
}

const age = 20
module.exports.age = age

module.exports.sex = 'sz'
module.exports = {
  name: 'ly',
  age: 22
}
