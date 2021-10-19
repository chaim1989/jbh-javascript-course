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
                    alert(responsebody.error);
                }else if(responsebody.user){
                    alert(`משתמש מספר ${responsebody.user.id} התחבר בהצלחה`)
                    window.location = "/userArea.html" ;
                    if(responsebody.session_id){
                        let cookie = "session_id" +   '=' + responsebody.session_id +"; domain=" +  window.location.host.toString()+  '; path=/;';
                        console.log()
                        document.cookie = cookie;
                    }
                }else{
                    
                }

            });
        })
        console.log("user", user);
    }
})