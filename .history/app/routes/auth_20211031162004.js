const controller = require("../controllers/auth");

const router = require("express").Router();

router.get("/",(req,res)=>{
    res.send("welcome to auth route");
})
router.post("/login",(req,res)=>{
    controller.login(req.body.user,())
})
module.exports = router;