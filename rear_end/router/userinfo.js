const express = require('express')

const router = express.Router()

//导入验证数据中的中间件
const expressJoi = require('@escook/express-joi')

const { update_userinfo_schema, update_password_schema, update_avatar_schema } = require('../schema/user')

const userinfo_handler = require('../router_handler/userinfo')


//获取用户信息路由expressJoi(update_userinfo_schema),,expressJoi(update_password_schema)
router.get('/getuserinfo',userinfo_handler.getUserInfo)
//更新用户信息路由
router.post('/userinfo',userinfo_handler.updateUserInfo)
//更新密码路由
router.post('/userpassword', userinfo_handler.updatePassword)
//更新头像
router.post('/update/avatar',expressJoi(update_avatar_schema), userinfo_handler.updateAvatar)

module.exports = router
