let numero: number = 0;
numero = Number(prompt("Ingrese un numero"));
if (numero === 0) {
  console.log("El numero ingresado es 0");
} else if (numero % 2 === 0) {
  console.log("El numero ingresado es par");
} else {
  console.log("El numero ingresado es impar");
}
