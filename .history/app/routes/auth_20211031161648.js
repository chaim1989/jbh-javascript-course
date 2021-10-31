const router = require("express").Router();

router.get("/",(req,res)=>{
    res.send("welcome to auth route");
})
router.post("/login",(req,res)=>{
    
})
module.exports = router;