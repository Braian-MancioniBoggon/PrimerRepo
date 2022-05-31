/* CONSIGNA:
No se han permitido la entrada a menores de 18 ni mayores de 40.
Para la carga de los datos se usa la función aleatorio.
Se quiere saber cuántas personas son menores de 21 años,
cuántas personas mayores o igual a 21 años y cuántas personas en total.
*/
const capacidad: number = 270;

let generarNumeroAleatorio = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

let personasTotal: number = generarNumeroAleatorio(1, capacidad);
//let personasTotal: number = 10; //linea para corroborar funcionamiento
let edades: number[] = new Array(personasTotal);
let menores: number = 0;

let completarEdadesPersonas = (
  arreglo: number[],
  longitudArreglo: number
): number => {
  for (let i: number = 0; i < longitudArreglo; i++) {
    arreglo[i] = generarNumeroAleatorio(18, 40);
  }
};
let calcularMenores = (arreglo: number[], longitudArreglo: number): number => {
  for (let i: number = 0; i < longitudArreglo; i++) {
    if (arreglo[i] < 21) {
      menores++;
    }
  }
};

completarEdadesPersonas(edades, personasTotal);
calcularMenores(edades, personasTotal);
console.log(menores + " presonas son menores de 21");
console.log(personasTotal - menores + " presonas son mayores de 21");
console.log("Hay " + personasTotal + " presonas en total");
//console.log(edades); //linea para corroborar funcionamiento
