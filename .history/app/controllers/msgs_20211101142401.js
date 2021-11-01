const controller = {};
controller.getMsgsForUser = (req,res)=>{
    dal.getMsgsForUser(req.user.id);
}