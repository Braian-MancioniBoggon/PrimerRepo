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
