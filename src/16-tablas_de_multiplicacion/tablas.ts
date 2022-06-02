/* CONSIGNA:
Diseñar un algoritmo que muestre por pantalla la tabla
de multiplicación del número ingresado por el usuario
hasta el donde el usuario decida.
*/

//Declaro los elemementos que voy a usar del html y las variables
let btnEnv = document.getElementById("calcular");
let resultado = document.getElementById("resultado");
let numero1: number = document.getElementById("dato1");
let numero2: number = document.getElementById("dato2");
let cont: number;
let salida: number = 0;

//Indico que, al pulsar el boton, muestre la tabla de multiplicación en consola y en el html
btnEnv.addEventListener("click", () => {
  //Solicito los números al usuario
  let num1: number = Number(numero1.value);
  let num2: number = Number(numero2.value);
  let tabla: string = " ";

  //Calculo la tabla del numero solisitado en "num1" hasta el numero solisitado en "num2"
  for (cont = 0; cont <= num2; cont++) {
    salida = num1 * cont;
    tabla = tabla + " " + num1 + "X" + cont + "=" + salida + ", ";
    //Muestro la tabla de multiplicación en la consola
    console.log(num1 + "X" + cont + "=" + salida);
  }

  //Muestro la tabla de multiplicación en el html
  resultado.innerHTML = tabla;
});
