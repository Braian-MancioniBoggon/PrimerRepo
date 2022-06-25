/* CONSIGNA:
Dado un número de infantes ingresado por el usuario,
el programa deberá determinar el aula que minimice
la cantidad de bancos vacíos.
*/
//------------------Codigo original en el que no usé arreglos---------------------------------
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

let resultado = document.getElementById("resultado");
let btnProbar = document.getElementById("probar");

btnProbar.addEventListener("click", () => {
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
    arregloNombres: string[],
    longitudArreglo: number
  ): number => {
    for (let i: number = 0; i < longitudArreglo; i++) {
      arreglo[i] = Number(
        prompt(
          "Ingrese la capacidad de alumnos para el aula " + arregloNombres[i]
        )
      );
    }
  };

  /*el ejemplo de resolucion en el powerpoint solo funciona 
si el aula de mayor capacidad se ingresa primero.
Si el primer aula que se carga tiene una capacidad menor a la cantidad
de alumno, siempre va a asignar la primer aula que se cargó.
.
Pareciera que encontre la forma de corregir eso y
que el usuario carge todos los datos.
*/

  let capacidadAulaMasGrande = (arreglo: number[], alumnos: number): number => {
    let aulaGrande: number = 0;
    for (let i: number = 0; i < alumnos; i++) {
      if (arreglo[i] > aulaGrande) {
        aulaGrande = arreglo[i];
      }
    }
    return aulaGrande;
  };

  let asignarAula = (
    aulas: string[],
    capacidad: number[],
    numeroDeAulas: number,
    alumnos: number
  ): string => {
    let aulaOptima: number = 0;
    let aulaOptimaAux: number = 0;
    let aulaOptimaAux2: number = capacidadAulaMasGrande(capacidad, alumnos);
    let aulaGrande: number = capacidadAulaMasGrande(capacidad, alumnos);
    for (let i: number = 0; i < numeroDeAulas; i++) {
      aulaOptimaAux = capacidad[i] - alumnos;
      if (alumnos > aulaGrande) {
        console.log("No hay aula disponible para dicha cantidad de alumnos");
        resultado.innerHTML =
          "No hay aula disponible para dicha cantidad de alumnos";
      } else if (aulaOptimaAux < aulaGrande && aulaOptimaAux >= 0) {
        if (aulaOptimaAux < aulaOptimaAux2) {
          aulaOptima = i;
          aulaOptimaAux2 = aulaOptimaAux;
        } else {
          aulaOptimaAux2 = aulaOptimaAux;
        }
        console.log("El aula asignada es: " + aulas[aulaOptima]);
        resultado.innerHTML = "El aula asignada es: " + aulas[aulaOptima];
      }
    }
  };

  cargarArregloString(nombresDeLasAulas, cantidadDeAulas);
  cargarArregloNumber(capacidadDeLasAulas, nombresDeLasAulas, cantidadDeAulas);
  cantidadDeAlumnos = Number(prompt("Ingrese la cantidad de alumnos"));
  asignarAula(
    nombresDeLasAulas,
    capacidadDeLasAulas,
    cantidadDeAulas,
    cantidadDeAlumnos
  );
});
