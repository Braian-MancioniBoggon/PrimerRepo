/* CONSIGNA:
Imprimir en consola cuatro textos almacenados en variables.
*/

/*CODIGO ORIGINAL
let palabra1: string = "Este";
let palabra2: string = "algoritmo";
let palabra3: string = "es";
let palabra4: string = "secuencial";
/* este programa imprime 4 líneas por la consola,
Además tiene comentarios */
/*console.log(palabra1);
//esto es un comentario
console.log(palabra2);
//esto es otro comentario
console.log(palabra3);
//esto es un cuarto comentario
console.log(palabra4);
*/

//Declaro los elemementos que voy a usar del html
let btnProbar = document.getElementById("probar");
let algoritmoSecuencial = document.getElementById("algoritmoSecuencial");

//Indico que, al pulsar el boton, muestre las variables en consola y en el html
btnProbar.addEventListener("click", () => {
  let palabra1: string = "Este";
  let palabra2: string = "algoritmo";
  let palabra3: string = "es";
  let palabra4: string = "secuencial";
  /* este programa imprime 4 líneas por la consola,
Además tiene comentarios */
  console.log(palabra1);
  //esto es un comentario
  console.log(palabra2);
  //esto es otro comentario
  console.log(palabra3);
  //esto es un cuarto comentario
  console.log(palabra4);
  algoritmoSecuencial.innerHTML =
    palabra1 + " " + palabra2 + " " + palabra3 + " " + palabra4;
});
