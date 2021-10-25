$("#signup").on("click",(event)=>{
    let body = {
        username:   $("#username").val(),
        password:   $("#password").val(),
        fullname:   $("#fullname").val(),
    }
    $.ajax({
        type: 'post',
        url: '/signup',
        data: JSON.stringify(body),
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            console.log(data);
            if(data.error){
                alert(data.error);
            }
            if(data.user_id){
                window.location("/")
            }
        }
    });
    // $.post("/signup",body,  (data)=> {
        
    //     console.log(data);
    //     if(data.error){
    //         alert(data.error);
    //     }
    // },"json");
})
