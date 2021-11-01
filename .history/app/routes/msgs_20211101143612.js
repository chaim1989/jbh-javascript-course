const controller = require("../controllers/msgs");

const router = require("express").Router();


router.get("/",(req,res)=>{
    let promise = controller.getMsgsForUser(req.user.id);
})

module.exports = router;