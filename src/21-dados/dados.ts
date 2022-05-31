/* CONSIGNA:
Escriba un programa que calcule la probabilidad de sacar
todos los dados 6 siendo que tiramos N dados (dato ingresado
  por al usuario).
*/
let cantidadDados: number = Number(prompt("Ingrese la cantidad de dados"));

console.log(
  "La probabilidad de caer en 6 todos los dados es de 1/" + 6 ** cantidadDados
);
