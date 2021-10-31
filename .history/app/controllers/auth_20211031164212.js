const saltRounds = 10;
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
          
            
        }else{
            return res.send(401);
        }
        

    })

}
async function comparePasswordToHash(password,hash){
    
    const match = await  bcrypt.compare(req.body.password, user.password);    
    
}
module.exports  = controller;