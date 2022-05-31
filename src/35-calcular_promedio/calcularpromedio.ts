/* CONSIGNA:
La edad de los chicos va de 3 a 7 años. Las edades son cargadas al azar.
Muestre todas las edades y el promedio de las mismas.
*/
let cantidad: number = Number(
  prompt("Ingrese la cantidad de infantes en el equipo")
);

let equipo: number[] = new Array(cantidad);
let promedio: number = 0;
let edadesEquipo: string = "";

let crearNumeroAleatorio = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
let cargarAleatorio = (arreglo: number[], cantidad: number): number[] => {
  for (let indice: number = 0; indice < cantidad; indice++) {
    arreglo[indice] = crearNumeroAleatorio(3, 7);
  }
};
let mostrarArreglo = (arreglo: number[], cantidad: number): number[] => {
  for (let indice: number = 0; indice < cantidad; indice++) {
    edadesEquipo += arreglo[indice] + ", ";
  }
  console.log(
    "Las edades de los infantes dentro del quipo son: " + edadesEquipo
  );
};
let calcularPromedio = (arreglo: number[], cantidad: number): number[] => {
  for (let indice: number = 0; indice < cantidad; indice++) {
    promedio += arreglo[indice];
  }
  promedio = promedio / cantidad;
  console.log("El promedio de edad de los infantes es: " + promedio);
};

cargarAleatorio(equipo, cantidad);
mostrarArreglo(equipo, cantidad);
calcularPromedio(equipo, cantidad);
