function isUser(user, password){
    if(user == 'user' && password == 'user')
        window.open("html/cuenta.html","_self");
    else {
        document.getElementById("user").value = ""
        document.getElementById("password").value = ""
        alert("Usuario y/o contraseña incorrecta.")
    }
}
