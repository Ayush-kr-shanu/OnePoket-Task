const { log } = require("console")
const fs =require("fs")

fs.readFile('data.txt', 'utf8', (err,data)=>{
    if(err){
        console.error('Error in reading file:', err)
    }else{
        const words=data.split(" ").length
        console.log("Total word count is:",words)
    }
})