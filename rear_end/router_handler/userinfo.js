
const db = require('../db/db')
const bcrypt = require('bcryptjs')
exports.getUserInfo = (req, res) => {

    const sql = 'select id, username, iscamerist from users where id=? '
    db.query(sql, req.user.id, (err, results) => {
        //执行语句失败
        if (err) return res.cc(err)
        //执行SQL语句成功
        if (results.length !== 1) return res.cc('获取信息为空')

        //用户信息成功
        res.send({
            status: 0,
            message: '获取用户信息成功',
            data: results[0],
        })

    })
}

exports.updateUserInfo = (req, res) => {

    const sql = 'update users set ? where id=?'

    db.query(sql, [req.body, req.body.id], (err, results) => {
        if (err) return res.cc(err)

        if (results.affectedRows !== 1) return res.cc('更新用户信息失败')
    })
    res.send('ok')
}


exports.updatePassword = (req, res) => {

    const sql = 'select * from users where id=? '

    db.query(sql, req.user.id, (err,results)=>{

        if(err) return res.cc(err)
        //是否存在
        if(results.length !== 1) return res.cc('用户不存在！')

//Todo:密码验证失败
//Todo:卡顿
        //判断密码是否正确
        const compareResult = bcrypt.compare(req.body.oldPwd, results[0].password)
        if(!compareResult) return res.cc('密码错误')

    })
    //定义更新密码的SQL语句
    const sql_1 = 'update users set password=? where id=?'

    //对新密码加密处理
    const newPwd = bcrypt.hashSync(req.body.password, 10)

    //执行sql语句
    db.query(sql_1,[newPwd, req.user.id],(err,results)=>{
    
        if(err) return res.cc('查询失败')

        if(results.affectedRows !==1 ) return res.cc('更新失败')

    })


}

exports.updateAvatar = (req, res) =>{

    const sql = 'select users set user_pic=? where id=?'

    db.query(sql,[req.body.avatar, req.user.id] ,(err,results)=>{
        if(err) return res.cc(err)

        if(results.affectedRows !==1 ) return res.cc('更换头像失败')

    })
    res.send('ok')

}