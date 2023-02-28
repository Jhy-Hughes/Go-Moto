const express = require("express");
const router = express.Router()


//导入验证数据中的中间件
const expressJoi = require('@escook/express-joi')

const{add_Message, del_message} = require('../schema/message')

//导入信息处理模块
const message_handler = require('../router_handler/message')

router.get('/message',message_handler.getMssage)

router.post('/addmessage', expressJoi(add_Message), message_handler.addMessage)

//根据id删除message
router.get('/delete/:id',expressJoi(del_message), message_handler.delMessageById)



module.exports = router
