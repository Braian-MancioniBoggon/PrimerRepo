let num: number;
let max: number = 0;
let indice: number = 0;

while (indice < 7) {
  indice++;
  num = prompt("Ingrese la temperatura del día " + indice + " de la semana");
  if (num > max) {
    max = num;
  }
}
console.log("La temperatura maxima es: ", max);
