const http = require('http');
// const fs = require('fs');
// const url  = require('url');
const express = require('express');

const app = express();

app.get('/', (req, res)=>{
    return res.send("hellow from express")
})
app.get('/about',(req,res)=>{
    const user = req.query.name;
    return res.send(`myself ${user}`)
})
// function myHandler(req, res){
//     if(req.url === "/favicon.ico") return res.end();
//     const log = `${Date.now()}: ${req.method}  ${req.url} new request received\n`
//     const myUrl = url.parse(req.url, true);
//     console.log(myUrl)
//     fs.appendFile('log.txt', log, ()=>{});
//     switch(myUrl.pathname){
//         case "/": res.end("i am at home");
//         break;
//         case "/about": const userName = myUrl.query.name;
//         res.end(`you are ${userName}`);
//         break;
//         case "/signup":
//             if(req.method === "GET"){
//                 res.end("this is signup")
//             }
//             else if(req.method === "POST"){
//                 res.end("welcom back")
//             }
//         default: res.end("404")
//     }
// }
// const myserver = http.createServer(app);

// myserver.listen(8000,()=>{console.log("server started")})
app.listen(8000, ()=>{console.log('express started')})