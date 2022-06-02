/* CONSIGNA:
Al ingresar un número el algoritmo debe reconocer si es par, impar o 0.
*/

//Declaro la variable y el elememento que voy a usar del html
let numero: number = 0;
let resultado = document.getElementById("resultado");
let btnProbar = document.getElementById("probar");

//Indico que, al pulsar el boton, muestre el resultado en consola y en el html
btnProbar.addEventListener("click", () => {
  //Le pido al usuario el numero a verificar
  numero = Number(prompt("Ingrese un numero"));

  //Verifico si el numero es par, impar o 0
  if (numero === 0) {
    console.log("El numero ingresado es 0");
    resultado.innerHTML = "El numero ingresado es 0";
  } else if (numero % 2 === 0) {
    console.log("El numero ingresado es par");
    resultado.innerHTML = "El numero ingresado es par";
  } else {
    console.log("El numero ingresado es impar");
    resultado.innerHTML = "El numero ingresado es impar";
  }
});
