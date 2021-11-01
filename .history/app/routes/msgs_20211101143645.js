const controller = require("../controllers/msgs");

const router = require("express").Router();


router.get("/",(req,res)=>{
    let promise = controller.getMsgsForUser(req.user.id);
    promise.then((msgs)=>{},(err)=>{
        
    })
})

module.exports = router;