"use strict";

// A function is a block of reusable code that performs a specific task.
// Functions typically take an input, and produce an output.

// Functions we have used so far:
// - prompt();
// - alert();
// - Number();
// - parseFloat();
// - parseInt();
// - .toFixed();
// - toUpperCase();

// When executing a function, we call the name of the function, following
// inside of parenthesis known as arguments.

let myName = prompt("What is your name?"); // returns a string

// Function Structure
// function todaysDate (parameter1, parameter2) {
//     // Do something
//     // Return something
// }

function todaysDate(greeting) {
    return greeting + Date();
}

alert("Hello " + myName + ", " +  todaysDate("today's date is: "));

//Create a function which takes in two number parameters to find the hypotenuse angle.
function findHypotenuse(a, b) {
    return Math.hypot(a, b);
}

console.log(findHypotenuse(3, 4));

//Immediately Invoked Function Expression (IIFE)

(function () {
    return alert("IIFE");
})();





