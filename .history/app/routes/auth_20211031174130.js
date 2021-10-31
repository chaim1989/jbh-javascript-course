const controller = require("../controllers/auth");
const router = require("express").Router();
const passport = require("");
router.get("/",(req,res)=>{
    res.send("welcome to auth route");
})
router.post("/login", passport.authenticate('local'),(req,res)=>{
    controller.login(req,res);
})
router.post("/signup",(req,res)=>{
    controller.signup(req,res);
})
module.exports = router;