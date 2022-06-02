/* CONSIGNA:
Leer valores hasta que se introduzca un cero (0). 
El usuario puede introducir valores positivos y negativos. 
Encontrar el máximo de los elementos que se introdujeron.
*/

//Declaro los elemementos que voy a usar del html
let btn01 = document.getElementById("botonEjercicio1");
let btn02 = document.getElementById("botonEjercicio2");
let resultado1 = document.getElementById("resultado1");
let resultado2 = document.getElementById("resultado2");

//----------------------------------------------------------------------
// MAYOR NUMERO

//Indico que, al pulsar el boton, muestre el número más grande en consola y en el html
btn01.addEventListener("click", () => {
  //Defino las variables que voy a usar
  let num: number = 0;
  let max: number = 0;
  //Pido un numero
  num = Number(prompt("Ingrese un número - Ingrese 0 para salir"));
  //Mientras el usuario no ingrese un 0 va a seguir pidiendo números y va a guardar el mas grande de todos
  while (num  != "0") {
    if (num > max) {
      max = num;
    }
    num = Number(prompt("Ingrese un número - Ingrese 0 para salir"));
  }
  console.log("El número ingresado mas grande es: ", max);
  resultado1.innerHTML="El número ingresado mas grande es: "+ max;
};

//----------------------------------------------------------------------
// MENOR NUMERO

//Indico que, al pulsar el boton, muestre el número más chico en consola y en el html
btn02.addEventListener("click", () => {
  //Defino las variables que voy a usar
  let num: number = 0;
  let min: number = 0;
  //Pido un numero
  num = Number(prompt("Ingrese un número - Ingrese 0 para salir"));
  //Asigno el primer número ingresado a la variable "min" para que no quede siempre con valor 0
  min = num;
  //Mientras el usuario no ingrese un 0 va a seguir pidiendo números y va a guardar el mas chico de todos
  while (num  != "0") {
    if (min > num) {
      min = num;
    }
    num = Number(prompt("Ingrese un número - Ingrese 0 para salir"));
  }
  console.log("El número ingresado mas chico es: ", min);
  resultado2.innerHTML="El número ingresado mas chico es: "+ min;
};

