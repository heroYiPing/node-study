const http = require('http')

const server = http.createServer()

server.on('request', (req, res) => {
  // req 请求对象
  const url = req.url
  const method = req.method
  const str = `你的请求地址是${url},请求方式是${method}`
  // 调用 res.setHeader 设置响应头
  res.setHeader('Content-Type', 'text/html; charset=utf-8')
  // 调用 res.send 方法,向客户端响应一些内容
  res.end(str)
})

server.listen(80, () => {
  console.log('server runing at http://127.0.0.1')
})
