let descuento = document.getElementById("descuento");
let compras = document.getElementById("compras");
let total = document.getElementById("total");
let btnVaciar = document.getElementById("vaciarCarrito");

let nombreProducto1: string = document.getElementById("nombreProducto1");
let precioProducto1: number = document.getElementById("precioProducto1");
let agregarProducto1 = document.getElementById("agregarProducto1");
let nombreProducto2: string = document.getElementById("nombreProducto2");
let precioProducto2: number = document.getElementById("precioProducto2");
let agregarProducto2 = document.getElementById("agregarProducto2");
let nombreProducto3: string = document.getElementById("nombreProducto3");
let precioProducto3: number = document.getElementById("precioProducto3");
let agregarProducto3 = document.getElementById("agregarProducto3");
let nombreProducto4: string = document.getElementById("nombreProducto4");
let precioProducto4: number = document.getElementById("precioProducto4");
let agregarProducto4 = document.getElementById("agregarProducto4");
let nombreProducto5: string = document.getElementById("nombreProducto5");
let precioProducto5: number = document.getElementById("precioProducto5");
let agregarProducto5 = document.getElementById("agregarProducto5");
let nombreProducto6: string = document.getElementById("nombreProducto6");
let precioProducto6: number = document.getElementById("precioProducto6");
let agregarProducto6 = document.getElementById("agregarProducto6");

let arregloProductos: string[] = [];
let arregloPrecios: number[] = [];
let totalCarrito: number = 0;

//Función para cargar el producto 1 al carrito
const agregarAlCarrito1 = () => {
  arregloProductos.push(nombreProducto1.innerHTML);
  arregloPrecios.push(Number(precioProducto1.innerHTML));
  compras.innerHTML += `<li>${nombreProducto1.innerHTML}  $${Number(
    precioProducto1.innerHTML
  )}</li>`;
};

//Función para cargar el producto 2 al carrito
const agregarAlCarrito2 = () => {
  arregloProductos.push(nombreProducto2.innerHTML);
  arregloPrecios.push(Number(precioProducto2.innerHTML));
  compras.innerHTML += `<li>${nombreProducto2.innerHTML}  $${Number(
    precioProducto2.innerHTML
  )}</li>`;
};

//Función para cargar el producto 3 al carrito
const agregarAlCarrito3 = () => {
  arregloProductos.push(nombreProducto3.innerHTML);
  arregloPrecios.push(Number(precioProducto3.innerHTML));
  compras.innerHTML += `<li>${nombreProducto3.innerHTML}  $${Number(
    precioProducto3.innerHTML
  )}</li>`;
};

//Función para cargar el producto 4 al carrito
const agregarAlCarrito4 = () => {
  arregloProductos.push(nombreProducto4.innerHTML);
  arregloPrecios.push(Number(precioProducto4.innerHTML));
  compras.innerHTML += `<li>${nombreProducto4.innerHTML}  $${Number(
    precioProducto4.innerHTML
  )}</li>`;
};

//Función para cargar el producto 5 al carrito
const agregarAlCarrito5 = () => {
  arregloProductos.push(nombreProducto5.innerHTML);
  arregloPrecios.push(Number(precioProducto5.innerHTML));
  compras.innerHTML += `<li>${nombreProducto5.innerHTML}  $${Number(
    precioProducto5.innerHTML
  )}</li>`;
};

//Función para cargar el producto 6 al carrito
const agregarAlCarrito6 = () => {
  arregloProductos.push(nombreProducto6.innerHTML);
  arregloPrecios.push(Number(precioProducto6.innerHTML));
  compras.innerHTML += `<li>${nombreProducto6.innerHTML}  $${Number(
    precioProducto6.innerHTML
  )}</li>`;
};

//Función para sumar el total del carrito
const calcularTotal = () => {
  totalCarrito = 0;
  for (let i = 0; i < arregloPrecios.length; i++) {
    totalCarrito += Number(arregloPrecios[i]);
  }
  if (totalCarrito<=2500){
    total.innerHTML = totalCarrito;
    descuento.innerHTML = "";
  } else {
    totalCarrito = totalCarrito * 0.9;
    total.innerHTML = totalCarrito;
    descuento.innerHTML = "¡Felicitaciones! Por superar los $2500 en tu compra tenés un 10% de descuento";
  }
};

//Función para vaciar el carrito
const vaciarCarrito = () => {
  compras.innerHTML = "";
  total.innerHTML = "";
  descuento.innerHTML = "";
  arregloProductos = [];
  arregloPrecios = [];
};



//Evento para vaciar el carrito
btnVaciar.addEventListener("click", vaciarCarrito);

//Agrego los eventos para cargar cada producto de la lista
agregarProducto1.addEventListener("click", () => {
  agregarAlCarrito1();
  calcularTotal();
});

agregarProducto2.addEventListener("click", () => {
  agregarAlCarrito2();
  calcularTotal();
});

agregarProducto3.addEventListener("click", () => {
  agregarAlCarrito3();
  calcularTotal();
});

agregarProducto4.addEventListener("click", () => {
  agregarAlCarrito4();
  calcularTotal();
});

agregarProducto5.addEventListener("click", () => {
  agregarAlCarrito5();
  calcularTotal();
});

agregarProducto6.addEventListener("click", () => {
  agregarAlCarrito6();
  calcularTotal();
});
