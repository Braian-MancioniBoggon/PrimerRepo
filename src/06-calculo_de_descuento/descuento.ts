/* CONSIGNA:
Calcular el valor final de $450.50 con un 10% de descuento.
*/

//Declaro las variables y el elememento que voy a usar del html
let precio: number = 450.5;
let descuento: number;
let precioFinal: number;
let resultado = document.getElementById("resultado");

//Calculo el valor con el descuento aplicado y lo muestro por consola y en el html
descuento = precio * 0.1;
precioFinal = precio - descuento;
console.log("El precio con 10% de descuento es $" + precioFinal);
resultado.innerHTML = "El precio con 10% de descuento es $" + precioFinal;
