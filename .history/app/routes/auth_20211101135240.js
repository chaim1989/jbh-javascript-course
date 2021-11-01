const controller = require("../controllers/auth");
const router = require("express").Router();
const mypassport = require("../modules/mypassport");

router.get("/",(req,res)=>{
    res.send("welcome to auth route");
})
app.post('/login', 
  passport.authenticate('local', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  });
router.post("/login",mypassport.authenticate('local'),(req,res)=>{
    if(req.user){
        res.send({user:{id:req.user.id}});
    }else{
        res.send({error:"החיבור לא הצליח"})
    }
})
router.post("/signup",(req,res)=>{
    controller.signup(req,res);
})
module.exports = router;