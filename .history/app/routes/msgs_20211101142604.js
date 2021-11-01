const controller = require("../controllers/msgs");

const router = require("express").Router();


router.get("/",(req,res)=>{
    res.send("welcome to msgs route");
    controller.getMsgsForUser
})

module.exports = router;