const db = require('../db/db')


exports.getMssage = (req, res)=>{

    const sql = 'select * from ev_message where is_delete = 0 order by id asc'
    db.query(sql,(err,results)=>{
        if(err) return res.cc('fail')

        res.send({
            status: 0,
            message:'获取文章分类数据成功',
            data: results,
        })
    })

}

exports.addMessage = (req, res) => {
    

}


exports.delMessageById  = (req,res) => {

    const sql = 'update ev_message set is_delete=1 where id=? '

    db.query(sql, req.params.id ,(err,results)=>{
        
        if(err) return res.cc(err)

        if(results.affectedRows !==1) return res.cc('删除文章分类失败！')

        res.cc('删除文章分类成功!', 0)

    })

}