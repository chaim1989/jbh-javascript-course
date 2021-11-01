const controller = require("../controllers/auth");
const router = require("express").Router();
const mypassport = require("../modules/mypassport");

router.get("/",(req,res)=>{
    res.send("welcome to auth route");
})

router.post("/login",mypassport.authenticate('local'),(req,res)=>{
    if(req.user){
        res.send({user:{id:req.user.id}});
    }else{
        res.send({error:"החיבור לא הצליח"})
    }
})
router.post("/signup",(req,res)=>{
    controller.signup(req,res);
})
router.get("/checksimthing",loggedin,,(req,res)=>{

})
module.exports = router;