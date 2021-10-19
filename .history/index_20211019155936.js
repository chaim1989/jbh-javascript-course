const express = require("express");

import { v4 as uuidv4 } from 'uuid';

var app = express();
app.use(function (req, res, mynext) {
    console.log("req url", req.url);
    mynext();
});

app.use(express.json());
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
            sessions.push({ 
                user_id: user_to_send_to_client.id, 
                session_id: uuidv4(), 
                expiration_time:})
            response.send({ user: user_to_send_to_client });
        } else {
            response.send({ error: "הסיסמה שהקשת שגויה" });
        }

    }
});
app.get("/users", (req, res) => {
    res.send(users);

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
