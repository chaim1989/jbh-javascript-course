
const router = require("express").Router();


router.get("/",(req,res)=>{
    res.send("welcome to msgs route");
    connection.query(` SELECT messages.*,
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
})

module.exports = router;