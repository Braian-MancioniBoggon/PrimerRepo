/* CONSIGNA:
Desarrolle un algoritmo dado el salario actual de un empleado
determine el aumento de sueldo a aplicar y se lo muestre.
*/
let sueldos: number = document.getElementById("sueldo");
let total = document.getElementById("total");
let btnCalcular = document.getElementById("calcular");

btnCalcular.addEventListener("click", () => {
  let sueldo: number = Number(sueldos.value);
  if (sueldo <= 15000) {
    let aumento: number = sueldo * 0.2;
    sueldo = sueldo + aumento;
    console.log(sueldo);
    total.innerHTML =
      "El empleado obtiene un 20% de aumento. El total es $" + sueldo;
  } else if (sueldo > 15000 && sueldo <= 20000) {
    let aumento: number = sueldo * 0.1;
    sueldo = sueldo + aumento;
    console.log(sueldo);
    total.innerHTML =
      "El empleado obtiene un 10% de aumento. El total es $" + sueldo;
  } else if (sueldo > 20000 && sueldo <= 25000) {
    let aumento: number = sueldo * 0.05;
    sueldo = sueldo + aumento;
    console.log(sueldo);
    total.innerHTML =
      "El empleado obtiene un 5% de aumento. El total es $" + sueldo;
  } else if (sueldo > 25000) {
    console.log(sueldo);
    total.innerHTML = "El sueldo del empleado es $" + sueldo;
  }
});
