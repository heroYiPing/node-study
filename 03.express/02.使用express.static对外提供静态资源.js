const express = require('express')
const app = express()

// 在这里，调用express.static() 方法，快速的对外提供静态资源
app.use(express.static('./clock'))
// 挂载路径前缀
app.use('/clock', express.static('./clock'))
app.listen(8081, () => {
  console.log('server running at http://127.0.0.1:8081')
})
