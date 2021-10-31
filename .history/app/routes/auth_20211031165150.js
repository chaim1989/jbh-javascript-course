const controller = require("../controllers/auth");
const router = require("express").Router();

router.get("/",(req,res)=>{
    res.send("welcome to auth route");
})
router.post("/login",(req,res)=>{
    controller.login(req,res);
})
router.post("/signgup",(req,res)=>{
    controller.login(req,res);
})
module.exports = router;