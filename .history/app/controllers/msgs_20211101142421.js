const controller = {};
const dal = require("");
controller.getMsgsForUser = (req,res)=>{
    dal.getMsgsForUser(req.user.id);
}