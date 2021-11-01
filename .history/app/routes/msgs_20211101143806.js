const controller = require("../controllers/msgs");

const router = require("express").Router();


router.get("/",(req,res)=>{
    let promise = controller.getMsgsForUser(req.user.id);
    promise.then((msgs)=>{
        res.send(msgs);
    },(err)=>{
        res.sendStatus(500);
    })
})

module.exports = router;