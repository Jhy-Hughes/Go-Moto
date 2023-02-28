
const fs = require('fs')

const path = require('path')

const regStyle = /<style>[\s\S]*<\/style>/

const regScript = /<script>[\s\S]*<\/script>/

fs.readFile(path.join(__dirname,'../pages/time1.html'),'utf-8',function(err,dataStr){
    
    if(err) return console.log('读取信息失败' + err.message)
    

    resolveCSS(dataStr)
    resolveJS(dataStr)
    resolveHTML(dataStr)

})

//定义处理css样式
function resolveCSS(htmlStr){
    //使用正则提取需要内容
    const r1 = regStyle.exec(htmlStr)
    // 将提取出来的replace
    const newCSS = r1[0].replace('<style>','').replace('</style>','')
    
    //将提出的信息写入
    fs.writeFile(path.join(__dirname,'./pages/time.css'), newCSS, function(err){
        if(err) return console.log('写入CSS样式失败' + err.message)
    
    })
 
}

//定义处理js脚本
function resolveJS(htmlStr){
    //使用正则提取需要内容
    const r2 = regScript.exec(htmlStr)
    // 将提取出来的replace
    const newJS = r2[0].replace('<script>','').replace('</script>','')
    
    //将提出的信息写入
    fs.writeFile(path.join(__dirname,'./pages/time.js'), newJS, function(err){
        if(err) return console.log('写入CSS样式失败' + err.message)
    
    })
 
}

//定义处理html文件
function resolveHTML(htmlStr){

    // 将提取出来的replace
    const newHTML = htmlStr
    .replace(regStyle,'<link rel="stylesheet"> href="./time.css"/>')
    .replace(regScript,'<script src="./time.js"></script>')
    
    //将提出的信息写入
    fs.writeFile(path.join(__dirname,'./pages/time.html'), newHTML, function(err){
        if(err) return console.log('写入CSS样式失败' + err.message)
    
    })
 
}