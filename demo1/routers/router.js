const express=require("express")
const router=express.Router()
const connection=require("../db/dbconnect")

router.get("/products",(req,resp)=>{
connection.query("select * from product",(err,data)=>{
    if(err){
        resp.status(500).send("error occured in find products"+JSON.stringify(err))
    }
    else{
        resp.send(data)
    }
})
}
)
router.get("/products/product/:pid",(req,resp)=>{
    connection.query("select * from product where pid=?",[req.params.pid],(err,data)=>{
        if(err){
            resp.status(500).send("Cant find data by id"+JSON.stringify(err))
        }
        else{
            resp.send(data[0])
        }
    })
})

router.get("/products/delete/:pid",(req,resp)=>{
    connection.query("delete from product where pid=?",[req.params.pid],(err,data)=>{
        if(err){
            resp.status(500).send("not deleted"+JSON.stringify(err))
        }
        else{
            resp.send("deleted succesfully")
        }
    })
})

router.put("/products/update/:pid",(req,resp)=>{
    var pid=req.body.pid
    var pname=req.body.pname
    var price=req.body.price
    connection.query("update product set pname=?, price=? where pid=?",[pname,price,pid],(err,data)=>{
        if(err){
            resp.status(500).send("product not updated"+JSON.stringify(err))

        }

        else{
            resp.send("product updated sucessfully...")
        }
    })
})

router.post("/products/insert",(req,resp)=>{
    var pid=req.body.pid;
    var pname=req.body.pname
    var price=req.body.price

    connection.query("insert into product values (?,?,?)",[pid,pname,price],(err,data)=>{
        if(err){
            resp.status(500).send("product not inserted"+JSON.stringify(err))
        }
        else{
            resp.send("product inserted sucessfully..")
        }
    })
})
module.exports=router;