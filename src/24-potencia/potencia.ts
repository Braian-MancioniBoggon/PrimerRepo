/* CONSIGNA:
Realice un programa que devuelva la potencia de un número.
*/
let base = document.getElementById("base");
let exp = document.getElementById("exp");
let btnCalcular = document.getElementById("calcular");

let potencia = (base: number, expo: number): number => {
  let resultado: number = 0;

  if (base >= 0 && expo >= 0) {
    resultado = base ** expo;
  } else if (base < 0) {
    console.log("La base no puede ser menor a 0");
  } else {
    console.log("El exponente no puede ser menor a 0");
  }

  return resultado;
};

btnCalcular.addEventListener("click", () => {
  let resultado: number = potencia(Number(base.value), Number(exp.value));
  console.log(resultado);
});
