// 1. 导入mysql 模块
const mysql = require('mysql')
// 2. 建立与MySQL 数据库的连接关系
const db = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: 'root',
  database: 'node'
})

// 测试 mysql 模块能否正常工作
// db.query('select 1', (err, results) => {
//   // mysql 模块工作期间报错了
//   if (err) return console.log(err.message)
//   // 能够执行sql语句
//   console.log(results)
// })
// const sqlStr = 'select * from ev_article_cate'
// db.query(sqlStr, (err, results) => {
//   // mysql 模块工作期间报错了
//   if (err) return console.log(err.message)
//   // 能够执行sql语句 查询语句 数组
//   console.log(results)
// })

// 插入数据
// const cate = { name: '英语', alias: 'yy', is_delete: 1 }
// const sqlStr = 'insert into ev_article_cate (name, alias, is_delete) values(?, ?,?)'
// db.query(sqlStr, [cate.name, cate.alias, cate.is_delete], (err, results) => {
//   // mysql 模块工作期间报错了
//   if (err) return console.log(err.message + '失败')
//   // 能够执行sql语句 insert into 插入语句, results 是一个对象
//   if (results.affectedRows === 1) {
//     console.log('插入数据成功')
//   }
// })

// // 演示插入数据的便捷方式
// const cate = { name: '英语1', alias: 'yy1', is_delete: 1 }
// const sqlStr = 'insert into ev_article_cate set ?'
// db.query(sqlStr, cate, (err, results) => {
//   // mysql 模块工作期间报错了
//   if (err) return console.log(err.message + '失败')
//   // 能够执行sql语句 insert into 插入语句, results 是一个对象
//   if (results.affectedRows === 1) {
//     console.log('插入数据成功')
//   }
// })

// // 演示如何更新用户的信息
// const cate = { id: 2, name: '英语12', alias: 'yy12', is_delete: 1 }
// const sqlStr = 'update ev_article_cate set name = ?, alias = ?, is_delete = ? where id = ?'
// db.query(sqlStr, [cate.name, cate.alias, cate.is_delete, cate.id], (err, results) => {
//   // mysql 模块工作期间报错了
//   if (err) return console.log(err.message + '失败')
//   // 能够执行sql语句 更新语句, results 是一个对象
//   if (results.affectedRows === 1) {
//     console.log('更新数据成功')
//   }
// })

// // 演示如何更新的便捷方式
// const cate = { id: 11, name: '英语123', alias: 'yy123', is_delete: 1 }
// const sqlStr = 'update ev_article_cate set ? where id = ?'
// db.query(sqlStr, [cate, cate.id], (err, results) => {
//   // mysql 模块工作期间报错了
//   if (err) return console.log(err.message + '失败')
//   // 能够执行sql语句 insert into 插入语句, results 是一个对象
//   if (results.affectedRows === 1) {
//     console.log('更新数据成功')
//   }
// })

// 删除id为11
// const sqlStr = 'delete from ev_article_cate where id = ?'
// db.query(sqlStr, 11, (err, results) => {
//   // mysql 模块工作期间报错了
//   if (err) return console.log(err.message + '失败')
//   // 能够执行sql语句 删除语句, results 是一个对象
//   if (results.affectedRows === 1) {
//     console.log('删除数据成功')
//   }
// })

// 标记删除
const sqlStr = 'update ev_article_cate set is_delete = ? where id = ?'
db.query(sqlStr, [1, 5], (err, results) => {
  // mysql 模块工作期间报错了
  if (err) return console.log(err.message + '失败')
  // 能够执行sql语句 删除语句, results 是一个对象
  if (results.affectedRows === 1) {
    console.log('标记删除成功')
  }
})
