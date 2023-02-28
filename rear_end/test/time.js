

const TIME = require('./time_source')

const DT = new Date()

const newDT = TIME.dataFormat(DT)
console.log(newDT)