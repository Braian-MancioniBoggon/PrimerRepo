let btnEnv = document.getElementById("calcular");

let numero1: number = document.getElementById("dato1");
let numero2: number = document.getElementById("dato2");
let cont: number;
let salida: number = 0;

btnEnv.addEventListener("click", () => {
  let num1: number = Number(numero1.value);
  let num2: number = Number(numero2.value);

  for (cont = 0; cont <= num2; cont++) {
    salida = num1 * cont;

    console.log(num1 + "*" + cont + "=" + salida);
  }
});
