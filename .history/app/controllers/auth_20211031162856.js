const controller ={
    id:1
};
const controller2 =new Object();
controller2.Prototype.checkifidexist = function(){
    return this.id
};

console.log(controller2.prototype)
controller.login = (req,res)=>{


}

module.exports  = controller;