
function loggedIn(req,res,next){
    if(req.user){
        next();
    }else{
        req.session.returnURL= req.url;
        res.redirect("/login");
    }
}
function othefunction(){}
module.exports.loggedIn = log  = {loggedIn,othefunction};