const express = require('express');

const {connectMongoDb} = require('./connection')
const userRouter = require('./routes/user')
const {logReqRes} = require('./middlewares/index')
// const users = require('./MOCK_DATA.json');
const { type } = require('os');
const app = express();
const PORT = 8001;

connectMongoDb("mongodb://127.0.0.1:27017/mongo101").then(()=>console.log("mongoDB connected")).catch((err)=>console.log("monogodb error",err))
// app.use(express.json());

//schema
app.use(express.urlencoded({extended:false}));
app.use(logReqRes('log.txt'));



app.use('/user', userRouter)



app.listen(PORT,()=>{
    console.log(`server started at PORT ${PORT}`)
})
