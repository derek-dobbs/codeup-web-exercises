"use strict";
(function (){

    // console.log("Test");

    //Source: codewars.com
    // Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
    // For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
    // Note: The function accepts an integer and returns an integer
    // console.log("Square Every Digit Exercise");
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
    // console.log("Should return 811181: " + squareDigits(9119));
    // console.log("Should return 9416: " + squareDigits(324));
    //
    // //Additional solutions: https://www.codewars.com/kata/546e2562b03326a88e000020/solutions/javascript
    // console.log("----------------------------------------------------------------------------------------------------");

    //Source: codewars.com
    // Implement the function unique_in_order which takes as argument a sequence and returns a list of items without
    // any elements with the same value next to each other and preserving the original order of elements.
    // For example:
    // uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
    // uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
    // uniqueInOrder([1,2,2,3,3])       == [1,2,3]
    // console.log("Unique in Order Exercise");
    function uniqueInOrder (str) {
        if(!Array.isArray(str)) {
            str = str.split('');
        }

        for (let i = 0; i < str.length; i++) {
            if (str[i] === str[i - 1]) {
                str.splice(i, 1);
                i--;
            }
        }
        return str;
    }

    // console.log("Input: AAAABBBCCDAABBB, Expected: ['A', 'B', 'C', 'D', 'A', 'B'], Output: " + uniqueInOrder('AAAABBBCCDAABBB'));
    // console.log("Input: ABBCcAD, Expected: ['A', 'B', 'C', 'c', 'A', 'D'], Output: " + uniqueInOrder('ABBCcAD'));
    // console.log("Input: [1,2,2,3,3], Expected: ['1', '2', '3'], Output: " + uniqueInOrder([1,2,2,3,3]));
    // //additional solutions: https://www.codewars.com/kata/54e6533c92449cc251001667/solutions/javascript
    // console.log("----------------------------------------------------------------------------------------------------");

    //Source: leetcode.com
    // Two Sum
    // Given an array of integers nums and an integer target, return indices of the two numbers such that
    // they add up to target.
    // You may assume that each input would have exactly one solution, and you may not use the same element twice.
    // You can return the answer in any order.
    // Example 1:
    // Input: nums = [2,7,11,15], target = 9
    // Output: [0,1]
    // Output: Because nums[0] + nums[1] == 9, we return [0, 1].
    //
    // Example 2:
    // Input: nums = [3,2,4], target = 6
    // Output: [1,2]
    //
    // Example 3:
    // Input: nums = [3,3], target = 6
    // Output: [0,1]
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // console.log("Two Sum Exercise");
    //
    // function twoSum(array, target) {
    //     for (let i = 0; i < array.length ; i++) {
    //         for (let j = 1; j < array.length; j++) {
    //             if(array[i] + array[i + 1] === target) {
    //                 return [i, (i + 1)];
    //             }
    //             if((array[i] + array[j]) === target) {
    //                 return [i, j];
    //             }
    //         }
    //     }
    // }
    //
    // console.log("Expected output: [0,1], Output: " + twoSum([2,7,11,15], 9));
    // console.log("Expected output: [1,2], Output: " + twoSum([3,2,4], 6));
    // console.log("Expected output: [0,1], Output: " + twoSum([3,3], 6));
    // console.log("Expected output: [0,2], Output: " + twoSum([3, 2, 3], 6));
    // console.log("Expected output: [1,2], Output: " + twoSum([2, 5, 5, 11], 10));
    // console.log("Expected output: [2,3], Output: " + twoSum([1, 3, 4, 2], 6));

    //////////////////////////////////////////////////////////////////////////////////////////////

    console.log("----------------------------------------------------------------------------------------------------");
    /*
    * Problem: Roman to Integer
    * Source: Leetcode, https://leetcode.com/problems/roman-to-integer/
    * Given a roman numeral, convert it to an integer.
    * */
    function romanToInteger(numeral) {
        //create an array to store the new values in
        let calculatedArray = [];

        let subtractOne = 0;
        let subractTwo = 0;
        let addTwo = 0;
        let addThree = 0;

        //turn the passed in value into an array
        let newArray = numeral.split('');
        // console.log(newArray);

        //loop through each element in newArray
        for (let i = 0; i < newArray.length; i++) {
            //assign numeric value to the passed in numeral
            switch (newArray[i]) {
                case "I":
                    newArray[i] = 1;
                    break;
                case "II":
                    newArray[i] = 2;
                    break;
                case "III":
                    newArray[i] = 3;
                    break;
                case "V":
                    newArray[i] = 5;
                    break;
                case "X":
                    newArray[i] = 10;
                    break;
                case "L":
                    newArray[i] = 50;
                    break;
                case "C":
                    newArray[i] = 100;
                    break;
                case "D":
                    newArray[i] = 500;
                    break;
                case "M":
                    newArray[i] = 1000;
                    break;
            }



        }
        for (let i = 0; i < newArray.length ; i++) {
            if(newArray[i] === newArray[i + 1] && newArray[i] === newArray[i + 2]) { //if the current number is equal to the next number in the array and equal to the next number after that
                addThree = newArray[i] + newArray[i + 1] + newArray[i + 2];
                calculatedArray.push(addThree);
            }else if(newArray[i] === newArray[i + 1]) { // if the current number is equal to the number in front of it, add those numbers together
                addTwo = newArray[i] + newArray[i + 1];
                calculatedArray.push(addTwo);
            }else if(newArray[i] < newArray[i + 1]) { // // if the current number is smaller than the one in front of it, subtract the smaller number from the larger number
                subtractOne = newArray[i + 1] - newArray[i];
                //add that number to the end of calculatedArray
                calculatedArray.push(subtractOne);
            }else {
                calculatedArray.push(newArray[i]);
            }
        }
        return calculatedArray;
    }




    console.log("Roman to Integer: ");
    console.log(romanToInteger("I"));
    console.log(romanToInteger("II"));
    console.log(romanToInteger("III"));
    console.log(romanToInteger("IV"));
    console.log(romanToInteger("V"));
    // console.log(romanToInteger("I")); //expected: 1
    // console.log(romanToInteger("V")); //expected: 5
    // console.log(romanToInteger("X")); //expected: 10
    // console.log(romanToInteger("L")); //expected: 50
    // console.log(romanToInteger("C")); //expected: 100
    // console.log(romanToInteger("D")); //expected: 500
    // console.log(romanToInteger("M")); //expected: 1000
    // console.log(romanToInteger("III")); //expected: 3
    // console.log(romanToInteger("IV")); //expected: 4
    // console.log(romanToInteger("IX")); //expected: 9
    // console.log(romanToInteger("LVIII")); //expected: 58
    // console.log(romanToInteger("MCMXCIV")); //expected: 1994


    console.log("----------------------------------------------------------------------------------------------------");
})();