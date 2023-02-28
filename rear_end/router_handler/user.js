const db = require('../db/db')

const bcrypt = require('bcryptjs')

const jwt = require('jsonwebtoken')
const config = require('../config')

//注册处理函数
//Todo:注册一直卡住
exports.reguser = (req, res) => {
    const userinfo = req.body
    //    if(!userinfo.username || !userinfo.password){
    //     return res.send({ status: 1, message:'用户名不符合'})
    //    }

    const sqlStr = 'select * from users where username=?'
    db.query(sqlStr, userinfo.username, (err, results) => {
        if (err) {
            return res.send({ status: 1, message: err.message })
        }
        if (results.length >= 1) {

            return res.send('已经有人注册！')
        }else{
            console.log("userinfo.password")
            //加密
            userinfo.password = bcrypt.hashSync(userinfo.password, 10)

            //插入数据库
            const sqlInsert = 'insert into users set ?'
            db.query(sqlInsert, { username: userinfo.username, password: userinfo.password, id:userinfo.id }, (err, results) => {
                if (err) return res.send({ status: 0, message: err.message })

                if (results.affectedRows !== 1) {
                    return res.send({ status: 1 ,message : 'ok'})
                }
            })

        }
    }
    )


}

//登录处理函数
exports.login = (req, res) => {

    const userinfo = req.body

    const sql = 'select * from users where username=?'
    db.query(sql, userinfo.username, (err, results) => {
        //执行sql语句失败
        if (err) return res.cc(err)

        if (results.length !== 1) return res.cc('登录失败')

        //判断密码是否正确
        const compareResult = bcrypt.compareSync(userinfo.password, results[0].password)
        if (!compareResult) return res.cc('login fail')


        //TODO：在服务器端生成字符串
        const user = { id:userinfo.id, username: userinfo.username}

        const tokenStr = jwt.sign(user, config.jwtSecretKey, { expiresIn: config.expiresIn })

        res.send({
            status: 0,
            message: 'login OK!',
            token: 'Bearer' + tokenStr,

        })


    })
}