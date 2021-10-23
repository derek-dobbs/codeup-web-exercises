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
            splitArray[i] = (splitArray[i] * splitArray[i]);
        }
        splitArray = splitArray.join('');
        splitArray = parseInt(splitArray);
        return splitArray;
    }
    //squareDigits(12345);
    console.log("Should return 811181: " + squareDigits(9119));
    console.log("Should return 9416: " + squareDigits(324));

    //Additional solutions: https://www.codewars.com/kata/546e2562b03326a88e000020/solutions/javascript
    console.log("----------------------------------------------------------------------------------------------------");

    //Source: codewars.com
    // Implement the function unique_in_order which takes as argument a sequence and returns a list of items without
    // any elements with the same value next to each other and preserving the original order of elements.
    // For example:
    // uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
    // uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
    // uniqueInOrder([1,2,2,3,3])       == [1,2,3]
    var uniqueInOrder = iterable => {
        //your code here - remember iterable can be a string or an array
    }


})();