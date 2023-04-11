// 1. 导入http 模块
const http = require('http')
// 2. 创建 web 服务器实例
const server = http.createServer()
// 3. 为服务器实例绑定 request 事件
server.on('request', (req, res) => {
  console.log('someone visit our web server')
})

// 4. 启动服务器
server.listen(8080, () => {
  console.log('server running at http://127.0.0.1:8080')
})
