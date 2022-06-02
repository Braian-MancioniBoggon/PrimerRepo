/* CONSIGNA:
No se han permitido la entrada a menores de 18 ni mayores de 40.
Para la carga de los datos se usa la función aleatorio.
Se quiere saber cuántas personas son menores de 21 años,
cuántas personas mayores o igual a 21 años y cuántas personas en total.
*/

//La capacidad no cambia en ningun momento, por eso la declaro como constante
const capacidad: number = 270;

//Declaro los elemementos que voy a usar del html
let resultado = document.getElementById("resultado");
let btnProbar = document.getElementById("probar");

//Indico que, al pulsar el boton, muestre los datos correspondientes en consola y en el html
btnProbar.addEventListener("click", () => {
  //Función para crear números aleatorios
  let generarNumeroAleatorio = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  //Asigno un número aleatorio para determinar la cantidad de gente presente
  let personasTotal: number = generarNumeroAleatorio(1, capacidad);
  //let personasTotal: number = 10; //linea para corroborar funcionamiento

  //Asigno la variable "presonasTotal" como longitud del arreglo
  let edades: number[] = new Array(personasTotal);
  let menores: number = 0;

  //Función para cargar arreglos con números aleatorios entre 18 y 40
  let completarEdadesPersonas = (
    arreglo: number[],
    longitudArreglo: number
  ): number => {
    for (let i: number = 0; i < longitudArreglo; i++) {
      arreglo[i] = generarNumeroAleatorio(18, 40);
    }
  };

  //Función para calcular la cantidad de personas menores a 21 años
  let calcularMenores = (
    arreglo: number[],
    longitudArreglo: number
  ): number => {
    for (let i: number = 0; i < longitudArreglo; i++) {
      if (arreglo[i] < 21) {
        menores++;
      }
    }
  };

  completarEdadesPersonas(edades, personasTotal);
  calcularMenores(edades, personasTotal);

  //Muestro el resultado en consola y en el html
  console.log(menores + " presonas son menores de 21");
  console.log(personasTotal - menores + " presonas son mayores de 21");
  console.log("Hay " + personasTotal + " presonas en total");
  resultado.innerHTML =
    "<p>" +
    menores +
    " presonas son menores de 21</p><p>" +
    (personasTotal - menores) +
    " presonas son mayores de 21</p><p>Hay " +
    personasTotal +
    " presonas en total</p>";
  //console.log(edades); //linea para corroborar funcionamiento
});
