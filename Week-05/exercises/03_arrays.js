console.log("Exercise 03: Arrays.");

//Exercise 03-a
console.log("Exercise 03-a");
var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", 
"Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
console.log("5th month: " + months[4]);
console.log("11th month: " + months[10]); 

//Exercise 03-b
console.log("Exercise 03-b");
months.sort();
console.log("Months in alphabetical order:" + months);

//Exercise 03-c
console.log("Exercise 03-c");
months.unshift("MonthPrevious");
months.push("MonthBack");
console.log("New months: " + months);

//Exercise 03-d
console.log("Exercise 03-d");
months.shift("MonthPrevious");
months.pop("MonthBack");
console.log("Months deleted: " + months);

//Exercise 03-e
console.log("Exercise 03-e");
console.log("Inverted months: " + months.reverse());

//Exercise 03-f
console.log("Exercise 03-f")
var monthsUnited = months.join("-");
console.log("All months united: " + monthsUnited);

//Exercise 03-g
console.log("Exercise 03-g")
var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", 
"Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
var fromMayToNov = months.slice(4, 11);
console.log("From Mat to November: " + fromMayToNov);