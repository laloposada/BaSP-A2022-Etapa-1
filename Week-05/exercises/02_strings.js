console.log("Exercise 02: Strings.");

//Exercise 02-a
console.log("Exercise 02-a:");
var text = "Hello World!";
var textUp = text.toUpperCase();
console.log(textUp);

//Exercise 02-b
console.log("Exercise 02-b:");
var textOne = "Hello Uruguay!";
var subText = textOne.substring(0, 5);
console.log(subText);

//Exercise 02-c
console.log("Exercise 02-c:");
var textTwo = "Hello Argentina!";
var textSub = textTwo.substring(13);
console.log(textSub);

//Exercise 02-d
console.log("Exercise 02-d:");
var textThree = "we are Radium Rocket!";
var textCapi = textThree.substring(0, 1).toUpperCase() + textThree.substring(1, textThree.length).toLowerCase();
console.log(textCapi);

//Exercise 02-e
console.log("Exercise 02-e:");
var textFour = "My name is Gonzalo.";
var blankSpace = textFour.indexOf(" ", 0);
console.log("First blank space: " + blankSpace);

//Exercise 02-f
console.log("Exercise 02-f:");
var textFive = "bootCamp-2022 by-radium-rocket";
var textCapitalized = textFive.substring(0, 1).toUpperCase() + textFive.substring(1, 13).toLowerCase() + " " + textFive.substring(textFive. indexOf(" ") + 1, textFive.indexOf(" ") + 2).toUpperCase() + textFive.substring(textFive.indexOf(" ") + 2 , textFive.length).toLowerCase();
console.log(textCapitalized);