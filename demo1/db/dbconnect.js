const mysql=require("mysql")

var mysqlconnection=mysql.createConnection({
    "host":"127.0.0.1",
    "user":"root",
    "password":"root123",
    "database":"sss",
    "port":3306
})
mysqlconnection.connect((err)=>{
    if(err){
         console.log("error occured"+JSON.stringify(err))
    }
    else{
        console.log("database connection done sucessfully")
    }
})

module.exports=mysqlconnection;


