const express = require('express')
const router = express.Router()



//1. 导入验证数据的中间件
const expressJoi = require('@escook/express-joi')
//2. 导入需要验证规则对象
const { reg_login_schema } = require('../schema/user')

//导入路由处理函数模块
const routerhandler = require('../router_handler/user')

//Todo:验证数据中间件卡顿
//注册expressJoi(reg_login_schema) expressJoi(reg_login_schema),
router.post('/reguser', routerhandler.reguser)
//登录
router.post('/login', routerhandler.login)

module.exports = router