
const db = require("../modules/db.js");
const controller ={};

controller.login = (req,res)=>{
    db.query("select * from undeleted_users where username=? and password=?",[req.body.username],(err,result)=>{

    })

}

module.exports  = controller;