const express=require("express")
const app=express()
const bodyparser=require("body-parser")
const router=require("./routers/router")
app.use(cros({
         origin:"http://localhost:3000",
         Credential:true,
}))
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json())
app.use("/",router)



app.listen(8001,()=>{
    console.log("your server is run on port 8001")
})