let precios: number = document.getElementById("precio");
let cantidades: number = document.getElementById("cantidad");
let meses: number = document.getElementById("mes");
let precioFinal: number = 0;
let total = document.getElementById("total");
let btnCalcular = document.getElementById("calcular");

btnCalcular.addEventListener("click", () => {
  let precio: number = Number(precios.value);
  let cantidad: number = Number(cantidades.value);
  let mes: number = Number(meses.value);

  if (mes === 10) {
    let descuento: number = precio * 0.15;
    precioFinal = (precio - descuento) * cantidad;
    console.log(precioFinal);
    total.innerHTML = "El precio final es $" + precioFinal;
  } else {
    precioFinal = precio * cantidad;
    console.log(precioFinal);
    total.innerHTML = "El precio final es $" + precioFinal;
  }
});
