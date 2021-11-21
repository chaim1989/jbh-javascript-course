const controller = require("../controllers/users");

const router = require("express").Router();


router.get("/", (req, res) => {
    let promise = controller.GetUsers();
    promise.then((msgs) => {
        res.send(msgs);
    }, (err) => {
        res.sendStatus(500);
    });
})

module.exports = router;