// // setTimeout(function(){
// //     console.log("future event is firing");
// // },1000);

// // console.log(" event number 1 is firing");
// let user = db.get(function () {
//     let permissions = db.get("permissions", { user_id: user.id },function(){
//         console.log(permissions);
//     });
// },"users", { email: "chaim1989@gmail.com" });
// console.log(" im the bottom lint");
// let db = {
//     get:function(function_to_run_when_your_done,table_name,conditions){
//         console.log("im searching your rows");
//         console.log("im almost done");
//         console.log("im done");
//         function_to_run_when_your_done();
//     }
// }
const fs = require("fs");
function WriteFile(content,path){
  let result =   fs.writeFile(path, content, ()=>{});
    console.log(" success");
}
WriteFile("im the content of the file",__dirname+"/content.txt");