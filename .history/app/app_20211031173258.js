const express = require("express");
const cookieParser = require('cookie-parser')
const app = express();
const authRouter = require("./routes/auth.js");
const db = require("./modules/db.js");
const passport = require("passport");
const { connection } = require("mongoose");
app.use(function (req, res, mynext) {
    console.log("req url", req.url);
    mynext();
});
app.use(express.json());
app.use(cookieParser());
app.use(express.static(__dirname + "/public"));
app.use("/auth", authRouter);

app.use(require('express-session')(
    {
        secret: ',jkjfoasdkjnolifn32984y9812u5jil32njr!!@#13mnkjxchs',
        resave: true,
        saveUninitialized: false
    }
));

app.use(passport.initialize());
app.use(passport.session());
function (user,)
passport.use(new LocalStrategy(
    function (username, password, done) {
            db.query("select * from users where username=?",[username],(err,result)=>{
                if(err){return done(null, false);}
                if (!user) { return done(null, false); }
                if (!user.verifyPassword(password)) { return done(null, false); }
                return done(null, user);
            })
        
     
    }
));
// function checkSession(req, res, next) {
//     let found_session = sessions.find((s) => {
//         return s.session_id == req.cookies?.session_id && s.expiration_time > new Date();
//     });
//     if (found_session) {
//         found_session.expiration_time = new Date(new Date().getTime() + 5 * 60 * 1000);
//         req.session = found_session;
//         next();
//     } else {
//         res.sendStatus(401);
//     }
// }
// app.get("/users", (req, res) => {
//     res.send(users);

// });
// app.get("/userMsgs", checkSession, (req, res) => {
//     connection.query(` SELECT messages.*,
//     users.id as receiver_id,
//     users.fullname as receiver_fullname,
//     sender_users.id as sender_id,
//     sender_users.fullname as sender_fullname
//     FROM 
//    messages 
//    left join users on users.id=messages.to_user_id 
//    left join users as sender_users on sender_users.id=messages.from_user_id 
//    where 
//    messages.to_user_id=?
//    or 
//    messages.to_user_id is null
//    or 
//    messages.from_user_id=?
//    order by
//     messages.created_at desc`,[req.session.user.id,req.session.user.id], (err, result) => {
//         if (err) { console.log(err); return res.send({ error: "אירעה שגיאה בשליפת ההודעות ממסד הנתונים" }) }
//         console.log(result[0])
//         res.send(result);
//         //conn.query("/") עדכן את השולח שהודעות נשלחה למשתמש
//     })
// });
// app.get("/mdb/users", async (req, res) => {

//     const users = await user_model.find({"id":2});
//     try {
//         res.send(users);
//       } catch (error) {
//         response.status(500).send(error);
//       }
// });
// app.get("/sessions", (req, res) => {
//     res.send(sessions);
// });

// const validateUserReqest = (user) => {
//     user.username = user.username.toLowerCase();
//     if (!user.username) {
//         return null;
//     }
//     if (!user.password) {
//         return null;
//     }

//     user.password = "1" + user.password; // הוספנו כדי ש000 יעבור את הבדיקה של התנאי וכדי שההכפלה שלו תביא את אותן תוצאות
//     if (user.password > 0) {
//         user.password = user.password * 2;
//         return user;
//     }
//     return null;

// }


// console.log(__dirname);
module.exports = app;