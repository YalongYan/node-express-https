const express = require('express')
// const app = express()
const app = require("express")()
const fs = require("fs")
const path = require('path');

// 私钥跟证书
const httpsOption = {
  key: fs.readFileSync(path.join(__dirname, './ssl/root.key')),
  cert: fs.readFileSync(path.join(__dirname, './ssl/root.crt'))
}

// 创建https
const https = require("https").Server(httpsOption, app)
// 端口
const port = 443
// app.use(express.static(path.join(__dirname, 'public')));
// app.use('/static', express.static('public'))
app.use(express.static('public'));

// 定义根路由
app.get('/', (req, res) => {
  res.send("<h1>你好啊，https</h1>")
})

https.listen(port, () => {
  console.log(`服务启动成功!`)
  console.log(`https://localhost:${port}`)
})
