//Declaro todos los elementos que voy a utilizar
let btnAgregar = document.getElementById("agregar");
let btnDecrementar = document.getElementById("decrementar");
let contador = document.getElementById("contador");

//Función para aumentar en 1 el valor en el contador
let sumar = () => {
  contador.innerHTML++;
};

//Función para disminuir en 1 el valor en el contador
let restar = () => {
  contador.innerHTML--;
};

//Al apretar el boton "Agregar" va a llamar a la función para aumentar en 1
btnAgregar.addEventListener("click", sumar);

//Al apretar el boton "Decrementar" va a llamar a la función para disminuir en 1
btnDecrementar.addEventListener("click", restar);
