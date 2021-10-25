const express = require("express");
// const mongoose = require("mongoose");
const uuidv4 = require("uuid").v4;
var cookieParser = require('cookie-parser')
var app = express();
const mysql = require("mysql2");
const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'mycalss_user',
    password: 'Cs12345678',
    database: 'my_class'
});
connection.on("error", (event) => {
    console.log("connection error", event.sqlMessage)
})
connection.on("connect", () => {
    console.log("connection success");
})
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
let sessions = [];
app.post("/signup",(req,res)=>{
    console.log(req.body);
    let user = validateUserReqest({ ...req.body });
    if(user){
        if(!user.fullname || user.fullname.length<4){
            return res.send({error:"עליך להזין שם מלא באורך של לפחות 4 תווים"})       
        }    
        connection.query("insert into users (username,password,fullname) values (?,?,?)",[
            user.username,user.password,user.fullname
        ],(err,result)=>{
        if(err){
            console.log(err); 
            let errorstring;
            switch (err.errno) {
                case 1062:
                    errorstring = "שם המשתמש שהזנת קיים כבר במערכת נא בחר שם משתמש אחר"
                    break;
                case 1406:
                    errorstring = ""
                    break;
                default:
                    errorstring ="שגיאה בהכנסת המשתמש לDB";
                    break;
            }
            return res.send({error:errorstring})
          
        } 
           res.send({user_id:result.insertId});    
        });
    }else{
        res.send({error:"שגיאה במבנה הנתונים של המשתמש "})
    }
});
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
    // let found_user = users.find((u) => {
    //     return u.username == user.username;
    // });
    
    // console.log(`SELECT * FROM users WHERE users.username=${connection.escape(user.username)}`);
    connection.query(`SELECT * FROM users WHERE users.username=${connection.escape(user.username)}`, (err, result) => {
        if (err) {
            console.log(err);
            return response.send({ error: "אירעה שגיאה בעת אחזור הנתונים ממסד הנתונים" });
        }
        if (result?.length > 0) {
            let found_user = result[0];
            if (found_user.password == user.password) {
                // let user_to_send_to_client = { ...found_user };
                delete found_user.password;
                let session = {
                    user_id: found_user.id,
                    session_id: uuidv4(),
                    expiration_time: new Date(new Date().getTime() + 5 * 60 * 1000),
                    user: found_user
                };
                sessions.push(session)
                response.cookie('session_id', session.session_id).send({ user: found_user });
            } else {
                response.send({ error: "הסיסמה שהקשת שגויה" });
            }
        } else {
            response.send({ error: "לא נמצא משתמש שהזנת" })
        }

    });


});
app.post("/logout", (req, res) => {

    let session_index = sessions.findIndex((s) => {
        return s.session_id == req.session?.session_id;
    });
    if (session_index) {
        sessions.splice(session_index, 1);
    }
    res.end();

})
app.get("/userDetails", checkSession, (req, res) => {


    res.send(req.session.user);

})
function checkSession(req, res, next) {
    let found_session = sessions.find((s) => {
        return s.session_id == req.cookies?.session_id && s.expiration_time > new Date();
    });
    if (found_session) {
        found_session.expiration_time = new Date(new Date().getTime() + 5 * 60 * 1000);
        req.session = found_session;
        next();
    } else {
        res.sendStatus(401);
    }
}
// app.get("/users", (req, res) => {
//     res.send(users);

// });
app.get("/userMsgs", checkSession, (req, res) => {
    connection.query(` SELECT messages.*,
    users.id as receiver_id,
    users.fullname as receiver_fullname,
    sender_users.id as sender_id,
    sender_users.fullname as sender_fullname
    FROM 
   messages 
   left join users on users.id=messages.to_user_id 
   left join users as sender_users on sender_users.id=messages.from_user_id 
   where 
   messages.to_user_id=?
   or 
   messages.to_user_id is null
   or 
   messages.from_user_id=?
   order by
    messages.created_at desc`,[req.session.user.id,req.session.user.id], (err, result) => {
        if (err) { console.log(err); return res.send({ error: "אירעה שגיאה בשליפת ההודעות ממסד הנתונים" }) }
        console.log(result[0])
        res.send(result);
        //conn.query("/") עדכן את השולח שהודעות נשלחה למשתמש
    })
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