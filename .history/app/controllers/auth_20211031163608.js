
const db = require("../modules/db.js");
const controller ={};

controller.login = (req,res)=>{
    db.query("select * from undeleted_users where username=?",[req.body.username],(err,result)=>{
        if(err){
            console.log(err);
            return res.send(404);
        }
        let user = result[0];
        
    })

}

module.exports  = controller;