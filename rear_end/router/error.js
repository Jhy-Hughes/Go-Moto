const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
throw new Error("222222")
})


//错误级别中间件放到最后
router.use((err,req,res,next)=>{
    console.log('occur'+ err.message)
    next()
})