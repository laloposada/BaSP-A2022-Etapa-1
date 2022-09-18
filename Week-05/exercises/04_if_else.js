console.log("Exercise 04: If Else.");

//Exercise 04-a
console.log("Exercise 04-a");
var number = Math.random();
console.log("Random number: " + number);

if (number >= 0.5) {
    alert("Greater than 0,5");
} else {
    alert ("Lower than 0,5");
}

//Exercise 04-b
console.log("Exercise 04-b");
var age = Math.round(100*Math.random());
console.log("Random age: " + age);

if (age < 2) {
    alert ("Baby");
} else {
    if (age >= 2, age < 12) {
        alert("Child");
    } else {
        if (age >= 12 , age < 19) {
            alert ("Teenager");
        } else {
            if (age >= 19, age < 30) {
                alert ("Young");
            } else {
                if (age >= 30, age < 60) {
                    alert("Adult");
                } else {
                    if (age >= 60, age < 75) {
                        alert ("Older adult");
                    } else {
                        alert ("Elder")
                    }
                }
            }
        }
    }
}