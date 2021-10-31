const saltRounds = 10;
const db = require("../modules/db.js");
const controller ={};
const bcrypt = require("bcrypt");
controller.login =  (req,res)=>{
    console.log(req.body);
    db.query("select * from undeleted_users where username=?",[req.body.username],async (err,result)=>{
        if(err){
            console.log(err);
            return res.sendStatus(401);
        }
        if(result.length>0){
            let user = result[0];
            let match = await comparePasswordToHash(req.body.username,user.password);
            if(match){
                res.sendStatus(200);
            }else{
                res.sendStatus(401);
            }
            
        }else{
            return res.send(401);
        }
        

    })

}
controller.signup = async (req,res)=>{
   let hash = await bcrypt.hash(req.body.password,saltRounds) 
    conn.query("")
}

async function comparePasswordToHash(password,hash){
    
    const match = await bcrypt.compare(password, hash);    
    return match;
}
module.exports  = controller;