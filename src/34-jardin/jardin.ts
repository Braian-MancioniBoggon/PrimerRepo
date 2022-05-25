/*
let cantidadDeAlumnos: number = Number(
  prompt("Ingrese la cantidad de alumnos")
);
let amarillo: number = 30;
let verde: number = 35;
let azul: number = 40;

let asignarAula = (
  aula1: number,
  aula2: number,
  aula3: number,
  alumnos: number
) => {
  if (alumnos <= aula1) {
    console.log("Se le asignó el aula Amarilla");
  } else if (alumnos > aula1 && alumnos <= aula2) {
    console.log("Se le asignó el aula Verde");
  } else if (alumnos > aula2 && alumnos <= aula3) {
    console.log("Se le asignó el aula Azul");
  } else {
    console.log(
      "Se superó la cantidad máxima de alumnos permitidos en las aulas disponibles"
    );
  }
};

asignarAula(amarillo, verde, azul, cantidadDeAlumnos);
*/
//
//------------------Codigo corregido despues de la clase----------------------------------------------------
//
let cantidadDeAulas: number = Number(prompt("Ingrese la cantidad de aulas:"));

let nombresDeLasAulas: string[] = new Array(cantidadDeAulas);
let capacidadDeLasAulas: number[] = new Array(cantidadDeAulas);
let cantidadDeAlumnos: number;

let cargarArregloString = (
  arreglo: string[],
  longitudArreglo: number
): string => {
  for (let i: number = 0; i < longitudArreglo; i++) {
    arreglo[i] = prompt("Ingrese el nombre del aula N°" + (i + 1));
  }
};

let cargarArregloNumber = (
  arreglo: number[],
  longitudArreglo: number
): number => {
  for (let i: number = 0; i < longitudArreglo; i++) {
    arreglo[i] = Number(
      prompt("Ingrese la capacidad de alumnos para el aula N°" + (i + 1))
    );
  }
};

/*el ejemplo de resolucion en el powerpoint solo funciona 
si el aula de mayor capacidad se ingresa primero.
Si el primer aula que se carga tiene una capacidad menor
a la cantidad de alumno, siempre va a asignar la primer aula que se cargó.
sigo buscando la forma de corregir eso utilizando arreglos y  que el usuario
carge todos los datos.
*/

let aulaoptima = (
  aulas: string[],
  capacidad: number[],
  numeroDeAulas: number,
  alumnos: number
): string => {
  let aulaAsignada: number = 0;
  let aulaAsignadaAux: number = 1;
  for (let i: number = 0; i < numeroDeAulas; i++) {
    if (capacidad[i] >= alumnos && capacidad[i] > capacidad[aulaAsignadaAux]) {
      aulaAsignada = i;
    } else {
      aulaAsignadaAux++;
    }
  }
  return aulas[aulaAsignada];
};

cargarArregloString(nombresDeLasAulas, cantidadDeAulas);
cargarArregloNumber(capacidadDeLasAulas, cantidadDeAulas);
cantidadDeAlumnos = Number(prompt("Ingrese la cantidad de alumnos"));

console.log(
  "El aula asignada es: " +
    aulaoptima(
      nombresDeLasAulas,
      capacidadDeLasAulas,
      cantidadDeAulas,
      cantidadDeAlumnos
    )
);
