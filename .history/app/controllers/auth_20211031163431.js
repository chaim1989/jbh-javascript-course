
const db = require("../modules/db.js");
const controller ={};

controller.login = (req,res)=>{
    db.query("select * from undeleted_users ")

}

module.exports  = controller;