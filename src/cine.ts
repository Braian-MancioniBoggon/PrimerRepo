let butacas: boolean = [true, false, false, true, false, true, false, false];
let butacasVacias: number = 0;

for (let i: number = 0; i <= butacas.length; i++) {
  if (butacas[i] === false) {
    butacasVacias++;
  }
}

console.log("Hay " + butacasVacias + " butacas vacias");