//Declaro todos los elementos que voy a utilizar
let valor = document.getElementById("valor");
let agregar = document.getElementById("agregar");
let calcular = document.getElementById("calcular");
let lista = document.getElementById("productos");
let total = document.getElementById("total");

let arregloLista: number[] = [];
let totalLista: number = 0;

//Función para agregar el valor del input tanto a la lista como al arreglo y luego vaciar el input
let agregarALaLista = () => {
  arregloLista.push(Number(valor.value));
  lista.innerHTML += `<li>$${valor.value}</li>`;
  valor.value = "";
};

//Función para recorrer el arreglo ya cargado, sumar los valores y mostrar el resultado en el HTML
let calcularTotal = () => {
  totalLista = 0;
  for (let i = 0; i < arregloLista.length; i++) {
    totalLista += Number(arregloLista[i]);
  }
  total.innerHTML = totalLista;
};

//Al apretar el boton "Agregar" va a llamar a la función "agregarALaLista"
agregar.addEventListener("click", agregarALaLista);

//Al apretar el boton "Calcular total" va a llamar a la función "calcularTotal"
calcular.addEventListener("click", calcularTotal);
