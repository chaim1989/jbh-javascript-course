// setTimeout(function(){
//     console.log("future event is firing");
// },1000);

// console.log(" event number 1 is firing");
let user = db.get("users", { email: "chaim1989@gmail.com" }, function () {
    let permissions = db.get("permissions", { user_id: user.id },function(){
        console.log(permissions);
    });
});
console.log(" im the bottom lint");
let db = {
    get:function(table_name,conditions,function_to_run_when__done){

    }
}



