/**
 * Autor: Alejandro Garcia Alvarez
 * GitHub: 
 */

window.addEventListener("load", iniciarSesion)

let saldo = 1000
const PIN_CORRECTO = "1234";
let intentosRestantes = 3;

const depositarBtn = document.getElementById("depositar");
const retirarBtn = document.getElementById("retirar");
const tranferirBtn = document.getElementById("transferir");
const saldoTemplate = document.getElementById("saldo");
const salirBtn = document.getElementById("salir")

depositarBtn.addEventListener("click", function);
retirarBtn.addEventListener("click", function);
transferirBtn.addEventListener("click", function);
saldoTemplate.addEventListener("click", function);
salirBtn.addEventListener("click", () =>
)

function depositarBtn(){
let cantidad = parseFloat("Introduzca la cantidad a depositar")
if(isNaN(cantidad) || cantidad <=0 ){
    prompt("No es posible introducir esa cantidad")
}else{
    saldo += cantidad;
    prompt("Cantidad depositada con éxito")
    actualizarSaldoTemplate()
}
}

function retirarBtn(){
let retiro = parseFloat("Introduzca la cantidad a retirar")
if(isNaN(retiro) || retiro <=0 || retiro > saldo){
    alert("No es posible introducir esa cantidad")
}else{
    saldo -= retiro;
    alert("Cantidad retirada con éxito")
    actualizarSaldoTemplate()
}
}

function transferirBtn(){
let monto = parseFloat("Introduzca la cantidad a transferir")
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
if(pin == PIN_CORRECTO){
    alert("PIN introducido correctamente")
}else{
    window.location.replace()
}
}

function actualizarSaldoTemplate(){
    saldoTemplate.innerHTML = `Su saldo es: ${saldo}€`
}

function validarIBAN(){
    let expresionRegular = /^(ES\d{22}$/
}
