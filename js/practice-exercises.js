"use strict";
(function (){

    // console.log("Test");

    //Source: codewars.com
    // Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
    // For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
    // Note: The function accepts an integer and returns an integer
    console.log("Square Every Digit Exercise");
    function squareDigits (integer) {
        integer = integer.toString();
        let splitArray = integer.split('');
        for(let i = 0; i < splitArray.length; i++) {
            console.log(splitArray[i]);
        }
    }
    squareDigits(12345);
    // console.log("Should return 9119: " + squareDigits(811181));
    // console.log("Should return 9416: " + squareDigits(324));


    console.log("----------------------------------------------------------------------------------------------------");

})();