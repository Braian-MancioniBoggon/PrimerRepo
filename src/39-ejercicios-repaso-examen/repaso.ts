//Declaro los elemementos que voy a usar del html
let ejercicio1 = document.getElementById("botonEjercicio1");
let resultado1 = document.getElementById("resultado1");
let ejercicio2 = document.getElementById("botonEjercicio2");
let resultado2 = document.getElementById("resultado2");

//----------------------------------------------------------------------------------------------------------------------------------------------

/* Ejercicio 1:  
Una materia de la carrera de Ingeniería de Sistemas exige la entrega de un trabajo práctico cada mes del año académico.
Este arreglo contiene las notas de un alumno para los meses de marzo a diciembre:  

notasAlumno: [7, 6, 9, 5, 8, 7, 10, 4, 8, 8] 

1) Teniendo en cuenta que se aprueba con 6, crear una función que devuelva en que meses desaprobó el alumno.  
2) Crear una función que devuelva en que mes obtuvo menor nota el alumno y cuál fue la nota.  
3) Crear una función que devuelva en que mes obtuvo mayor nota el alumno y cuál fue la nota.  
4) Crear una función que devuelva el promedio del alumno.
*/

//Indico que, al pulsar el boton, muestre los datos correspondientes en consola y en el html
ejercicio1.addEventListener("click", () => {
  //Declaro los arreglos y las variables que voy a usar
  let notasAlumno: number[] = [7, 6, 9, 5, 8, 7, 10, 4, 8, 8];
  let meses: string[] = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre"
  ];
  let mesesDesaprobados: string = "";
  let notaAlta: string = "";
  let notaBaja: string = "";
  let promedio: number = 0;

  //Función para saber en que meses desaprobó el alumno
  let desaproboMeses = (
    arregloNotas: number[],
    arregloMeses: string[]
  ): string => {
    for (let i: number = 0; i < arregloNotas.length; i++) {
      if (arregloNotas[i] < 6) {
        mesesDesaprobados += arregloMeses[i + 2] + " y ";
      }
    }
    return mesesDesaprobados;
  };

  //Función para obtener la mejor nota y el mes en que se obtuvo
  let obtenerMejorNota = (
    arregloNotas: number[],
    arregloMeses: string[]
  ): string => {
    let mejorNota: number = arregloNotas[0];
    let mesMejorNota: string = "";
    for (let i: number = 0; i < arregloNotas.length; i++) {
      if (arregloNotas[i] > mejorNota) {
        mejorNota = arregloNotas[i];
        mesMejorNota = arregloMeses[i + 2];
      }
    }
    notaAlta =
      "La nota más alta fue " +
      mejorNota +
      " en el mes de " +
      mesMejorNota +
      ".";
  };

  //Función para obtener la peor nota y el mes en que se obtuvo
  let obtenerPeorNota = (
    arregloNotas: number[],
    arregloMeses: string[]
  ): string => {
    let peorNota: number = arregloNotas[0];
    let mesPeorNota: string = "";
    for (let i: number = 0; i < arregloNotas.length; i++) {
      if (arregloNotas[i] < peorNota) {
        peorNota = arregloNotas[i];
        mesPeorNota = arregloMeses[i + 2];
      }
    }
    notaBaja =
      "La nota más baja fue " + peorNota + " en el mes de " + mesPeorNota + ".";
  };

  //Función para calcular el promedio
  let calcularPromedio = (arregloNotas: number[]): number => {
    let suma: number = 0;
    for (let i: number = 0; i < arregloNotas.length; i++) {
      suma += arregloNotas[i];
    }
    promedio = suma / arregloNotas.length;
    return promedio;
  };

  desaproboMeses(notasAlumno, meses);
  obtenerMejorNota(notasAlumno, meses);
  obtenerPeorNota(notasAlumno, meses);
  calcularPromedio(notasAlumno);
  //Muestro en consola y en el html los resultados
  console.log(
    "Las notas del alumno durante el año fueron " + notasAlumno + "."
  );
  console.log("El alumno desaprobó en " + mesesDesaprobados + ".");
  console.log(notaBaja);
  console.log(notaAlta);
  console.log("El promedio general es " + promedio);
  resultado1.innerHTML =
    "<p>Las notas del alumno durante el año fueron " +
    notasAlumno +
    ".</p><p>El alumno desaprobó en " +
    mesesDesaprobados +
    ".</p><p>" +
    notaBaja +
    "</p><p>" +
    notaAlta +
    "</p><p>El promedio general es " +
    promedio +
    "</p>";
});

//----------------------------------------------------------------------------------------------------------------------------------------------

/* Ejercicio 2:  
Una materia de la carrera de Ingeniería de Sistemas tiene 30 alumnos, divididos en 3 comisiones.
Estos arreglos contienen las notas finales de los alumnos en cada comisión:  

comisionA = [8, 5, 7, 10, 9, 2, 4, 8, 6, 8]  

comisionB = [3, 6, 8, 5, 4, 7, 7, 4, 6, 8]  

comisionC = [7, 6, 9, 8, 9, 8, 5, 7, 10, 9] 

1. Crear una función que devuelva el mayor promedio y a qué comisión corresponde. 
2. Crear una función que devuelva el menor promedio y a qué comisión corresponde. 
3. Teniendo en cuenta que la materia se aprueba con 6, crear una función que devuelva la cantidad de desaprobados en una comisión,
mostrar el resultado para cada comisión.
4. Crear una función que devuelva la menor nota de una comisión, mostrar el resultado para cada comisión.
*/

//Indico que, al pulsar el boton, muestre los datos correspondientes en consola y en el html
ejercicio2.addEventListener("click", () => {
  //Declaro los arreglos y las variables que voy a usar
  let comisiones: string[] = ["Comisión A", "Comisión B", "comisión C"];
  let comisionA: number[] = [8, 5, 7, 10, 9, 2, 4, 8, 6, 8];
  let comisionB: number[] = [3, 6, 8, 5, 4, 7, 7, 4, 6, 8];
  let comisionC: number[] = [7, 6, 9, 8, 9, 8, 5, 7, 10, 9];
  let mayorPromedio: string = "";
  let menorPromedio: string = "";

  //Función para calcular el promedio
  let calcularPromedio = (arregloNotas: number[]): number => {
    let suma: number = 0;
    let promedio: number = 0;
    for (let i: number = 0; i < arregloNotas.length; i++) {
      suma += arregloNotas[i];
    }
    promedio = suma / arregloNotas.length;
    return promedio;
  };

  //Función para calcular que comisión tiene el mejor promedio
  let calcularMejorPromedioComision = (
    comisionesNombres: string[],
    comision1: number[],
    comision2: number[],
    comision3: number[]
  ): number => {
    let comisionesPromedios: number[] = [
      calcularPromedio(comision1),
      calcularPromedio(comision2),
      calcularPromedio(comision3)
    ];
    let mejorPromedio: number = comisionesPromedios[0];
    let mejorPromedioComision: string = "";
    for (let i: number = 0; i < comisionesPromedios.length; i++) {
      if (comisionesPromedios[i] > mejorPromedio) {
        mejorPromedio = comisionesPromedios[i];
        mejorPromedioComision = comisionesNombres[i];
      }
    }
    mayorPromedio =
      "El mayor promedio es: " +
      mejorPromedio +
      " perteneciente a la " +
      mejorPromedioComision +
      ".";
  };

  //Función para calcular que comisión tiene el peor promedio
  let calcularPeorPromedioComision = (
    comisionesNombres: string[],
    comision1: number[],
    comision2: number[],
    comision3: number[]
  ): number => {
    let comisionesPromedios: number[] = [
      calcularPromedio(comision1),
      calcularPromedio(comision2),
      calcularPromedio(comision3)
    ];
    let peorPromedio: number = comisionesPromedios[0];
    let peorPromedioComision: string = "";
    for (let i: number = 0; i < comisionesPromedios.length; i++) {
      if (comisionesPromedios[i] < peorPromedio) {
        peorPromedio = comisionesPromedios[i];
        peorPromedioComision = comisionesNombres[i];
      }
    }
    menorPromedio =
      "El menor promedio es: " +
      peorPromedio +
      " perteneciente a la " +
      peorPromedioComision +
      ".";
  };

  //Función para saber cuantos alumnos desaprobados hay en la comisión
  let calcularDesaprobados = (comision: number[]): number => {
    let cantidadDesaprobados: number = 0;
    for (let i: number = 0; i < comision.length; i++) {
      if (comision[i] < 6) {
        cantidadDesaprobados++;
      }
    }
    return cantidadDesaprobados;
  };

  //Función para obtener la peor nota de la comisión
  let calcularPeorNota = (comision: number[]): number => {
    let peorNota: number = comision[0];
    for (let i: number = 0; i < comision.length; i++) {
      if (comision[i] < peorNota) {
        peorNota = comision[i];
      }
    }
    return peorNota;
  };

  calcularMejorPromedioComision(comisiones, comisionA, comisionB, comisionC);
  calcularPeorPromedioComision(comisiones, comisionA, comisionB, comisionC);
  //Muestro en consola y en el html los resultados
  console.log(mayorPromedio);
  console.log(menorPromedio);
  console.log(
    "La cantidad de alumnos desaprobados segun la comisión es: " +
      calcularDesaprobados(comisionA) +
      " en la A, " +
      calcularDesaprobados(comisionB) +
      " en la B y " +
      calcularDesaprobados(comisionC) +
      " en la C."
  );
  console.log(
    "La menor nota segun la comisión es: " +
      calcularPeorNota(comisionA) +
      " en la A, " +
      calcularPeorNota(comisionB) +
      " en la B y " +
      calcularPeorNota(comisionC) +
      " en la C."
  );
  resultado2.innerHTML =
    "<p>" +
    mayorPromedio +
    "</p><p>" +
    menorPromedio +
    "</p><p>La cantidad de alumnos desaprobados segun la comisión es: " +
    calcularDesaprobados(comisionA) +
    " en la A, " +
    calcularDesaprobados(comisionB) +
    " en la B y " +
    calcularDesaprobados(comisionC) +
    " en la C.</p><p>La menor nota segun la comisión es: " +
    calcularPeorNota(comisionA) +
    " en la A, " +
    calcularPeorNota(comisionB) +
    " en la B y " +
    calcularPeorNota(comisionC) +
    " en la C.</p>";
});
