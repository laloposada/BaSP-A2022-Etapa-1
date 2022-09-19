console.log("Exercise 02: Strings.");

//a- Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).

//Exercise 02-a
console.log("Exercise 02-a:");
var text = "Hello World!";
var textUp = text.toUpperCase();
console.log(textUp);

//b- Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).

//Exercise 02-b
console.log("Exercise 02-b:");
var textOne = "Hello Uruguay!";
var subText = textOne.substring(0, 5);
console.log(subText);

//c- Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).

//Exercise 02-c
console.log("Exercise 02-c:");
var textTwo = "Hello Argentina!";
var textSub = textTwo.substring(13);
console.log(textSub);

//d- Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).

//Exercise 02-d
console.log("Exercise 02-d:");
var textThree = "we are Radium Rocket!";
var textCapi = textThree.substring(0, 1).toUpperCase() + textThree.substring(1, textThree.length).toLowerCase();
console.log(textCapi);

//e- Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).

//Exercise 02-e
console.log("Exercise 02-e:");
var textFour = "My name is Gonzalo.";
var blankSpace = textFour.indexOf(" ", 0);
console.log("First blank space: " + blankSpace);

//f- Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).

//Exercise 02-f
console.log("Exercise 02-f:");
var textFive = "bootCamp-2022 by-radium-rocket";
var textCapitalized = textFive.substring(0, 1).toUpperCase() + textFive.substring(1, 13).toLowerCase() + " " + textFive.substring(textFive. indexOf(" ") + 1, textFive.indexOf(" ") + 2).toUpperCase() + textFive.substring(textFive.indexOf(" ") + 2 , textFive.length).toLowerCase();
console.log(textCapitalized);