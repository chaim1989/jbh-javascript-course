const controller = require("../controllers/msgs");

const router = require("express").Router();


router.get("/", (req, res) => {
    let promise = controller.getMsgsForUser(req.user.id);
    promise.then((msgs) => {
        res.send(msgs);
    }, (err) => {
        res.sendStatus(500);
    });
})
router.post("/createMsg",(req,res)=>{
    console.log("createMsg  create msg")
    let msg = {
        from_user_id:req.user.id,
        to_user_id:req.body.to_user_id,
        content:req.body.content
    }
    let promise = controller.createMsg(msg);
    promise.then(()=>{
        res.sendStatus(200);
    },(err)=>{
        res.sendStatus(500);
    })
})
module.exports = router;