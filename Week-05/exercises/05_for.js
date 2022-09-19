console.log("Exercise 05: For.");

//Exercise 05-a
console.log("Exercise 05-a");
var array = ["Become", "a", "software", "professional", "radium"];
for (var i = 0 ; i < array.length ; i++) {
    alert(array[i]);
};

//Exercise 05-b
console.log("Exercise 05-b");
for (var i = 0 ; i < array.length ; i++) {
    array[i] = array[i].substring(0, 1).toUpperCase() + array[i].substring(1, (array[i].length)).toLowerCase();
    alert(array[i]);
};

//Exercise 05-c
console.log("Exercise 05-c");
var sentence = " ";
for (var i = 0 ; i < array.length ; i++) {
    sentence = sentence + array[i] + ' ';
    alert(sentence);    
}

//Exercise 05-d
console.log("Exercise 05-d");
var arrayEmpty = [];
for (var i = 0; i < 10; i++) {
    arrayEmpty.push(i);
}
console.log("Final array: " + arrayEmpty);