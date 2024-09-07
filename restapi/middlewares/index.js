const fs = require('fs');

function logReqRes(fileName){
    return (req,res,next)=>{
        fs.appendfile(fileName,`\n${Date.now()}:${req.ip}\n`,(err,data)=>{
            next();
        })
    }
}

module.exports = { logReqRes}