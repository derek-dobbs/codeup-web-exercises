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

    //Warmup - October 18, 2021

})();