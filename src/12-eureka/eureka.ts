/* CONSIGNA:
Escribir un algoritmo que nos pida una clave y verifique
que sea la correcta (eureka), solo tenemos 3 intentos
y si acertamos la clave, saldremos directamente del programa.
*/
let contador: number = 1;
let clave: string;

while (contador <= 3 && clave !== "eureka") {
  contador = contador + 1;
  clave = prompt("Ingrese la clave");
}
if (clave === "eureka") {
  console.log("clave correcta");
} else {
  console.log("agoto la cantidad de intentos");
}
