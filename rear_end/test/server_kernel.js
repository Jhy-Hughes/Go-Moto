const http = require('http')
const { url } = require('inspector')

const path = require('path')
const fs = require('fs')
const { error } = require('console')

const server = http.createServer()

server.on('request',function(req,res){

    const url_str  = req.url

    console.log('someone visit our web server')
    const fpath = path.join(__dirname,url_str)
    
    fs.readFile(fpath,'utf-8'(err))

    const method = req.method
    console.log(url_str)
    console.log(method)
    res.setHeader('Content-Type','text/html; charset=utf-8')

    res.end(method)
    
})

server.listen(61205,function(){
    console.log('server running at http://127.0.0.0:8080')
})