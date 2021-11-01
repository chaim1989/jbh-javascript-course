const controller = require("../controllers/msgs");

const router = require("express").Router();


router.get("/",(req,res)=>{
    controller.getMsgsForUser(req,res);
})

module.exports = router;