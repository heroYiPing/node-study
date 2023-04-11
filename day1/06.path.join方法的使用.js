const path = require('path')
const fs = require('fs')

// 注意： ../会抵消前面的路径

const pathStr = path.join('/a', '/b/c', '../', './d')

console.log(pathStr)

fs.readFile(path.join(__dirname, '/files/成绩.txt'), 'utf8', (err, dataStr) => {
  if (err) {
    return console.log(err.message)
  }
  console.log(dataStr)
})

// 定义文件的存放路径 path.basename(fpath)
const fpath = '/a/b/c/d/e/f.html'
const fullName = path.basename(fpath)
console.log(fullName)

const nextName = path.basename(fpath, '.html')
console.log(nextName)

// 获取文件的扩展名 path.extname(fpath)
const extName = path.extname(fpath)
console.log(extName)
