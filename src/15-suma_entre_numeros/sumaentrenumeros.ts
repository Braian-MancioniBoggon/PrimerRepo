/* CONSIGNA:
Escriba un programa que pida al usuario dos números enteros,
y luego retorne la suma de todos los números que están entre ellos.
*/
let num1: number;
let num2: number;

num1 = Number(prompt("Ingrese el primer numero entero"));
num2 = Number(prompt("Ingrese el segundo numero entero"));

let contador: number;
let total: number;
total = 0;

for (contador = num1; contador <= num2; contador++) {
  total = total + contador;
}

console.log("la suma es: " + total);
