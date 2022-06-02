/* CONSIGNA:
La edad de los chicos va de 3 a 7 años. Las edades son cargadas al azar.
Muestre todas las edades y el promedio de las mismas.
*/

//Declaro los elemementos que voy a usar del html
let resultado = document.getElementById("resultado");
let btnProbar = document.getElementById("probar");

//Indico que, al pulsar el boton, muestre los datos correspondientes en consola y en el html
btnProbar.addEventListener("click", () => {
  //Pido la cantidad de infantes
  let cantidad: number = Number(
    prompt("Ingrese la cantidad de infantes en el equipo")
  );

  //Declaro el arreglo y las variables
  let equipo: number[] = new Array(cantidad);
  let promedio: number = 0;
  let edadesEquipo: string = "";

  //Función para números aleatorios
  let crearNumeroAleatorio = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  //Función para cargar el arreglo con los números aleatorios
  let cargarAleatorio = (arreglo: number[], cantidad: number): number[] => {
    for (let indice: number = 0; indice < cantidad; indice++) {
      arreglo[indice] = crearNumeroAleatorio(3, 7);
    }
  };
  //Función para mostrar el arreglo ya cargado
  let mostrarArreglo = (arreglo: number[], cantidad: number): number[] => {
    for (let indice: number = 0; indice < cantidad; indice++) {
      edadesEquipo += arreglo[indice] + ", ";
    }
    //Muestro el arreglo en consola
    console.log(
      "Las edades de los infantes dentro del equipo son: " + edadesEquipo
    );
  };
  //Función para calcular el promedio de las edades
  let calcularPromedio = (arreglo: number[], cantidad: number): number[] => {
    for (let indice: number = 0; indice < cantidad; indice++) {
      promedio += arreglo[indice];
    }
    promedio = promedio / cantidad;
    //Muestro el promedio de edades en consola
    console.log("El promedio de edad de los infantes es: " + promedio);
  };

  cargarAleatorio(equipo, cantidad);
  mostrarArreglo(equipo, cantidad);
  calcularPromedio(equipo, cantidad);
  //Muestro el arreglo y el promedio de edades en el html
  resultado.innerHTML =
    "<p>Las edades de los infantes dentro del equipo son: " +
    edadesEquipo +
    "</p><p>El promedio de edad de los infantes es: " +
    promedio +
    "</p>";
});
