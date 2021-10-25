$("#signup").on("click",(event)=>{
    let body = {
        username:   $("#username").val(),
        password:   $("#password").val(),
        fullname:   $("#fullname").val(),
    }
    $.post("/signup",body,  (data)=> {
        
        console.log(data);
        if(data.error){
            alert(data.error);
        }
    },"json");
})
