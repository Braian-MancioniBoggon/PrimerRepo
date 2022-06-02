/* CONSIGNA:
Implemente un método llamado "cantidadDeDivisores"
que reciba un número entero y devuelva la cantidad de divisores.
*/

//Declaro los elemementos que voy a usar del html
let losDivisores: number = 0;
let numero = document.getElementById("numero");
let resultado = document.getElementById("resultado");
let btnCalcular = document.getElementById("calcular");

//Función para calcular si los numeros proporcionados son multiplos o no
let esMultiplo = (num1: number, num2: number): boolean => {
  return num1 % num2 === 0;
};

//Función para calcular la cantidad de divisores del numero ingresado
let cantidadDeDivisores = (num: number): number => {
  let indice: number;
  let divisores: number = 0;

  for (indice = 0; indice < num; indice++) {
    if (esMultiplo(num, indice)) {
      divisores++;
    }
  }
  return divisores;
};

//Indico que, al pulsar el boton, muestre en consola y en el html si son multiplos o no
btnCalcular.addEventListener("click", () => {
  losDivisores = cantidadDeDivisores(Number(numero.value));
  console.log(
    "El número " + numero.value + " tiene " + losDivisores + " divisores."
  );
  resultado.innerHTML =
    "El número " + numero.value + " tiene " + losDivisores + " divisores.";
});
