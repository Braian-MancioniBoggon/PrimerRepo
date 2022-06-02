/* CONSIGNA:
Implemente un método llamado calcularResultado que reciba
por parámetros los dos números y la opción y retorne
el resultado de la operación.
*/

//Declaro los elemementos que voy a usar del html
let resultadoOperacion = document.getElementById("resultado");
let numero1 = document.getElementById("numero1");
let numero2 = document.getElementById("numero2");
let calculo = document.getElementById("calculo");
let btnCalcular = document.getElementById("calcular");

//Función para calcular la suma o resta de los numeros proporcionados
let calcularResultado = (
  num1: number,
  num2: number,
  operacion: number
): number => {
  let resultado: number = 0;

  if (operacion === 1) {
    resultado = num1 + num2;
  } else if (operacion === 2) {
    resultado = num1 - num2;
  } else {
    console.log("La opción ingresada no es valida");
  }

  return resultado;
};

//Funcion para hacer un separador de guiones para mostrar en consola
let lineas = (cantidadDeGuiones): string => {
  let separador: string = "";
  for (let i: number = 0; i < cantidadDeGuiones; i++) {
    separador += "-";
  }
  console.log(separador);
};

//Indico que, al pulsar el boton, utilice la función y muestre el resultado en consola y en el html
btnCalcular.addEventListener("click", () => {
  let resultado: number = calcularResultado(
    Number(numero1.value),
    Number(numero2.value),
    Number(calculo.value)
  );
  lineas(40);
  console.log("El resultado es " + resultado);
  lineas(40);
  resultadoOperacion.innerHTML = "El resultado es " + resultado;
});
