//导入express模块
const express = require('express')
//创建express的服务器实例
const app = express()

// 配置解析表单数据的中间件
app.use(express.urlencoded({ extended: false }))

// 一定要在路由之前，配置cors这个中间件,从而解决接口请求跨域问题
const cors = require('cors')
app.use(cors())
// 导入路由模块
const router = require('./02.apiRouter.js')
// 把路由模块，注册到 app 上
app.use('/api', router)

//调用app.listen方法，指定端口号并启动web服务器
app.listen(8081, function () {
  console.log('Express server running at http://127.0.0.1:8081')
})
