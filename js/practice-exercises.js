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
    console.log("Unique in Order Exercise");
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

    console.log("Input: AAAABBBCCDAABBB, Expected: ['A', 'B', 'C', 'D', 'A', 'B'], Output: " + uniqueInOrder('AAAABBBCCDAABBB'));
    console.log("Input: ABBCcAD, Expected: ['A', 'B', 'C', 'c', 'A', 'D'], Output: " + uniqueInOrder('ABBCcAD'));
    console.log("Input: [1,2,2,3,3], Expected: ['1', '2', '3'], Output: " + uniqueInOrder([1,2,2,3,3]));
    //additional solutions: https://www.codewars.com/kata/54e6533c92449cc251001667/solutions/javascript
    console.log("----------------------------------------------------------------------------------------------------");

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
    console.log("Two Sum Exercise");
    function twoSum(array, target) {
        //create a for loop that iterates through array
        for (let i = 0; i < array.length; i++) {
            //if the element added to the element after it equals target,
            if(array[i] + array[i + 1] === target) {
                //return the indexes of the two numbers in an array
                return [i, (i + 1)];
            }
        }
    }
    //create a nested for loop that compares i in the first loop with j in the second loop
    //if array[i] === array[j]
    //return [i, j]
    //I may be able to refactor my code to instead use this through all of the array instead of the first if statement

    console.log("Expected output: [0,1], Output: " + twoSum([2,7,11,15], 9));
    console.log("Expected output: [1,2], Output: " + twoSum([3,2,4], 6));
    console.log("Expected output: [0,1], Output: " + twoSum([3,3], 6));
    console.log("Expected output: [0,2], Output: " + twoSum([3, 2, 3], 6));//Not getting expected output, previous three tests passed
    console.log("----------------------------------------------------------------------------------------------------");

})();