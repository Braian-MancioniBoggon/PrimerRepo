/* CONSIGNA:
Calcular el área de un rectangulo.
*/
let btnCon = document.getElementById("btnCalcular");
let base: number = document.forms[0].base;
let altura: number = document.forms[0].altura;
let resultado = document.getElementById("resultado");

btnCon.addEventListener("click", () => {
  console.log("El area es ", base.value * altura.value);
  resultado.innerHTML = "El area es: " + base.value * altura.value;
});
