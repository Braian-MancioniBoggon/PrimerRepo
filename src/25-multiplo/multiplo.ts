/* CONSIGNA:
Cree un método esMultiplo con 2 parámetros que devuelva
el valor lógico verdadero o falso según si el primer número
que se indique como parámetro es múltiplo del segundo.
*/
let numero1 = document.getElementById("numero1");
let numero2 = document.getElementById("numero2");
let btnCalcular = document.getElementById("calcular");

/*
let esMultiplo = (num1: number, num2: number) => {
  if (num1 % num2 === 0) {
    console.log("El número ", num1, " es multiplo de", num2);
  } else {
    console.log("El número ", num1, " no es multiplo de", num2);
  }
};

btnCalcular.addEventListener("click", () => {
  esMultiplo(Number(numero1.value), Number(numero2.value));
}); */

let esMultiplo = (num1: number, num2: number): boolean => {
  return num1 % num2 === 0;
};

btnCalcular.addEventListener("click", () => {
  if (esMultiplo(Number(numero1.value), Number(numero2.value))) {
    console.log(
      "El número ",
      Number(numero1.value),
      " es multiplo de",
      Number(numero2.value)
    );
  } else {
    console.log(
      "El número ",
      Number(numero1.value),
      " no es multiplo de",
      Number(numero2.value)
    );
  }
});
