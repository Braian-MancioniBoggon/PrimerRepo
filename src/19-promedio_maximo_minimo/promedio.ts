let suma: number = 0;
let contador: number = 0;
let promedio: number;
let numeroIngresado: number;

numeroIngresado = Number(prompt("Ingrese número"));

let maximo: number = numeroIngresado;
let minimo: number = numeroIngresado;

while (numeroIngresado !== 0) {
  suma = suma + numeroIngresado;
  contador++;
  if (numeroIngresado > maximo) {
    maximo = numeroIngresado;
  } else if (numeroIngresado < minimo) {
    minimo = numeroIngresado;
  }
  numeroIngresado = Number(prompt("Ingrese número"));
}
promedio = suma / contador;

console.log(
  "El número maximo es ",
  maximo,
  ", el minimo es ",
  minimo,
  " y el promedio es ",
  promedio
);
