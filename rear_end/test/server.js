//导入 express
const express = require("express")
const body_parse = require('./test_middle')
const cors = require('cors')
const mysql = require('mysql')
const session = require('express-session')

const app = express()
app.use(
   session({
      secret:'itheima',
      resave:false,
      saveUninitialized:true,
   })
)

const db = mysql.createPool({
   host:'127.0.0.0',
   user:'root',
   password:'',
   database:'user',
})


const insert_msg = "insert into users (username,password) values (?,?)"
const user = {username:'',password:''}
db.query(insert_msg,[user.username,user.password],(err,results)=>{
   if(err) return console.log(err.message)
   
   if(results.affectedRows === 1){
      console.log('插入成功！')
   }

})


const router = require('./router/user')
//创建web服务器


res.setHeader('Access-Control-Allow-Methods','POST,GET,DELETE')



app.use(cors)
//use 注册全局中间件
app.use('/api',router)



app.use(express.static('./static_source'))

app.use(express.static('./static_source'))


app.use()



//中间件处理函数 function(req,res,next){next()}
const middle_use = function(req,res,next){
   console.log('响应了中间件')
   const time = Date.now()

   res.starttime = time
   next()
}
const middle_use_1 = function(req,res,next){
   console.log('响应了中间件')
   const time = Date.now()

   res.starttime = time
   next()
}
// app.use(middle_use)

app.post('/login',(req,res)=>{
   
   if(req.username ==='qwe'&&req.password ==='123')


   req.session.user = req.body
   req.session.islogin = true

   return res.send({msg:'success',status:'1'})
})


//监听客户端 GET 和 POST 请求
app.post('/user',[middle_use,middle_use_1],(req,res) =>{
   res.send({name:'zx',age:20,sex:'男'})
   console.log(res.starttime)
})


app.get('/user',(req,res)=>{
   res.send('请求成功')
})

app.get('/',(req,res)=>{
   console.log(req.query)
   res.send(req.query)
})

//:id是动态参数
app.get('/user/:id/:name',(req,res)=>{
   console.log(req.params)
   res.send(req.params)
})

app.listen(80,()=>{
   console.log('express server running')
})


