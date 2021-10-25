$("#signup").on("click",(event)=>{
    let body = {
        username:   $("#username").val(),
        password:   $("#password").val(),
        fullname:   $("#fullname").val(),
    }
    $.ajax({
        type: 'post',
        url: '.signup',
        data: JSON.stringify(SendInfo),
        contentType: "application/json; charset=utf-8",
        traditional: true,
        success: function (data) {
            ...
        }
    });
    $.post("/signup",body,  (data)=> {
        
        console.log(data);
        if(data.error){
            alert(data.error);
        }
    },"json");
})
