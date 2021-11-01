const controller = {};
const dal = require("");
const { off } = require("../app");
controller.getMsgsForUser = (req,res)=>{
    dal.getMsgsForUser(req.user.id);
    
}
