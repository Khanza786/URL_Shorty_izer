const express = require('express');
const { connectToMongoDB } = require("./connect")
const path = require('path')

const URL = require('./models/url')
const urlRoute = require("./routes/url");
const staticRoute = require('./routes/staticrouter')
const app = express();
const PORT = 8001;
connectToMongoDB("mongodb://127.0.0.1:27017/short-url")
.then(()=>console.log("mongodb connect")).catch((err)=>console.log("err mongodb"));

app.set('view engine', "ejs");
app.set('views',path.resolve("./views"))

app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.use("/url", urlRoute);
app.use('/', staticRoute);
app.get("/urls/:shortId",async(req,res)=>{
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate({
        shortId
    },{
        $push: {
            visitHistory: {timestamp: Date.now()}
        }
    });
    res.redirect(entry.redirectURL);
})
// app.get("/test", async (req,res)=>{
//     const allUrls = await URL.find({});
//     return res.render('home', {
//         urls: allUrls,

//     });  
// })
app.listen(PORT, ()=>console.log(`Go PORT ${PORT}`))