/* CONSIGNA:
Calcular el valor final de $450.50 con un 10% de descuento.
*/
let precio: number = 450.5;
let descuento: number;
let precioFinal: number;

descuento = precio * 0.1;
precioFinal = precio - descuento;
console.log("El precio con 10% de descuento es $" + precioFinal);
