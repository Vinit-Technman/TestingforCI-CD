const express=require("express");
const app=express();


app.get("/",(req,res)=>{
    res.send("Hello this is v1.1");
})

app.listen(3000,()=>{
    console.log("Server Starts on port ",3000);
});