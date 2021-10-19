document.addEventListener('click', function (event) {
    console.log("click", event);
    if (event.target.id == "login") {
        let user = {
            username: document.getElementById("username").value,
            password: document.getElementById("password").value
        };


        fetch("/login", {
            method: "POST",
            headers: { 'Content-Type': "application/json" },
            body: JSON.stringify(user)
        }).then((response) => {

            console.log(response);
            
            response.json().then((responsebody) => {
                console.log("responsebody", responsebody)
                if(responsebody.error){
                    alert(error);
                }
                
            });
        })
        console.log("user", user);
    }
})