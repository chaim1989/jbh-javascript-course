const router = require("express").Router();

router.get("/",(req,res)=>{
    res.send("welcome to auth route");
})
router.post("/login")
module.exports = router;