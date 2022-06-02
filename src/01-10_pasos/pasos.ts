/* CONSIGNA:
Imprimir en consola 10 entradas de texto.
*/
/* CODIGO ORIGINAL
console.log("01 Seleccione las cacerolas a utilizar");
console.log("02 Engrasar y precalentar");
console.log("03 Prepare sus ingredientes");
console.log("04 Batir la mezcla seca");
console.log("05 Crema tu mantequilla y azúcar");
console.log("06 Agregue los huevos");
console.log("07 Es hora de combinar");
console.log("08 Vierta su masa en su sartén");
console.log("09 Hornee y enfríe sus pasteles");
console.log("10 Decore sus pasteles a gusto");
*/

//Declaro los elemementos que voy a usar del html
let btnProbar = document.getElementById("probar");
let paso01 = document.getElementById("paso01");
let paso02 = document.getElementById("paso02");
let paso03 = document.getElementById("paso03");
let paso04 = document.getElementById("paso04");
let paso05 = document.getElementById("paso05");
let paso06 = document.getElementById("paso06");
let paso07 = document.getElementById("paso07");
let paso08 = document.getElementById("paso08");
let paso09 = document.getElementById("paso09");
let paso10 = document.getElementById("paso10");

//Indico que, al pulsar el boton, muestre los 10 pasos en consola y en el html
btnProbar.addEventListener("click", () => {
  console.log("01 - Seleccione las cacerolas a utilizar");
  paso01.innerHTML = "01 - Seleccione las cacerolas a utilizar";
  console.log("02 - Engrasar y precalentar");
  paso02.innerHTML = "02 - Engrasar y precalentar";
  console.log("03 - Prepare sus ingredientes");
  paso03.innerHTML = "03 - Prepare sus ingredientes";
  console.log("04 - Batir la mezcla seca");
  paso04.innerHTML = "04 - Batir la mezcla seca";
  console.log("05 - Crema tu mantequilla y azúcar");
  paso05.innerHTML = "05 - Crema tu mantequilla y azúcar";
  console.log("06 - Agregue los huevos");
  paso06.innerHTML = "06 - Agregue los huevos";
  console.log("07 - Es hora de combinar");
  paso07.innerHTML = "07 - Es hora de combinar";
  console.log("08 - Vierta su masa en su sartén");
  paso08.innerHTML = "08 - Vierta su masa en su sartén";
  console.log("09 - Hornee y enfríe sus pasteles");
  paso09.innerHTML = "09 - Hornee y enfríe sus pasteles";
  console.log("10 - Decore sus pasteles a gusto");
  paso10.innerHTML = "10 - Decore sus pasteles a gusto";
});
