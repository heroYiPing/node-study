// 1.1 导入 fs 模块
const fs = require('fs')

// 1.2 导入path模块
const path = require('path')

// 1.3 定义正则表达式，分别匹配<style></style> 和 <script></script>标签

const regStyle = /<style>[\s\S]*<\/style>/
const regScript = /<script>[\s\S]*<\/script>/

// 2.1 调用 fs.readFile()方法读取文件
fs.readFile(path.join(__dirname, './files/index.html'), 'utf8', (err, dataStr) => {
  // 2.2 读取HTML 文件失败
  if (err) return console.log(err.message, '文件读取失败')
  // 2.3 读取文件成功后，调用对应的三个方法，分别拆解出html,css,js文件
  resolveCSS(dataStr)
  resolveScript(dataStr)
  resolveHTML(dataStr)
})

// 3.1 定义读取css 样式的方法
function resolveCSS(dataStr) {
  // 3.2使用正则提取需要的内容
  let str = regStyle.exec(dataStr)
  console.log(str)
  // 3.3 将提取出来的样式字符串，进行字符串的replace 替换操作
  const newStr = str[0].replace('<style>', '').replace('</style>', '')
  // 3.4 调用fs.writeFile方法写入内容
  fs.writeFile(path.join(__dirname, './clock/index.css'), newStr, (err) => {
    if (err) return console.log('css样式写入失败', err.message)
    console.log('css样式写入成功')
  })
}

// 4.1 定义读取js 内容的方法
function resolveScript(dataStr) {
  // 4.2使用正则提取需要的内容
  let str = regScript.exec(dataStr)
  console.log(str)
  // 4.3 将提取出来的样式字符串，进行字符串的replace 替换操作
  const newStr = str[0].replace('<script>', '').replace('</script>', '')
  // 4.4 调用fs.writeFile方法写入内容
  fs.writeFile(path.join(__dirname, './clock/index.js'), newStr, (err) => {
    if (err) return console.log('js 脚本写入失败', err.message)
    console.log('js 脚本写入成功')
  })
}

// 5.1 定义读取html 内容的方法
function resolveHTML(dataStr) {
  // 5.2 将字符串调用 replace 方法，把内的 style 和 script 标签，替换为外联的 link 和 script 标签
  let newHtml = dataStr.replace(regStyle, '<link rel="stylesheet" href="index.css"></link>').replace(regScript, '<script src="index.js"></script>')
  // 5.3 调用fs.writeFile方法写入内容
  fs.writeFile(path.join(__dirname, './clock/index.html'), newHtml, (err) => {
    if (err) return console.log('html 内容写入失败', err.message)
    console.log('html 内容写入成功')
  })
}
