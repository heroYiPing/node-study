const express = require('express')
const router = express.Router()

// 在这里挂载路由
router.get('/get', (req, res) => {
  // 通过 req.query 获取客户端查询字符串,发送到服务器的数据
  const query = req.query
  res.send({
    success: true, // true 表示成功
    msg: 'get 请求成功',
    data: query
  })
})

// 定义 post 接口
router.post('/post', (req, res) => {
  const body = req.body
  res.send({
    success: false,
    msg: 'post 请求失败',
    data: body
  })
})

// 定义 DELETE接口
router.delete('/delete', (req, res) => {
  res.send({ success: false, msg: 'delete 请求成功' })
})

module.exports = router
