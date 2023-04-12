// 1.导入 express
const express = require('express')
// 2.创建 web 服务器
const app = express()

// 4.监听客户端的GET 和 POST 请求,并向客户端响应具体的内容
app.get('/user', (req, res) => {
  // 调用 express 提供的 res.send() 方法,向客户端响应内容
  res.send({ name: 'user', age: 22 })
})

app.post('/user', (req, res) => {
  res.send({ name: 'user', age: 21 })
})

app.get('/', (req, res) => {
  // 通过 req.query 可以获取到客户端发送过来的 查询参数
  // 注意: 默认情况下req.query 是一个空对象
  console.log(req.query)
  res.send(req.query)
})

// 注意: 这里的 :id 是一个动态的参数
app.get('/user/:id', (req, res) => {
  // req.params 是动态匹配到的 URL 参数，默认也是一个空对象
  console.log(req.params)
  res.send(req.params)
})

// 3.启动 web 服务器
app.listen(8080, () => {
  console.log('express running at http://127.0.0.1:8080')
})
