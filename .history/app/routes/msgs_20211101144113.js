const controller = require("../controllers/msgs");

const router = require("express").Router();


router.get("/", async (req, res) => {
    // let promise = controller.getMsgsForUser(req.user.id);
    // promise.then((msgs) => {
    //     res.send(msgs);
    // }, (err) => {
    //     res.sendStatus(500);
    // });
    let result = await controller.getMsgsForUser(req.user.id);
    if(result){
        res.send(msgs)
    }else{
        
    }
   
})

module.exports = router;