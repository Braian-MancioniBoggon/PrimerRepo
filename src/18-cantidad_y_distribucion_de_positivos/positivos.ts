/* CONSIGNA:
Leer valores del usuario hasta que introduzca un 0.
Contar la cantidad de valores introducidos que sean
mayores a 0 y el porcentaje de positivos respecto del total.
*/
let numeros: number = 0;
let contador: number = 0;
let positivo: number = 0;
let porcentaje: number;

let control: number = 1;
while (control < 2) {
  numeros = Number(prompt("Ingrese numero - Utilize 0 para salir"));
  if (numeros === 0) {
    control = 3;
  } else {
    contador++;
    if (numeros > 0) {
      positivo++;
    }
  }
}
porcentaje = (positivo / contador) * 100;

console.log(positivo, " números positivos, ", porcentaje, "% del total.");
