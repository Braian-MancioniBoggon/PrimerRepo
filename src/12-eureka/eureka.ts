/* CONSIGNA:
Escribir un algoritmo que nos pida una clave y verifique
que sea la correcta (eureka), solo tenemos 3 intentos
y si acertamos la clave, saldremos directamente del programa.
*/

//Declaro los elemementos que voy a usar del html
let btnProbar = document.getElementById("probar");
let resultado = document.getElementById("resultado");

//Indico que, al pulsar el boton, solicite la clave y muestre el resultado en consola y en el html
btnProbar.addEventListener("click", () => {
  //Declaro las variables que voy a utilizar
  let contador: number = 1;
  let clave: string;

  //Indico que no hay mas de 3 intentos
  while (contador <= 3 && clave !== "eureka") {
    contador = contador + 1;
    clave = prompt("Ingrese la clave");
  }

  //En el caso que ingresen la clave correcta se da aviso, sino, se informa que se agotaron los 3 intentos
  if (clave === "eureka") {
    console.log("clave correcta");
    resultado.innerHTML = "clave correcta";
  } else {
    console.log("agoto la cantidad de intentos");
    resultado.innerHTML = "agoto la cantidad de intentos";
  }
});
