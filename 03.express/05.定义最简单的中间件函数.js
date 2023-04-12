const express = require('express')
const app = express()

// 定义一个最简单的中间件函数
const mw = (req, res, next) => {
  console.log('这是最简单的中间件函数')
  next()
}

// 将mw 注册为全局生效的中间件
app.use(mw)

app.get('/', (req, res) => {
  console.log('调用了/ 这个路由')
  res.send('home page')
})

app.get('/user', (req, res) => {
  console.log('调用了/user 这个路由')
  res.send('user page')
})

app.listen(8081, () => {
  console.log('server listening on http://localhost:8081')
})
