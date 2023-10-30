/**
 * Autor: Alejandro Garcia Alvarez
 * GitHub: 
 */

window.addEventListener("load", iniciarSesion)

let saldo = 1000
const PIN_CORRECTO = "1234";
let intentosRestantes = 3;

const depositBtn = document.getElementById("depositar");
const withdrawBtn = document.getElementById("retirar");
const tranferBtn = document.getElementById("transferir");
const money = document.getElementById("saldo");
const exitBtn = document.getElementById("salir")

depositBtn.addEventListener("click", depositar);
withdrawBtn.addEventListener("click", retirar);
transferBtn.addEventListener("click", transferir);
money.addEventListener("click", actualizarSaldo);
exitBtn.addEventListener("click", () =>{
    alert("Gracias por su visita. Que tenga un buen día.")
    window.location.replace("/templates/despedida.html")
}
)

function depositar(){
const cantidadDeposito = parseFloat("Introduzca la cantidad a depositar")
if(isNaN(cantidadDeposito) || cantidadDeposito <=0 ){
    prompt("No es posible introducir esa cantidad")
}else{
    saldo += cantidad;
    prompt("Cantidad depositada con éxito")
    actualizarSaldo()
}
}

function retirar(){
const cantidadRetiro = parseFloat("Introduzca la cantidad a retirar")
if(isNaN(cantidadRetiro) || cantidadRetiro <=0 || cantidadRetiro > saldo){
    alert("No es posible introducir esa cantidad")
}else{
    saldo -= retiro;
    alert("Cantidad retirada con éxito")
    actualizarSaldo()
}
}

function transferir(){
const monto = parseFloat("Introduzca la cantidad a transferir")
if(isNaN(monto) || monto<=0 || monto>saldo){

}
}

function iniciarSesion(){
let pin = prompt("Introduzca su PIN para iniciar sesión")
while(pin!==PIN_CORRECTO && intentosRestantes>1){
    intentosRestantes -- 
    pin = prompt(
        `El pin introducido es incorrecto. Inténtelo de nuevo. ${intentosRestantes} intentos restantes.`
    )
}
if(pin === PIN_CORRECTO){
    alert("PIN introducido correctamente")
    actualizarSaldo()
}else{
    alert("No le quedan intentos restantes")
    window.location.replace("/templates/cajeroBloqueado.html")
}
}

function actualizarSaldo(){
    saldoTemplate.innerHTML = `Su saldo es: ${saldo}€`
}

function validarIBAN(iban){
    var expresionRegular = /^(ES\d{22})$/;
    return expresionRegular.test(iban)
}
