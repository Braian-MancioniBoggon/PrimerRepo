/* CONSIGNA:
Realice un programa que devuelva la potencia de un número.
*/

//Declaro los elemementos que voy a usar del html
let base = document.getElementById("base");
let exp = document.getElementById("exp");
let resultadoPotencia = document.getElementById("resultado");
let btnCalcular = document.getElementById("calcular");

//Función para calcular la potencia entre los numeros proporcionados
let potencia = (base: number, expo: number): number => {
  let resultado: number = 0;

  if (base >= 0 && expo >= 0) {
    resultado = base ** expo;
    resultadoPotencia.innerHTML = "El resultado es " + resultado;
  } else if (base < 0) {
    console.log("La base no puede ser menor a 0");
    resultadoPotencia.innerHTML = "La base no puede ser menor a 0";
  } else if (base === 0) {
    console.log("El resultado es 1");
    resultadoPotencia.innerHTML = "El resultado es 1";
  } else {
    console.log("El exponente no puede ser menor a 0");
    resultadoPotencia.innerHTML = "El exponente no puede ser menor a 0";
  }

  return resultado;
};

//Indico que, al pulsar el boton, utilice la función y muestre el resultado en consola y en el html
btnCalcular.addEventListener("click", () => {
  let resultado: number = potencia(Number(base.value), Number(exp.value));
  console.log("El resultado es " + resultado);
});
