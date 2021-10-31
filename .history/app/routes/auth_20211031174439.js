const controller = require("../controllers/auth");
const router = require("express").Router();
const mypassport = require("../modules/mypassport.js");
router.get("/",(req,res)=>{
    res.send("welcome to auth route");
})
router.post("/login",(req,res)=>{
    controller.login(req,res);
})
router.post("/signup",(req,res)=>{
    controller.signup(req,res);
})
module.exports = router;