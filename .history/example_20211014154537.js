// // // setTimeout(function(){
// // //     console.log("future event is firing");
// // // },1000);

// // // console.log(" event number 1 is firing");
// // let user = db.get(function () {
// //     let permissions = db.get("permissions", { user_id: user.id },function(){
// //         console.log(permissions);
// //     });
// // },"users", { email: "chaim1989@gmail.com" });
// // console.log(" im the bottom lint");
// // let db = {
// //     get: function (function_to_run_when_your_done, table_name, conditions) {
// //         console.log("im searching your rows");
// //         console.log("im almost done");
// //         console.log("im done");
// //         function_to_run_when_your_done();
// //     }
// // }
// const fs = require("fs");
// function WriteFile(content, path,function_to_run_after_writing_successfuly,function_to_run_if_error) {
//     fs.writeFile(path, content, function (error) {
//         if (error != null) {
//             console.log("error", error);

//             function_to_run_if_error();
//         }else{
//             function_to_run_after_writing_successfuly(error);
//         }
          
//     });
//     console.log("after write file");
// }
// Server.on("gettting image from shuki lerer",()=>{
//     WriteFile("content","z:/contetn",(error)=>{
//        if(error){
//         Server.send("err");
//        }else{
//         Server.send("ok");
//        }
//     })
// },()=>{})
// // WriteFile("im the content of the file", "z:/content.txt");


let zero = 0;
let nullish =null;
let undefinesh = undefined;
let stringzerolength = "";
console.log("is zero equals false " + !zero);
console.log("is nullish equals false " + !zero);
