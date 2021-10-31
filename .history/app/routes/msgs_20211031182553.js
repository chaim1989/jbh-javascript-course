const controller = require("../controllers/auth");
const router = require("express").Router();
const mypassport = require("../modules/mypassport");

router.get("/",(req,res)=>{
    res.send("welcome to msgs route");
})

module.exports = router;