//导入express模块
const express = require('express')
// 创建express的服务器实例
const app = express()

//write your code here...

app.get('/', (req, res) => {
  throw new Error('服务器内部发生了错误')
})
app.use((err, req, res, next) => {
  console.log('发生了错误' + err.message)
  res.send(err.message)
})
//调用app.listen方法，指定端口号并启动web服务器
app.listen(8081, function () {
  console.log('Express server running at http://127.0.0.1')
})
