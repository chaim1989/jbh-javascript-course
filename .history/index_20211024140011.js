const express = require("express");
// const mongoose = require("mongoose");
const uuidv4 = require("uuid").v4;
var cookieParser = require('cookie-parser')
var app = express();
const mysql = require("mysql2");
const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'mycalss_user',
    password:'Cs12345678',
    database: 'my_class'
  });
// mongoose.connect('mongodb://127.0.0.1:27017/mycalssdb');
// const db_connection = mongoose.connection;
// db_connection.on("error", console.error.bind(console, "connection error: "));
// db_connection.once('open',()=>{console.log("connected to mongodb sucessfully")})
//  const user_model = require("./models/user.js")
//  console.log(user_model);
app.use(function (req, res, mynext) {
    console.log("req url", req.url);
    mynext();
});

app.use(express.json());
app.use(cookieParser());

app.use(express.static(__dirname + "/public"));
let users = [{ id: 1, username: "chaim", password: "22468" }, { id: 2, username: "moshe", password: "211356" }];
let sessions = [];

app.post("/login", (request, response) => {
    console.log("original request.body:", request.body);
    // let original_user = {...request.body};
    // original_user.im_original_user = true;
    // console.log("")
    let user = validateUserReqest({ ...request.body });

    if (!user) {
        return response.send({ error: "פרטי המשתמש לא עברו ולדיציה" });
    }
    // console.log("validated request.body:" , request.body);
    let found_user = users.find((u) => {
        return u.username == user.username;
    });

    if (!found_user) {//המשתמש לא נמצא
        let last_inserted_user = users[users.length - 1];
        user.id = last_inserted_user.id + 1;
        console.log("user is about to get pushed", user)
        users.push({ ...user });
        delete user.password;
        response.send({ user: user });
    } else {//המשתמש נמצא

        if (found_user.password == user.password) {
            let user_to_send_to_client = { ...found_user };
            delete user_to_send_to_client.password;
            let session = { 
                user_id: user_to_send_to_client.id, 
                session_id: uuidv4(), 
                expiration_time: new Date(new Date().getTime() + 5*60*1000)
            };
            sessions.push(session)
            response.cookie('session_id', session.session_id).send({ user: user_to_send_to_client});
        } else {
            response.send({ error: "הסיסמה שהקשת שגויה" });
        }

    }
});
app.post("/logout",(req,res)=>{

    let session_index = sessions.findIndex((s)=>{
        return s.session_id == req.session?.session_id;
    });
    if(session_index){
        sessions.splice(session_index,1);
    }
    res.end();

})
app.get("/userDetails",checkSession,(req,res)=>{

   
    res.send(req.user);
    
})
function checkSession(req,res,next){
    let found_session = sessions.find((s)=>{
        return s.session_id == req.cookies?.session_id && s.expiration_time > new Date();
    });
    if(found_session){
        let found_user = users.find((u)=>{
            return u.id == found_session.user_id;
        })
        if(found_user){
            found_session.expiration_time =new Date(new Date().getTime() + 5*60*1000);
            let user_to_send = {...found_user};
            delete user_to_send.password;
            req.user = user_to_send;
            req.session  = found_session;
            next();
            
        }else{
            res.sendStatus(401);
        }
    }else{
        res.sendStatus(401);
    }
}
app.get("/users", (req, res) => {
    res.send(users);

});
// app.get("/mdb/users", async (req, res) => {
    
//     const users = await user_model.find({"id":2});
//     try {
//         res.send(users);
//       } catch (error) {
//         response.status(500).send(error);
//       }
// });
app.get("/sessions", (req, res) => {
    res.send(sessions);
});

const validateUserReqest = (user) => {
    user.username = user.username.toLowerCase();
    if (!user.username) {
        return null;
    }
    if (!user.password) {
        return null;
    }

    user.password = "1" + user.password; // הוספנו כדי ש000 יעבור את הבדיקה של התנאי וכדי שההכפלה שלו תביא את אותן תוצאות
    if (user.password > 0) {
        user.password = user.password * 2;
        return user;
    }
    return null;

}

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