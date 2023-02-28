

function dataFormat(strr){
   const date_1 = new Date(strr)
    
   const y = padZero(date_1.getFullYear())
   const m = padZero(date_1.getMonth()+1)
   const d = padZero(date_1.getDay())

   const h = padZero(date_1.getHours())
   const mm = padZero(date_1.getMinutes())
   const s = padZero(date_1.getSeconds())

   console.log(y+'-'+m+'-'+d +'${h}:${mm}:${s}')


}

function padZero(n){

    return n>9 ?n : '0'+n
  
}


function htmlconvert(htmlstr){

    return htmlstr.replace(/<|>|&|"/g,match=>{
        switch(match){
            case'<':
            return '&lt;'
            case'>':
            return '&gt;'
            case'"':
            return '&quot;'
            case'|':
            return '&amp;'

        
        }
    })
}

module.exports = {
    dataFormat
}