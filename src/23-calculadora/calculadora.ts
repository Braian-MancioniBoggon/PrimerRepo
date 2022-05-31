/* CONSIGNA:
Implemente un método llamado calcularResultado que reciba
por parámetros los dos números y la opción y retorne
el resultado de la operación.
*/
let texto = document.getElementById("texto");
let numero1 = document.getElementById("numero1");
let numero2 = document.getElementById("numero2");
let calculo = document.getElementById("calculo");
let btnCalcular = document.getElementById("calcular");

texto.innerHTML = "Ingrese 1 para sumar o 2 para restar";

let calcularResultado = (
  num1: number,
  num2: number,
  operacion: number
): number => {
  let resultado: number = 0;

  if (operacion === 1) {
    resultado = num1 + num2;
  } else if (operacion === 2) {
    resultado = num1 - num2;
  } else {
    console.log("La opción ingresada no es valida");
  }

  return resultado;
};

btnCalcular.addEventListener("click", () => {
  let resultado: number = calcularResultado(
    Number(numero1.value),
    Number(numero2.value),
    Number(calculo.value)
  );
  console.log(resultado);
});
