const express = require("express");
var app = express();
app.use(function(req,res,mynext){
        console.log("req url",req.url);
        mynext();
    });

app.use(express.json());
app.use(express.static(__dirname+"/public"));
let users = [{username:"chaim",password:"1234"}];
app.post("/login",(request,response)=>{
    console.log("request.body:" , request.body);
    let found_user = users.find((user)=>{
          return user.username==request.body?.username;
        });
    if(!found_user){
        users.push(request.body);
    }else{

    }
})
// app.get("/",function(request,response){
//     // response.sendFile(__dirname+"/public/index.html");
//     response.send("helloworld");
// })
// app.get("/script.js",function(request,response){
//     response.sendFile(__dirname+"/public/script.js");
// })
// app.get("/goodbye",function(request,response){
//     response.send("goodbye");
// })
app.listen(3000);
