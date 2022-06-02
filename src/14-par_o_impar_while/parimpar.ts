/* CONSIGNA:
Realizar un algoritmo que dado un número entero ingresado
por el usuario, visualice en pantalla si es par o impar,
si el numero es 0 se vuelve a pedir otro.
*/

//Declaro los elemementos que voy a usar del html
let resultado = document.getElementById("resultado");
let btnProbar = document.getElementById("probar");

//Indico que, al pulsar el boton, muestre el resultado en consola y en el html
btnProbar.addEventListener("click", () => {
  //Declaro la variable donde voy a guardar el numero a verificar
  let numero: number = 0;
  //Si el usuario ingresa 0 volverá a pedir un numero hasta que deje de ingresar 0
  while (numero <= 0) {
    //Solicito el número al usuario
    numero = Number(prompt("Ingrese un numero"));
    //Verifico si el numero es par o impar y muestro la conclución en consola y en el html
    if (numero % 2 === 0) {
      console.log("El numero ingresado es par");
      resultado.innerHTML = "El numero ingresado es par";
    } else {
      console.log("El numero ingresado es impar");
      resultado.innerHTML = "El numero ingresado es impar";
    }
  }
});
