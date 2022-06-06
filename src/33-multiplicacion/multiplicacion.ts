/* CONSIGNA:
Implemente un método llamado “multiplicarArreglo” que recibe como
parámetros tres arreglos de enteros del mismo tamaño.
Los dos primeros arreglos contienen los números que se quieren multiplicar.
El tercer arreglo almacena el cálculo de la multiplicación de
cada posición de los dos arreglos.
Utilice este método para multiplicar los siguientes cuatro arreglos
de tres elementos.
v1: [1, 2, 3]
v2: [4, 5, 6]
v3: [2, 1, 2]
v4: [1, 2, 1]
*/

//Declaro los elemementos que voy a usar del html
let btn01 = document.getElementById("botonEjercicio1");
let btn02 = document.getElementById("botonEjercicio2");
let resultado1 = document.getElementById("resultado1");
let resultado2 = document.getElementById("resultado2");

//Función para multiplicar 2 arreglos
let multiplicarArreglo = (
  arreglo1: number[],
  arreglo2: number[],
  arregloMultiplicacion: number[],
  longitudArreglo: number
): number => {
  for (let i: number = 0; i < longitudArreglo; i++) {
    arregloMultiplicacion[i] = arreglo1[i] * arreglo2[i];
  }
};

//----------------------------------------------------------------------
//PRIMERA PARTE DEL ENUNCIADO - MULTIPLICACIÓN DE 2 ARREGLOS

//Indico que, al pulsar el boton, muestre los datos correspondientes en consola y en el html
btn01.addEventListener("click", () => {
  //Pido la longitud del arreglo al usuario
  let longitud: number = Number(prompt("Ingrese la longitud del arreglo:"));
  //Asigno la longitud a los arreglos
  let arregloNumero1: number[] = new Array(longitud);
  let arregloNumero2: number[] = new Array(longitud);
  let arregloResultado: number[] = new Array(longitud);

  //Función para cargar los arreglos
  let cargarArreglo = (arreglo: number[], longitudArreglo: number): number => {
    for (let i: number = 0; i < longitudArreglo; i++) {
      arreglo[i] = Number(
        prompt("ingrese el valor de la posición " + (i + 1) + " del arreglo")
      );
    }
  };

  //Cargo los arreglos y luego los multiplico
  cargarArreglo(arregloNumero1, longitud);
  cargarArreglo(arregloNumero2, longitud);
  multiplicarArreglo(
    arregloNumero1,
    arregloNumero2,
    arregloResultado,
    longitud
  );
  //Muestro el resultado en consola y en el html
  console.log(arregloNumero1);
  console.log(arregloNumero2);
  console.log(arregloResultado);
  resultado1.innerHTML =
    "<p>Primer arreglo: " +
    arregloNumero1 +
    "</p>" +
    "<p>Segundo arreglo: " +
    arregloNumero2 +
    "</p>" +
    "<p>Resultado: " +
    arregloResultado +
    "</p>";
});

//----------------------------------------------------------------------
//SEGUNDA PARTE DEL ENUNCIADO - MULTIPLICACIÓN DE 4 ARREGLOS

//Indico que, al pulsar el boton, muestre los datos correspondientes en consola y en el html
btn02.addEventListener("click", () => {
  //Declaro los arreglos
  let arregloNumero1: number[] = [1, 2, 3];
  let arregloNumero2: number[] = [4, 5, 6];
  let arregloNumero3: number[] = [2, 1, 2];
  let arregloNumero4: number[] = [1, 2, 1];
  let arregloResultado: number[] = new Array(3);
  let arregloResultadoAux: number[] = new Array(3);

  //Llamo a la función para multiplicar los arreglos
  multiplicarArreglo(arregloNumero1, arregloNumero2, arregloResultadoAux, 3);
  multiplicarArreglo(arregloNumero3, arregloNumero4, arregloResultado, 3);
  multiplicarArreglo(
    arregloResultado,
    arregloResultadoAux,
    arregloResultado,
    3
  );
  //Muestro el resultado en consola y en el html
  console.log(arregloNumero1);
  console.log(arregloNumero2);
  console.log(arregloNumero3);
  console.log(arregloNumero4);
  console.log(arregloResultado);
  resultado2.innerHTML = "El resultado es: " + arregloResultado;
});

//SEGUNDA PARTE DEL ENUNCIADO - CÓDIGO ANTIGUO
/*
let arregloNumero1: number = [1, 2, 3];
let arregloNumero2: number = [4, 5, 6];
let arregloNumero3: number = [2, 1, 2];
let arregloNumero4: number = [1, 2, 1];
let arregloResultado: number[] = new Array(3);

let multiplicarArreglo = (
  arreglo1: number[],
  arreglo2: number[],
  arreglo3: number[],
  arreglo4: number[],
  arregloMultiplicacion: number[]
): number => {
  for (let i: number = 0; i < 3; i++) {
    arregloMultiplicacion[i] =
      arreglo1[i] * arreglo2[i] * arreglo3[i] * arreglo4[i];
  }
};

multiplicarArreglo(
  arregloNumero1,
  arregloNumero2,
  arregloNumero3,
  arregloNumero4,
  arregloResultado
);
console.log(arregloNumero1);
console.log(arregloNumero2);
console.log(arregloNumero3);
console.log(arregloNumero4);
console.log(arregloResultado);
*/
