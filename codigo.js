
document.getElementById('boton1').onclick = function(){
    const nombre = prompt("Cúal es tu nombre");
    alert ("Hola " + nombre + "!");
    dinero = prompt ("¿Cuanto dinero tienes?");
    if (dinero >= 5 && dinero < 10) {
    alert ("Comprate un alfajor")
    alert ("Te sobra " + (dinero-5) + "$")
    }
    else if (dinero >= 10 && dinero < 20) {
        alert ("Comprate una Dona de Chocolate")
        alert ("Te sobra " + (dinero-10) + "$")
    }

    else if (dinero >= 20) {
        alert ("Comprate un sanguche de milanesa")
        alert ("Te sobra " + (dinero-20) + "$")
    }
    else {
        alert ("No tenes dinero POBRE")
    }
}