let num1: number = document.getElementById("num1");
let num2: number = document.getElementById("num2");
let btnSumar = document.getElementById("btnSumar");

btnSumar.addEventListener("click", () => {
  let suma: number = Number(num1.value) + Number(num2.value);
  console.log("La suma es: ", suma);
});
