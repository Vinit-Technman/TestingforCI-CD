const express=require("express");
const app=express();


app.get("/",(req,res)=>{
    res.send("Hello World! this is version 1.3");
})

app.listen(9999,()=>{
    console.log("Server Starts on port ",9999);
});
