const express=require('express');
const app=express();



app.get("/",function(req,res){
    res.write("Welcom")
    res.end()
})

app.get("/login",function(req,res){
    res.write("login")
    res.end()
})

app.get("/SignUp",function(req,res){
    res.write("Sign Up")
    res.end()
})

app.listen(3000,function(){
    console.log("server start on 3000");
})