const saltRounds = 10;
const db = require("../modules/db.js");
const controller = {};
const bcrypt = require("bcrypt");
controller.login = (req, res) => {
    console.log(req.body);
    db.query("select * from undeleted_users where username=?", [req.body.username], async (err, result) => {
        if (err) {
            console.log(err);
            return res.sendStatus(401);
        }
        if (result.length > 0) {
            let user = result[0];
            let match = await comparePasswordToHash(req.body.password, user.password);
            if (match) {
                res.sendStatus(200);
            } else {
                res.sendStatus(401);
            }

        } else {
            return res.send(401);
        }


    })

}
controller.signup = async (req, res) => {
    let hash = await bcrypt.hash(req.body.password, saltRounds)
    let user = {
        username: req.body.username,
        password: hash,
        fullname: req.body.fullname,
        deleted: 0,
        phone: req.body.phone,
        email: req.body.email
    }
    db.query("insert into users set ?", user, (err, result) => {
        if(err){console.log(err); return res.sendStatus(403);}
        let user_id = result.insertId;
        res.send({user_id:user_id})

    })
}

async function comparePasswordToHash(password, hash) {

    const match = 
    return match;
}
module.exports = controller;