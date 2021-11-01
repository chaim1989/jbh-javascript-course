const controller = {};
const db = require("../modules/db.js")
controller.getMsgsForUser =(user_id)=>{
    return new Promise((resolve,reject)=>{
    db.query(`SELECT messages.*,
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
        messages.created_at desc`,[user_id], (err, msgs) => {
            if (err) { console.log(err); reject(error)}
            
            
            
        })
    })
}
module.exports = controller;
