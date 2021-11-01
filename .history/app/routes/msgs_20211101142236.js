
const router = require("express").Router();


router.get("/",(req,res)=>{
    res.send("welcome to msgs route");
    
})

module.exports = router;