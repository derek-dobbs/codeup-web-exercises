(function () {
    "use strict";
    //Warm up - 13 OCT 21
    console.log("Warmup - 13 OCT 21");
    //Write a function that returns the number 7
    function returnSeven () {
        return 7;
    }
    console.log(returnSeven());

    //Write an if statement with a condition set to the boolean false. Does the condition run?
    if(false) {
        return "The false conditions runs.";
    }

    console.log("----------------------------------------------------------------------------------------------------")
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //Warm-up - 14 OCT 21
    console.log("Warmup - 14 OCT 21");
/*
* Copy and paste the following code:
	var hadBreakfast = Boolean(Math.round(Math.random()));
* Write a ternary expression to set a variable of hadBreakfastMessage to a string expressing whether or not you have had breakfast. You will use the variable hadBreakfast as your condition.

* */
    var hadBreakfast = Boolean(Math.round(Math.random()));
    var hadBreakfastMessage = (hadBreakfast) ? "Yes, I had breakfast." : "No, I did not have breakfast.";
    console.log(hadBreakfastMessage);

    console.log("----------------------------------------------------------------------------------------------------")

    /*
    * Warmup - 15 OCT 21
    *
    *Write a function called ‘typeCheck’ that takes an input and returns a string of the data type entered.
    * If the data type is a string, return the string “Haha, it’s a string of string!”

        Tests:
        typeCheck(‘’)
        typeCheck(isNaN());
        typeCheck(!false * 3);
        typeCheck(4 + ‘4’);

    * */
    function typeCheck (input) {
        if(typeof input === 'string') {
            return "Haha, it's a string of a string! " + input
        }else {
            let message = input.toString();
            return message;
        }
    }

    console.log(typeCheck('Hello'));
    console.log(typeCheck(4));
    console.log("----------------------------------------------------------------------------------------------------")

    //Warmup - October 19, 2021
    /*
    Write a program that console.logs the numbers from 1 to 100. But for multiples of three console.log “Fizz” instead
    of the number and for the multiples of five console.log “Buzz”.
    For numbers which are multiples of both three and five console.log “FizzBuzz”.

     */
    console.log("FizzBuzz Exercise");
    for (let i = 1; i <= 100 ; i++) {
        if(i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        }else if (i % 3 === 0) {
            console.log("Fizz");
        }else if (i % 5 === 0) {
            console.log("Buzz");
        }else {
            console.log(i);
        }
    }
    console.log("----------------------------------------------------------------------------------------------------")
    //Warmup - October 20, 2021
    // Create a function named secondToLast that accepts an array as an argument
    // and will return the second to last element of the array.
    let numArray = [1, 2, 3, 4, 5];
    console.log("Here is the array: " + numArray);
    function secondToLast (array) {
        return array[array.length - 2];
    }

    console.log("The second to last element in the array is: " + secondToLast(numArray));

})();