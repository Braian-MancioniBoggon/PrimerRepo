let nombre: string = prompt("Ingrese el nombre del alumno");
let promedio: number;

while (nombre !== "") {
  let practica: number = Number(prompt("Ingrese la calificación de práctica"));
  let problemas: number = Number(
    prompt("Ingrese la calificación de problemas")
  );
  let teoria: number = Number(prompt("Ingrese la calificación de teoría"));

  if (
    practica >= 0 &&
    practica <= 10 &&
    problemas >= 0 &&
    problemas <= 10 &&
    teoria >= 0 &&
    teoria <= 10
  ) {
    practica = practica * 0.1;
    problemas = problemas * 0.5;
    teoria = teoria * 0.4;
    promedio = practica + problemas + teoria;

    console.log("Alumno: " + nombre);
    console.log("Promedio: " + promedio);
  } else {
    console.log(
      "Calificación no valida, ingrese una calificación entre 0 y 10."
    );
  }
  nombre = prompt("Ingrese el nombre del alumno");
}
