/* CONSIGNA:
Calcular las calificaciones de un grupo de alumnos,
donde la nota final de cada alumno se calcula según
el siguiente criterio: la parte práctica vale el 10%,
la parte de problemas vale el 50%, la parte teórica el 40%.
*/

//Declaro los elemementos que voy a usar del html
let resultado = document.getElementById("resultado");
let btnProbar = document.getElementById("probar");

//Indico que, al pulsar el boton, habilite la carga de alumnos y notas para mostrar en consola y en el html
btnProbar.addEventListener("click", () => {
  resultado.innerHTML = " ";
  let nombre: string = prompt("Ingrese el nombre del alumno");
  let promedio: number;

  //Mientras el usuario no deje el campo de nombre vacio puede seguir cargando
  while (nombre !== "") {
    //Solicito las notas del alumno
    let practica: number = Number(
      prompt("Ingrese la calificación de práctica")
    );
    let problemas: number = Number(
      prompt("Ingrese la calificación de problemas")
    );
    let teoria: number = Number(prompt("Ingrese la calificación de teoría"));

    //Corroboro que las notas esten entre 0 y 10, en caso contrario se muestra un mensaje de error
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

      //Muestro en el html y en consola el nombre y promedio de los alumnos cargados
      console.log("Alumno: " + nombre);
      console.log("Promedio: " + promedio);
      resultado.innerHTML +=
        "<p>Alumno: " + nombre + ". Promedio: " + promedio + "</p>";
    } else {
      //Muestro en el html y en consola el nombre y que la nota no es valida
      console.log("Alumno: " + nombre);
      console.log(
        "Calificación no valida, ingrese una calificación entre 0 y 10."
      );
      resultado.innerHTML +=
        "<p>Alumno: " +
        nombre +
        ". Calificación no valida, ingrese una calificación entre 0 y 10.</p>";
    }
    nombre = prompt("Ingrese el nombre del alumno");
  }
});
