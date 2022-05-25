let nombre: string = prompt("Ingrese el nombre del alumno");
let arregloNotas: number[] = new Array(3);
let promedio: number = 0;

let promedioNotas = (arreglo: number[]): number => {
  let suma: number = 0;
  for (let i: number = 0; i < 3; i++) {
    arreglo[i] = Number(prompt("ingrese la nota N°" + (i + 1)));
    suma += arreglo[i];
  }
  promedio = suma / 3;
  return promedio;
};

promedioNotas(arregloNotas, 3);
console.log("El promedio del alumno " + nombre + " es: " + promedio);
