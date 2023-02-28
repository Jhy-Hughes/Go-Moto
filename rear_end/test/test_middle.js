const qs = require('querystring')

const body_parse = (req,res,next)=>{
    let str = ' '
    req.on('data',(chunk)=>{
       str +=chunk
    })
    req.on("end",()=>{
 
       console.log(str)
 
       const body = qs.parse(str)
       req.body = body
       next()
       
    })
}


module.exports = body_parse