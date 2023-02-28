const express = require('express')

const joi = require('@hapi/joi')

const config = require('./config')

const app = express()

// //跨域
// const cors = require('cors')
// app.use(cors)

//解析表单数据中间件
app.use(express.urlencoded({extended: false}))

//中间件模板
//路由之前封装
app.use((req,res,next) => {

  res.cc = function(err,status = 1){
  res.send({
    status,
    message: err instanceof Error ? err.message : err,
  })
  }
  next()

})

//token 配置 在路由之前
const expressJWT = require('express-jwt')

app.use(expressJWT({secret: config.jwtSecretKey}).unless({path:[/^\/api\//]}))


//用户路由模块
const userouter = require('./router/user')
app.use('/api',userouter)

//userinfo 模块
const userinfoRouter = require('./router/userinfo')
app.use('/my', userinfoRouter)

//message路由模块
const messageRouter = require('./router/message')
app.use('/my', messageRouter)


//定义错误级别中间件
app.use((err,req,res,next) => {

  if(err instanceof joi.ValidationError) res.cc(err)
  if(err.name === 'UnauthorizedError') return res.cc('身份认证失败')
})


app.listen(8080,()=>{
    console.log('It has been started!')

  })
