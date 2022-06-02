/* CONSIGNA:
Se debe permitir obtener el promedio anual (es decir, de sus tres notas)
de un alumno (ingresado por el usuario).
*/

//Declaro los elemementos que voy a usar del html
let resultado = document.getElementById("resultado");
let btnProbar = document.getElementById("probar");

//Indico que, al pulsar el boton, muestre los datos correspondientes en consola y en el html
btnProbar.addEventListener("click", () => {
  //Solicito el nombre del alumno
  let nombre: string = prompt("Ingrese el nombre del alumno");
  let arregloNotas: number[] = new Array(3);
  let promedio: number = 0;

  //Cargo el arreglo con las 3 notas y saco el promedio
  let promedioNotas = (arreglo: number[]): number => {
    let suma: number = 0;
    for (let i: number = 0; i < 3; i++) {
      arreglo[i] = Number(prompt("ingrese la nota N°" + (i + 1)));
      suma += arreglo[i];
    }
    promedio = suma / 3;
    return promedio;
  };

  //Muestro el resultado en consola y en el html
  promedioNotas(arregloNotas, 3);
  console.log("El promedio del alumno " + nombre + " es: " + promedio);
  resultado.innerHTML = "El promedio del alumno " + nombre + " es: " + promedio;
});
