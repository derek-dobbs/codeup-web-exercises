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

    // console.log("----------------------------------------------------------------------------------------------------");
    /*
    * Problem: Roman to Integer
    * Source: Leetcode, https://leetcode.com/problems/roman-to-integer/
    * Given a roman numeral, convert it to an integer.
    * */
    function romanToInteger(numeral) {
        //create an array to store the new values in
        let calculatedArray = [];
        let newCalulatedArray = [];

        let subtractOne = 0;
        let subractTwo = 0;
        let addTwo = 0;
        let addThree = 0;
        let summedElement = 0;

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
                // case "II":
                //     newArray[i] = 2;
                //     break;
                // case "III":
                //     newArray[i] = 3;
                //     break;
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
                break;
            }else if(newArray[i] < newArray[i + 1]) { //if the current number is smaller than the one in front of it,
                subtractOne = newArray[i + 1] - newArray[i]; //subtract the smaller number from the larger number
                //add that number to the end of calculatedArray
                calculatedArray.push(subtractOne);
                break;
            }else if(newArray[i] === newArray[i + 1]) { // if the current number is equal to the number in front of it,
                addTwo = newArray[i] + newArray[i + 1]; //add those numbers together
                calculatedArray.push(addTwo);
                break;
            }else {
                calculatedArray.push(newArray[i]);
            }
        }

        if(calculatedArray.length !== 1) {
            for (let i = 0; i < calculatedArray.length ; i++) {
                summedElement = calculatedArray[i] + calculatedArray[i + 1];
                newCalulatedArray.push(summedElement);
            }
            return newCalulatedArray.join(',');
        }else {
            return calculatedArray.join(',');
        }


        // // let joinedArray = calculatedArray.join(',');
        // let joinedArray = newCalulatedArray.join(',');
        // return joinedArray;
    }

    // console.log("Roman to Integer: ");

    // console.log(romanToInteger("I"));
    // console.log(romanToInteger("II"));
    // console.log(romanToInteger("III"));
    // console.log(romanToInteger("IV"));
    // console.log(romanToInteger("V"));

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


    // console.log("----------------------------------------------------------------------------------------------------");
    /*
    * source: edabit, https://edabit.com/challenge/bL7hSc6Zh4zZJzGmw
    * Convert Age to Days
    * Create a function that takes the age in years and returns the age in days.

    Examples
    calcAge(65) ➞ 23725

    calcAge(0) ➞ 0

    calcAge(20) ➞ 7300
    *
    Notes
    Use 365 days as the length of a year for this challenge.
    Ignore leap years and days between last birthday and now.
    Expect only positive integer inputs.
    * */
    // console.log("Convert Age to Days Exercise");

    function calcAge (age) {
        return age * 365;
    }

    // console.log(calcAge(65));
    // console.log(calcAge(0));
    // console.log(calcAge(20));

    // console.log("----------------------------------------------------------------------------------------------------");
    //source: edabit, https://edabit.com/challenge/3CaszbdZYGN4otQD8
    /*Area of a Triangle
    *
    *Write a function that takes the base and height of a triangle and return its area.

    Examples
    triArea(3, 2) ➞ 3

    triArea(7, 4) ➞ 14

    triArea(10, 10) ➞ 50
    Notes
    The area of a triangle is: (base * height) / 2
    Don't forget to return the result.
    If you get stuck on a challenge, find help in the Resources tab.
    If you're really stuck, unlock solutions in the Solutions tab.
    *
    * */
    function triArea(base, height) {
        return (base * height) / 2;
    }
    // console.log("TriArea Exercise:")
    // console.log(triArea(3, 2));
    // console.log(triArea(7, 4));
    // console.log(triArea(10, 10));
    // console.log("----------------------------------------------------------------------------------------------------");
    //source: edabit, https://edabit.com/challenge/Q3n42rEWanZSTmsJm
    /*
    * Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

    Examples
    minMax([1, 2, 3, 4, 5]) ➞ [1, 5]

    minMax([2334454, 5]) ➞ [5, 2334454]

    minMax([1]) ➞ [1, 1]
    Notes
    All test arrays will have at least one element and are valid.
    *
    * */
    function minMax (array) {
        return [Math.min(...array), Math.max(...array)];
    }

    // console.log(minMax([1, 2, 3, 4, 5]));
    // console.log(minMax([2334454, 5]));
    // console.log(minMax([1]));
    //All tests passed! - October 30, 2021

    ///////////////////////////////////////////////////////////////////
    // source: edabit, https://edabit.com/challenge/eYBNcjib3xHHrktZm
    // Fibonacci Sequence
    /*The Fibonacci Sequence is the sequence of numbers (Fibonacci Numbers) whose sum is the
    two preceding numbers (e.g. 0, 1, 1, 2, 3, etc). Using 0 and 1 as the starting values, create a function that
    returns an array containing all of the Fibonacci numbers less than 255.

    Examples
    On generating a Fibonacci number where input is the two preceding values starting from 0 and 1 [0, 1, ...].
    fibonacciSequence(0, 1) ➞ 1
    fibonacciSequence(1, 1) ➞ 2
    fibonacciSequence(1, 2) ➞ 3
    * */
    function fibonacciSequence() {
        let startingArray = [0, 1];
        for (let i = 1; i < 255; i++) {
            startingArray.push(startingArray[i - 1] + startingArray[i]);
        }
        return startingArray;
    }
    // Code is correctly creating the sequence but needs to stop before the current value reaches 255


    // function fibonacciSequence() {
    //     let startingArray = [0, 1];
    //     let x = 0;
    //     for (let i = 1; i < 100; i++) {
    //
    //         x = Number(startingArray[i + 1]);
    //         if (x > 254) {
    //             break;
    //         }else {
    //             startingArray.push(startingArray[i - 1] + startingArray[i]);
    //         }
    //         // if(parseInt(startingArray[i]) > 255){
    //         //     break;
    //         // }
    //     }
    //     // return startingArray;
    // }
    //The above code doesn't work

    // console.log(fibonacciSequence());
    // console.log("----------------------------------------------------------------------------------------------------");
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //source: leetcode.com : https://leetcode.com/problems/defanging-an-ip-address/
    /*
        108. Defanging an IP Address
        Given a valid (IPv4) IP address, return a defanged version of that IP address.
        A defanged IP address replaces every period "." with "[.]".

        Example 1:

        Input: address = "1.1.1.1"
        Output: "1[.]1[.]1[.]1"
        Example 2:

        Input: address = "255.100.50.0"
        Output: "255[.]100[.]50[.]0"

        Constraints:
        The given address is a valid IPv4 address.
     */
    function defangIPaddr (address) {
        return  address.split('.').join('[.]');
    }

    // console.log(defangIPaddr("1.1.1.1"));
    // console.log(defangIPaddr("255.100.50.0"));
    //all tests passed in leetcode
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //source: edabit: https://edabit.com/challenge/WrXmsGDGxqkjNCZtw
    /*
        Capitalize the Last Letter
        Create a function that capitalizes the last letter of every word.

        Examples
        capLast("hello") ➞ "hellO"
        capLast("My Name Is Edabit") ➞ "MY NamE IS EdabiT"
        capLast("HELp THe LASt LETTERs CAPITALISe") ➞ "HELP THE LAST LETTERS CAPITALISE"

        Notes
        There won't be any cases of punctuation in the tests.
     */
    function capLast(string) {
        string = string.split(" ");
        for (let i = 0; i < string.length; i++) {
            let x = string[i].charAt(string[i].length - 1).toUpperCase();
            string [i] = string[i].replace(string[i].charAt(string[i].length - 1), x);
        }
        string = string.join(" ");
        return string;
    }

    // console.log(capLast("hello"));
    // console.log(capLast("My Name Is Edabit"));
    // console.log(capLast("HELp THe LASt LETTERs CAPITALISe"));
    // console.log(capLast("hellooooo")); //This test failed, returned hellOoooo instead of hellooooO
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //November 11, 2021

    // Amazon: Write a program that iterates through a users shopping cart that returns the sum of all items including tax and shipping (if applicable).
    // Use the shipping variable to add shipping costs, then the tax variable to add tax to the total price.
    // If the user is a premium member, they do not need to pay the shipping fee.
    var userCart = {
        user: 'shopaholic2021',
        isPremium: confirm("Are you a premium member?"),
        items: [
            {
                name: 'Carhartt Men\'s Knit Cuffed Beanie\n',
                price: 16.49
            },
            {
                name: 'Dodgeball Average Joe\'s Adult Yellow Jersey Costume Set',
                price: 4.99
            },
            {
                name: 'Champion Sports Rhino Skin Basic Dodgeball Set With Mesh Storage Bag',
                price: 47.38
            },
            {
                name: 'UNICLI Sports Soccer Cones Training Equipment - Agility Cones with Stylish Mesh Bag and Holder for Sports - Set of 50 Field Cone Markers',
                price: 19.99
            },
        ]
    }

    function shoppingCart() {
        var tax = 0.0825;
        var shipping = 5.99;

    }

    console.log(shoppingCart());

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
     //November 11, 2021
    // Realtor.com: You are shopping for a new home and have specific requirements to fulfill before purchasing.
    // Write a program that will filter through an array of house objects, and return an array of house objects
    // that meet the requirements. Use the array below to test your output.
    // Requirements:
    // - sqft > 5000
    // - At least 3 bedrooms
    // - At least 2 bathrooms
    // - In San Antonio, TX

    var housesForSale = [
        {
            address: {
                street: '8164 Falcon Mdw',
                city: 'San Antonio',
                state: 'TX',
                zipcode: 78244
            },
            numOfBathrooms: 2.5,
            numOfBedrooms: 5,
            sqft: 2539,
            price: 318000,

        },
        {
            address: {
                street: '626 S Polaris St',
                city: 'San Antonio',
                state: 'TX',
                zipcode: 78203
            },
            numOfBathrooms: 1,
            numOfBedrooms: 3,
            sqft: 5793,
            price: 120,

        },
        {
            address: {
                street: '1819 W Woodlawn Ave',
                city: 'San Antonio',
                state: 'TX',
                zipcode: 78201,
            },
            numOfBathrooms: 3,
            numOfBedrooms: 3,
            sqft: 7841,
            price: 325000,

        },
        {
            address: {
                street: '1702 Parnell Ave',
                city: 'San Antonio',
                state: 'TX',
                zipcode: 78224
            },
            numOfBathrooms: 1,
            numOfBedrooms: 3,
            sqft: 1476,
            price: 155000,

        },
        {
            address: {
                street: '9286 Weichold',
                city: 'Converse',
                state: 'TX',
                zipcode: 78109
            },
            numOfBathrooms: 2,
            numOfBedrooms: 4,
            sqft: 9148,
            price: 198900,

        },
        {
            address: {
                street: '143 Roslyn Ave',
                city: 'San Antonio',
                state: 'TX',
                zipcode: 78204
            },
            numOfBathrooms: 2.5,
            numOfBedrooms: 4,
            sqft: 6534,
            price: 140000,

        },
        {
            address: {
                street: '2019 Emerald Edge',
                city: 'San Antonio',
                state: 'TX',
                zipcode: 78245
            },
            numOfBathrooms: 2,
            numOfBedrooms: 4,
            sqft: 5227,
            price: 250000,

        },
        {
            address: {
                street: '6015 Ridge Field St',
                city: 'San Antonio',
                state: 'TX',
                zipcode: 78250
            },
            numOfBathrooms: 2,
            numOfBedrooms: 4,
            sqft: 6098,
            price: 240000,

        },
        {
            address: {
                street: '7922 Forest Flame',
                city: 'San Antonio',
                state: 'TX',
                zipcode: 78239
            },
            numOfBathrooms: 2,
            numOfBedrooms: 4,
            sqft: 8712,
            price: 240000,

        },
        {
            address: {
                street: '6015 Ridge Field St',
                city: 'San Antonio',
                state: 'TX',
                zipcode: 78250
            },
            numOfBathrooms: 2,
            numOfBedrooms: 4,
            sqft: 6098,
            price: 240000,

        },
        {
            address: {
                street: '4634 Kay Ann Dr',
                city: 'San Antonio',
                state: 'TX',
                zipcode: 78220
            },
            numOfBathrooms: 3,
            numOfBedrooms: 4,
            sqft: 6098,
            price: 240000,

        }

    ]

    function houseFilter (array) {
        let newArray = []

        for (let i = 0; i < array.length; i++) {
            newArray.push(array[i]);
        }

        return newArray;
    }
    // Requirements:
    // - sqft > 5000
    // - At least 3 bedrooms
    // - At least 2 bathrooms
    // - In San Antonio, TX

    // console.log(houseFilter(housesForSale));

    console.log(houseFilter(housesForSale));

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////

})();