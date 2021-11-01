const controller = require("../controllers/msgs");

const router = require("express").Router();


router.get("/",(req,res)=>{
    let primcontroller.getMsgsForUser(req.user.id);
})

module.exports = router;