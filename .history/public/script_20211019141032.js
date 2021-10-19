document.addEventListener('click', function (event) {
    console.log("click", event);
    if (event.target.id == "login") {
        let user = {
            username: document.getElementById("username").value,
            password: document.getElementById("password").value
        };
        let object_to_send_to_server ={};
        object_to_send_to_server.user = 
        fetch("/login", {
            method: "POST",
            headers: { 'Content-Type': "application/json" }, 
            body:JSON.stringify(user)
        }).then(function(response){
            
        })
        console.log("user", user);
    }
})