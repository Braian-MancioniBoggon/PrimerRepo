//Declaro los arreglos y las variables que voy a usar
let vendedores: string[] = ["Camila", "Franco", "Sofía", "Matías", "Agustina"];
let mes: string[] = ["Enero", "Febrero", "Marzo"];
let semana: number[] = [1, 2, 3, 4];
let vendedor1: number[] = [
  32558,
  36165,
  34240,
  39273,
  34360,
  21347,
  20869,
  21493,
  23062,
  31908,
  30369,
  30652
];
let vendedor2: number[] = [
  27520,
  31480,
  24053,
  34823,
  32942,
  38477,
  23756,
  21413,
  26699,
  22045,
  25625,
  26855
];
let vendedor3: number[] = [
  20584,
  33473,
  34300,
  24598,
  33955,
  24040,
  39173,
  25542,
  25105,
  26759,
  29790,
  36218
];
let vendedor4: number[] = [
  27243,
  38774,
  21246,
  30691,
  24542,
  39771,
  31807,
  31641,
  20850,
  29837,
  37182,
  28006
];
let vendedor5: number[] = [
  23334,
  32687,
  25217,
  26844,
  27033,
  35244,
  25702,
  25781,
  35525,
  34874,
  38842,
  20562
];

//
//----EJERCICIO 1.1 - Para cada vendedor mostrar su nombre y su venta máxima indicando semana y mes de la misma.----------------------------------------------------------------
//

//Función para clacular tanto la venta máxima como la semana y el mes en el que se realizó
let calcularVentaMaxima = (
  vendedor: string[],
  posicionNombre: number,
  ventas: number[],
  arregloMeses: string[],
  arregloSemanas: number[]
): number => {
  let indicadorFecha: number = 0;
  let ventaMaxima: number = 0;
  let mesVentaMaxima: number = ventas[0];
  let semanaVentaMaxima: number = 0;

  //Recorro el arreglo para encontrar cual fué la venta máxima
  for (let i: number = 0; i < ventas.length; i++) {
    if (ventaMaxima < ventas[i]) {
      ventaMaxima = ventas[i];
      //Guardo la posición de "i" en "indicadorFecha" para poder calcular a que mes y a que semana corresponde la venta máxima
      indicadorFecha = i;
    }
  }

  //Una vez obtenida la venta máxima se calcula el mes y la semana con el valor guardado en "indicadorFecha"
  if (indicadorFecha < 4) {
    mesVentaMaxima = 0;
    semanaVentaMaxima = indicadorFecha;
  } else if (indicadorFecha >= 4 && indicadorFecha < 8) {
    mesVentaMaxima = 1;
    semanaVentaMaxima = indicadorFecha - 4;
  } else if (indicadorFecha >= 8) {
    mesVentaMaxima = 2;
    semanaVentaMaxima = indicadorFecha - 8;
  }
  console.log(
    "La mejor semada de " +
      vendedor[posicionNombre] +
      " fué la N°" +
      arregloSemanas[semanaVentaMaxima] +
      " del mes de " +
      arregloMeses[mesVentaMaxima] +
      " con un valor de $" +
      ventaMaxima
  );
};

console.log("EJERCICIO 1.1 Venta máxima -------------------------------");
calcularVentaMaxima(vendedores, 0, vendedor1, mes, semana);
calcularVentaMaxima(vendedores, 1, vendedor2, mes, semana);
calcularVentaMaxima(vendedores, 2, vendedor3, mes, semana);
calcularVentaMaxima(vendedores, 3, vendedor4, mes, semana);
calcularVentaMaxima(vendedores, 4, vendedor5, mes, semana);

//
//----EJERCICIO 1.2 - Para cada vendedor mostrar su nombre y su venta mínima indicando semana y mes de la misma.----------------------------------------------------------------
//

//Función para clacular tanto la venta mínima como la semana y el mes en el que se realizó
let calcularVentaMinima = (
  vendedor: string[],
  posicionNombre: number,
  ventas: number[],
  arregloMeses: string[],
  arregloSemanas: number[]
): number => {
  let indicadorFecha: number = 0;
  let ventaMinima: number = ventas[0];
  let mesVentaMinima: number = ventas[0];
  let semanaVentaMinima: number = 0;

  //Recorro el arreglo para encontrar cual fué la venta mínima
  for (let i: number = 0; i < ventas.length; i++) {
    if (ventas[i] < ventaMinima) {
      ventaMinima = ventas[i];
      //Guardo la posición de "i" en "indicadorFecha" para poder calcular a que mes y a que semana corresponde la venta mínima
      indicadorFecha = i;
    }
  }

  //Una vez obtenida la venta mínima se calcula el mes y la semana con el valor guardado en "indicadorFecha"
  if (indicadorFecha < 4) {
    mesVentaMinima = 0;
    semanaVentaMinima = indicadorFecha;
  } else if (indicadorFecha >= 4 && indicadorFecha < 8) {
    mesVentaMinima = 1;
    semanaVentaMinima = indicadorFecha - 4;
  } else if (indicadorFecha >= 8) {
    mesVentaMinima = 2;
    semanaVentaMinima = indicadorFecha - 8;
  }
  console.log(
    "La peor semada de " +
      vendedor[posicionNombre] +
      " fué la N°" +
      arregloSemanas[semanaVentaMinima] +
      " del mes de " +
      arregloMeses[mesVentaMinima] +
      " con un valor de $" +
      ventaMinima
  );
};

console.log("EJERCICIO 1.2 Venta mínima -------------------------------");
calcularVentaMinima(vendedores, 0, vendedor1, mes, semana);
calcularVentaMinima(vendedores, 1, vendedor2, mes, semana);
calcularVentaMinima(vendedores, 2, vendedor3, mes, semana);
calcularVentaMinima(vendedores, 3, vendedor4, mes, semana);
calcularVentaMinima(vendedores, 4, vendedor5, mes, semana);

//
//----EJERCICIO 1.3 - Para cada vendedor mostrar su nombre y su promedio trimestral de ventas.----------------------------------------------------------------
//

//Función para clacular el promedio trimestral
let calcularPromedioTrimestral = (
  vendedor: string[],
  posicionNombre: number,
  ventas: number[]
): number => {
  let promedio: number = 0;

  //Recorro el arreglo de ventas sumando sus valores
  for (let i: number = 0; i < ventas.length; i++) {
    promedio += ventas[i];
  }
  console.log(
    "El promedio trimestral de ventas de " +
      vendedor[posicionNombre] +
      " es de $" +
      promedio
  );
};

console.log(
  "EJERCICIO 1.3 Promedio trimestral -------------------------------"
);
calcularPromedioTrimestral(vendedores, 0, vendedor1);
calcularPromedioTrimestral(vendedores, 1, vendedor2);
calcularPromedioTrimestral(vendedores, 2, vendedor3);
calcularPromedioTrimestral(vendedores, 3, vendedor4);
calcularPromedioTrimestral(vendedores, 4, vendedor5);

//
//----EJERCICIO 1.4 - Para cada vendedor mostrar su nombre y su promedio mensual de ventas.----------------------------------------------------------------
//

//Función para clacular el promedio mensual
let calcularPromedioMensual = (
  vendedor: string[],
  posicionNombre: number,
  ventas: number[]
): number => {
  let promedio: number = 0;

  //Recorro el arreglo de ventas sumando sus valores
  for (let i: number = 0; i < ventas.length; i++) {
    promedio += ventas[i];
  }
  //Divido el total por la cantidad posiciones que hay en el arreglo de ventas para sacar el promedio
  promedio = promedio / 3;
  console.log(
    "El promedio mensual de ventas de " +
      vendedor[posicionNombre] +
      " es de $" +
      promedio
  );
};

console.log("EJERCICIO 1.4 Promedio mensual -------------------------------");
calcularPromedioMensual(vendedores, 0, vendedor1);
calcularPromedioMensual(vendedores, 1, vendedor2);
calcularPromedioMensual(vendedores, 2, vendedor3);
calcularPromedioMensual(vendedores, 3, vendedor4);
calcularPromedioMensual(vendedores, 4, vendedor5);

//
//----EJERCICIO 1.5 - Entre todos los vendedores calcular nombre y monto vendido del mejor vendedor de cada semana----------------------------------------------------------------
//

//Función para encontar al mejor vendedor en cada semana
let encontrarMejorVendedorSemanal = (
  vendedor: string[],
  posicionNombre: number,
  ventas: number[]
): number => {
  let promedio: number = 0;

  //Recorro el arreglo de ventas sumando sus valores
  for (let i: number = 0; i < ventas.length; i++) {
    promedio += ventas[i];
  }
  console.log(
    "El promedio trimestral de ventas de " +
      vendedor[posicionNombre] +
      " es de $" +
      promedio
  );
};

console.log(
  "EJERCICIO 1.5 Mejor vendedor semanal -------------------------------"
);
