/**
 * Autor: Alejandro Garcia Alvarez
 * GitHub: 
 */

// Iniciamos la sesión
window.addEventListener("load", iniciarSesion);

// Declaración e inicialización de variables
let saldo = 1000;
const PIN_CORRECTO = "1234";
let intentosRestantes = 3;

// Añadimos identificadores
const depositBtn = document.getElementById("depositar");
const withdrawBtn = document.getElementById("retirar");
const transferBtn = document.getElementById("transferir");
const exitBtn = document.getElementById("salir");
const money = document.getElementById("saldo");
// Agregamos eventos de clip
depositBtn.addEventListener("click", deposit);
withdrawBtn.addEventListener("click", withdraw);
transferBtn.addEventListener("click", transfer);
exitBtn.addEventListener("click", () => {
  alert("Gracias por utilizar este cajero. Que tenga un buen día.");
  window.location.replace("/templates/despedida.html");
});

// Depositamos el saldo
function deposit() {
  const cantidadDeposito = parseFloat(prompt("Ingrese la cantidad a depositar:"));
  if (isNaN(cantidadDeposito) || cantidadDeposito <= 0) {
    alert("Cantidad no válida. Intentelo de nuevo.");
  } else {
    saldo += cantidadDeposito;
    alert(`Se han depositado: ${cantidadDeposito.toFixed(2)} €`);
    actualizarSaldoTemplate()
  }
}

// Retiramos el saldo
function withdraw() {
  const retiro = parseFloat(prompt("Ingrese la cantidad a retirar:"));
  if (isNaN(retiro) || retiro <= 0 || retiro > saldo) {
    alert("Cantidad no válida. Intentelo de nuevo.");
  } else {
    saldo -= retiro;
    alert(`Se han retirado ${retiro.toFixed(2)} €`);
    actualizarSaldoTemplate()
  }
}

// Transferimos el saldo
function transfer() {
  const cantidadTransfer = parseFloat(prompt("Ingrese la cantidad que quiera transferir:"));
  if (isNaN(cantidadTransfer) || cantidadTransfer <= 0 || cantidadTransfer > saldo) {
    alert("Cantidad inválida o insuficiente. Intente de nuevo.");
  } else {
    const cuentaDestino = prompt("Introduzca la cuenta de destino:");
    if (!validarIBAN(cuentaDestino)) {
      alert(`La cuenta ${cuentaDestino} no es valida.`)
      return
    }
    alert(`Se han transferido ${monto.toFixed(2)} € a la cuenta ${cuentaDestino}.`);
    saldo -= monto;
    actualizarSaldoTemplate()
  }
}

// Iniciamos sesión
function iniciarSesion() {
  let pin = prompt("Ingrese su PIN:");
  while (pin !== PIN_CORRECTO && intentosRestantes > 1) {
    intentosRestantes--;
    alert(`PIN incorrecto. Le quedan ${intentosRestantes} intentos.`);
    pin = prompt("Ingrese su PIN:");
  }

  if (pin === PIN_CORRECTO) {
    alert("Éxito al iniciar sesión.");
    actualizarSaldoTemplate()
  } else {
    alert("PIN incorrecto. El cajero se ha bloqueado.");
    window.location.replace("/templates/cajeroBloqueado.html");
  }
}

// Actualizmos el saldo
function actualizarSaldoTemplate() {
  saldoTemplate.innerText = `${saldo} €`
}

// Esta función valida si la cuenta bancaria introducida entra dentro de estos parámetros
function validarIBAN(iban) {
  var expresionRegular = /^(ES\d{22})$/;
  return expresionRegular.test(iban);
}
