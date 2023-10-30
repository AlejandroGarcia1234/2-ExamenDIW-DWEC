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

depositarBtn.addEventListener("click", depositar);
retirarBtn.addEventListener("click", retirar);
transferirBtn.addEventListener("click", transferir);
saldoTemplate.addEventListener("click", actualizarSaldoTemplate);
salirBtn.addEventListener("click", () =>{
    alert("Gracias por su visita. Que tenga un buen día.")
    window.location.replace(/templates/despedida.html)
}
)

function depositar(){
let cantidad = parseFloat("Introduzca la cantidad a depositar")
if(isNaN(cantidad) || cantidad <=0 ){
    prompt("No es posible introducir esa cantidad")
}else{
    saldo += cantidad;
    prompt("Cantidad depositada con éxito")
    actualizarSaldoTemplate()
}
}

function retirar(){
let retiro = parseFloat("Introduzca la cantidad a retirar")
if(isNaN(retiro) || retiro <=0 || retiro > saldo){
    alert("No es posible introducir esa cantidad")
}else{
    saldo -= retiro;
    alert("Cantidad retirada con éxito")
    actualizarSaldoTemplate()
}
}

function transferir(){
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
if(pin === PIN_CORRECTO){
    alert("PIN introducido correctamente")
    actualizarSaldoTemplate()
}else{
    window.location.replace(/templates/cajeroBloqueado.html)
}
}

function actualizarSaldoTemplate(){
    saldoTemplate.innerHTML = `Su saldo es: ${saldo}€`
}

function validarIBAN(iban){
    var expresionRegular = /^(ES\d{22})$/;
    return expresionRegular.test(iban)
}
