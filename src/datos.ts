let btnEnv = document.getElementById("btnEnviar");
let dato = document.forms[0].dato;

btnEnv.addEventListener("click", () => {
  console.log("el dato ingresado es ", dato.value);
});
