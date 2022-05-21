
function login(){
    var form = document.getElementById("form-busqueda");
    var user = document.getElementById("inputNombre").value;
    var pass = document.getElementById("inputContrasena").value;
    // console.log(user);
    // console.log(pass);
    var contador = 0;

    for(var i = 0; i < cuentas.length; i++){
        if (cuentas[i].nombre == user && cuentas[i].contraseña == pass){
            localStorage.setItem("pin" , JSON.stringify(cuentas[i]));
            logiar();
        }else{
            contador ++;
        }

        if(contador >= cuentas.length){
            alert("Su usuario y contraseña no coinciden, intenténtelo de nuevo");
            form.reset();
        }
    }

}



function logiar(){
    window.location = "main.html";
}

let spanSaldo = document.getElementById('spanSaldo');
var us = JSON.parse(localStorage.getItem("pin"));

function consultarSaldo(){
    // us = JSON.parse(localStorage.getItem("pin"));
    // depositar();
    console.log(us.saldo);
    spanSaldo.textContent = us.saldo;
}
function depositar(){
    // us = JSON.parse(localStorage.getItem("pin"));
    var deposito = Number(document.getElementById("inputDepositar").value);
    us.saldo += deposito;
    if(us.saldo > 990){
        us.saldo -= deposito;
        alert("Su saldo no puede exceder los 990 dólares")
    }
    console.log(us.saldo);
    return us.saldo;
}
function retirar(){
    // us = JSON.parse(localStorage.getItem("pin"));
    var retiro = Number(document.getElementById("inputDepositar").value);
    us.saldo -= retiro;
    if(us.saldo < 10){
        us.saldo += retiro;
        alert("Su saldo no puede ser menor a 10 dólares");
    }
    console.log(us.saldo);
    return us.saldo;
}
function salir(){
    window.location = "index.html";
}