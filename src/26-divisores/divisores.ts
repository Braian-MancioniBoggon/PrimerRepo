/* CONSIGNA:
Implemente un método llamado "cantidadDeDivisores"
que reciba un número entero y devuelva la cantidad de divisores.
*/
let numero1 = document.getElementById("numero1");
let btnCalcular = document.getElementById("calcular");

let esMultiplo = (num1: number, num2: number): boolean => {
  return num1 % num2 === 0;
};

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

btnCalcular.addEventListener("click", () => {
  let losDivisores: number = cantidadDeDivisores(Number(numero1.value));
  console.log("El número ", numero1, " tiene ", losDivisores, " divisores.");
});
