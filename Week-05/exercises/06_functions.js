console.log("Exercise 06: Functions.");


//a- Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.

//Exercise 06-a 
console.log("Exercise 06-a:");
function functionAdd (a, b) {
    return a + b;
}
var result = functionAdd ((100*Math.random()) , (100*Math.random))
console.log("Result: " + result);



//b- A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número; de no ser un número, mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.

//Exercise 06-b
console.log("Exercise 06-b:")

function functionAdd2 (c , d) {
    if ((isNaN(c)) || (isNaN(d))) {
        alert("One of the parameters has error.");
        return console.log(NaN);
    } else {
        return console.log("Result: " + (c + d));
    }
};
functionAdd2 ("hello", 10);


//c- Aparte, crear una función validate Integer que reciba un número como parámetro y devuelva verdadero si es un número entero.

//Exercise 06-c
console.log("Exercise 06-c:");

function validateInteger (e) {
    return Number.isInteger(e);
}
var number = 10*Math.random().toFixed(2);
var result = validateInteger (number);
console.log(number + " is integer?: " + result);



//d- A la función suma del ejercicio 6b) agregarle una llamada a la función del ejercicio 6c. y que valide que 
//   los números sean enteros. 
//   En caso que haya decimales mostrar un alerta con el error y retornar el número convertido a entero (redondeado).

//Exercise 06-d
console.log("Exercise: 06-d");

function functionAdd2 (c, d) {
    if ((isNaN(c)) || (isNaN(d)) ) {
        alert("One of the parameters has error.");
        return console.log(NaN);
    } else {
        if (validateInteger(c) == false) {
            alert("Error, it is decimal");
            if(validateInteger(d) == false){
                return console.log("Result: " + (Math.round(c) + Math.round(d)));
            } else {
                return console.log("Result: " + (Math.round(c) + d));
            }
            } else {
            if (validateInteger(d) == false) {
                alert ("Error, it is decimal");
                return console.log("Result: " + (Math.round(d) + c));
                } else {
                    return console.log("Result: " + (c + d));
                }
            }
        }
    }
functionAdd2 (10.5 , 20);
functionAdd2 (10 , 20.5);
functionAdd2 (10.5 , 20.5);
functionAdd2 (10 , 20);


//e- Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la función suma  
//   probando que todo siga funcionando igual.   

//Exercise 06-e
console.log("Exercise: 06-e");

function integerValid (c, d) {
    if (validateInteger (c) == false) {
        alert("Error, it is decimal");
        if ( validateInteger(d) == false ) {
            return console.log("Result: " + (Math.round(c) + Math.round(d)));
        } else {
            return console.log("Result: " + (Math.round(c) + d));
        }
    } else {
        if (validateInteger (d) == false) {
            alert("Error, it is decimal");
            return console.log("Result: " + (Math.round(d) + c));
        } else {
            return console. log('The result is: ' + (c + d));
        }
    }
}

function functionThree (a, b) {
    integerValid (a, b);
}
functionThree (10, 20.5);
functionThree (10.5, 20.5);
functionThree (10.5, 20);
functionThree (10, 20);