var account1 = 750.50
var account2 = 1900.43

function isUser(user, password){
    if(user == 'user' && password == 'user')
        window.open("html/cuenta.html","_self");
    else {
        document.getElementById("user").value = ""
        document.getElementById("password").value = ""
        alert("Usuario y/o contraseña incorrecta.")
    }
}

function getAccount(number){
    if (number == 1)
        return account1
    else if(number == 2)
        return account2
    else return 0
}


function transferAccount(amount,number){
    if(number == 1)
        account1 = account1 - amount
    else if(number == 2)
        account2 = account1 - amount
}

function hasBalance(amount,number){
    if(number == 1)
        return amount<=account1
    else if(number == 2)
        return amount<=account2
}

function correctEntry(entry){
    return !isNaN(parseFloat(entry))
}

function doTransfer(entry,number){
    if(correctEntry(entry)){
        if(hasBalance(parseFloat(entry),number)){
            transferAccount(parseFloat(entry),number)
            document.getElementById(String(number)).innerHTML = getAccount(number).toString()
            alert ("Transferencia realizada con exito")
        }
        else
            alert("Monto insuficiente")
    }
    else
        alert("Formato de monto incorrecto.")

}