const controller = require("../controllers/msgs");

const router = require("express").Router();


router.get("/", (req, res) => {
    let promise = controller.getMsgsForUser(req.user.id);
    promise.then((msgs) => {
        res.send(msgs);
    }, (err) => {
        res.sendStatus(500);
    });
    controller.getMsgsForUser(req.user.id,(msgs)=>{
        res.send(msgs)
    },(error)=>{
        res.sendStatus()
    })
})

module.exports = router;