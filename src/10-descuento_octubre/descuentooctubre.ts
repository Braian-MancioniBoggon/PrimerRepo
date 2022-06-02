/* CONSIGNA:
Desarrolle un algoritmo que dada una compra: precio unitario,
cantidad y el mes, indicados por el usuario, determine si el
cliente tiene descuento o no.
*/

//Declaro la variable y los elemementos que voy a usar del html
let precios: number = document.getElementById("precio");
let cantidades: number = document.getElementById("cantidad");
let meses: number = document.getElementById("mes");
let precioFinal: number = 0;
let total = document.getElementById("total");
let btnCalcular = document.getElementById("calcular");

//Indico que, al pulsar el boton, muestre el precio final en consola y en el html
btnCalcular.addEventListener("click", () => {
  let precio: number = Number(precios.value);
  let cantidad: number = Number(cantidades.value);
  let mes: number = Number(meses.value);

  //Verifico si se compro en Octubre para aplicar el descuento
  if (mes === 10) {
    let descuento: number = precio * 0.15;
    precioFinal = (precio - descuento) * cantidad;
    console.log("El precio final es $" + precioFinal);
    total.innerHTML = "El precio final es $" + precioFinal;
  } else {
    precioFinal = precio * cantidad;
    console.log("El precio final es $" + precioFinal);
    total.innerHTML = "El precio final es $" + precioFinal;
  }
});
