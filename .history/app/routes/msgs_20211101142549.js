const controller = require("../controllers/auth");

const router = require("express").Router();


router.get("/",(req,res)=>{
    res.send("welcome to msgs route");
    controller
})

module.exports = router;