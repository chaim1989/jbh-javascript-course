const controller = require("../controllers/auth");
const router = require("express").Router();


router.get("/",(req,res)=>{
    res.send("welcome to auth route");
})
router.post("/login",mypassport.authenticate('local'),(req,res)=>{
    if(req.user){
        res.
    }else{

    }
})
router.post("/signup",(req,res)=>{
    controller.signup(req,res);
})
module.exports = router;