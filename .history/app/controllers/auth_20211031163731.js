const myPlaintextPassword = 's0/\/\P4$$w0rD';

const db = require("../modules/db.js");
const controller ={};
const bcrypt = require("bcrypt");
controller.login = (req,res)=>{
    db.query("select * from undeleted_users where username=?",[req.body.username],(err,result)=>{
        if(err){
            console.log(err);
            return res.send(401);
        }
        if(result.length>0){
            let user = result[0];
            bcrypt.compare(myPlaintextPassword, hash, function(err, result) {
                // result == true
            });
        }else{
            return res.send(401);
        }
        

    })

}

module.exports  = controller;