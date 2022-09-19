console.log("Exercise 03: Arrays.");

//a- Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre",
//   "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log).

//Exercise 03-a
console.log("Exercise 03-a");
var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", 
"Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
console.log("5th month: " + months[4]);
console.log("11th month: " + months[10]); 

//b- Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).

//Exercise 03-b
console.log("Exercise 03-b");
months.sort();
console.log("Months in alphabetical order:" + months);

//c- Agregar un elemento al principio y al final del array (utilizar unshift y push).

//Exercise 03-c
console.log("Exercise 03-c");
months.unshift("MonthPrevious");
months.push("MonthBack");
console.log("New months: " + months);

//d- Quitar un elemento del principio y del final del array (utilizar shift y pop).

//Exercise 03-d
console.log("Exercise 03-d");
months.shift("MonthPrevious");
months.pop("MonthBack");
console.log("Months deleted: " + months);

//e- Invertir el orden del array (utilizar reverse).

//Exercise 03-e
console.log("Exercise 03-e");
console.log("Inverted months: " + months.reverse());

//f- Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).

//Exercise 03-f
console.log("Exercise 03-f")
var monthsUnited = months.join("-");
console.log("All months united: " + monthsUnited);

//g-Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).

//Exercise 03-g
console.log("Exercise 03-g")
var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", 
"Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
var fromMayToNov = months.slice(4, 11);
console.log("From Mat to November: " + fromMayToNov);