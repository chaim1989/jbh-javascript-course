const saltRounds = 10;
const db = require("../modules/db.js");
const controller ={};
const bcrypt = require("bcrypt");
controller.login =  (req,res)=>{
    db.query("select * from undeleted_users where username=?",[req.body.username],async (err,result)=>{
        if(err){
            console.log(err);
            return res.send(401);
        }
        if(result.length>0){
            let user = result[0];
            let match = await comparePasswordToHash(req.body.username,user.password);
            if(match){
                res.send(200);
            }else{
                res.
            }
            
        }else{
            return res.send(401);
        }
        

    })

}

async function comparePasswordToHash(password,hash){
    
    const match = await bcrypt.compare(password, hash);    
    return match;
}
module.exports  = controller;