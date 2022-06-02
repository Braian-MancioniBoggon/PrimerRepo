/* CONSIGNA:
Cree un método esMultiplo con 2 parámetros que devuelva
el valor lógico verdadero o falso según si el primer número
que se indique como parámetro es múltiplo del segundo.
*/

//Declaro los elemementos que voy a usar del html
let numero1 = document.getElementById("numero1");
let numero2 = document.getElementById("numero2");
let resultado = document.getElementById("resultado");
let btnCalcular = document.getElementById("calcular");

//Función para calcular si los numeros proporcionados son multiplos o no
let esMultiplo = (num1: number, num2: number): boolean => {
  return num1 % num2 === 0;
};

//Indico que, al pulsar el boton, muestre en consola y en el html si son multiplos o no
btnCalcular.addEventListener("click", () => {
  if (esMultiplo(Number(numero1.value), Number(numero2.value))) {
    console.log(
      "El número ",
      Number(numero1.value),
      " es multiplo de",
      Number(numero2.value)
    );
    resultado.innerHTML =
      "El número " +
      Number(numero1.value) +
      " es multiplo de " +
      Number(numero2.value);
  } else {
    console.log(
      "El número ",
      Number(numero1.value),
      " no es multiplo de",
      Number(numero2.value)
    );
    resultado.innerHTML =
      "El número " +
      Number(numero1.value) +
      " no es multiplo de " +
      Number(numero2.value);
  }
});
