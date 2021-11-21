const controller = {};
const db = require("../modules/db.js")
controller.GetUsers = () => {
    return new Promise((resolve, reject) => {
        db.query(`select * from undeleted_users`, (err, msgs) => {
            if (err) {
                 console.log(err);
                 return reject(err); 
                }
            resolve(msgs);


        })
    })
}
module.exports = controller;
