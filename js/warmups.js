(function () {
    "use strict";
    //Warm up - 13 OCT 21
    // console.log("Warmup - 13 OCT 21");

    //Write a function that returns the number 7
    function returnSeven() {
        return 7;
    }

    // console.log(returnSeven());

    //Write an if statement with a condition set to the boolean false. Does the condition run?
    if (false) {
        return "The false conditions runs.";
    }

    // console.log("----------------------------------------------------------------------------------------------------")
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //Warm-up - 14 OCT 21
    // console.log("Warmup - 14 OCT 21");
    /*
    * Copy and paste the following code:
        var hadBreakfast = Boolean(Math.round(Math.random()));
    * Write a ternary expression to set a variable of hadBreakfastMessage to a string expressing whether or not you have had breakfast. You will use the variable hadBreakfast as your condition.

    * */
    var hadBreakfast = Boolean(Math.round(Math.random()));
    var hadBreakfastMessage = (hadBreakfast) ? "Yes, I had breakfast." : "No, I did not have breakfast.";
    // console.log(hadBreakfastMessage);
    //
    // console.log("----------------------------------------------------------------------------------------------------")

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
    // function typeCheck (input) {
    //     if(typeof input === 'string') {
    //         return "Haha, it's a string of a string! " + input
    //     }else {
    //         let message = input.toString();
    //         return message;
    //     }
    // }

    // console.log(typeCheck('Hello'));
    // console.log(typeCheck(4));
    // console.log("----------------------------------------------------------------------------------------------------")

    //Warmup - October 19, 2021
    /*
    Write a program that console.logs the numbers from 1 to 100. But for multiples of three console.log “Fizz” instead
    of the number and for the multiples of five console.log “Buzz”.
    For numbers which are multiples of both three and five console.log “FizzBuzz”.

     */
    // console.log("FizzBuzz Exercise");
    // for (let i = 1; i <= 100 ; i++) {
    //     if(i % 3 === 0 && i % 5 === 0) {
    //         console.log("FizzBuzz");
    //     }else if (i % 3 === 0) {
    //         console.log("Fizz");
    //     }else if (i % 5 === 0) {
    //         console.log("Buzz");
    //     }else {
    //         console.log(i);
    //     }
    // }
    // console.log("----------------------------------------------------------------------------------------------------")
    //Warmup - October 20, 2021
    // Create a function named secondToLast that accepts an array as an argument
    // and will return the second to last element of the array.
    let numArray = [1, 2, 3, 4, 5];
    // console.log("Here is the array: " + numArray);

    function secondToLast(array) {
        return array[array.length - 2];
    }

    // console.log("The second to last element in the array is: " + secondToLast(numArray));
    // console.log("----------------------------------------------------------------------------------------------------")
    //Warmup - October 21, 2021
    // Write a function named ‘moveToEnd’ that takes in an array, and returns the array with the
    // original first index moved to the last index of the array.
    function moveToEnd(array) {
        //remove the first element from the array with shift() and store it in a variable
        let removedElement = array.shift();
        //add the stored variable to the end of the array with push()
        array.push(removedElement);
        //return the array
        return array;
    }

    // console.log(moveToEnd([1, 2, 3, 4, 5]));
    // console.log("----------------------------------------------------------------------------------------------------")
    //Warmup - October 25, 2021
    // console.log("Morning Warmup - October 25, 2021");
    let pokemon = {
        name: "Charmander",
        description: "It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.",
        height: {
            feet: 2,
            inches: 0
        },
        weight: "18.7 lbs",
        category: "Lizard",
        abilities: "Blaze"

    };
    // console.log(pokemon);
    // console.log("----------------------------------------------------------------------------------------------------");
    //Warmup - October 26, 2021
    // Create a function that accepts an array as an argument, and that returns an array of objects that
    // have a nationality property of “Canadian”. Use the following array:
    var wrestlers = [
        {
            name: "Bret Hart",
            nationality: "Canadian"
        }, {
            name: "Shawn Michaels",
            nationality: "American"
        }, {
            name: "Christian Cage",
            nationality: "Canadian"
        }, {
            name: "Keiji Mutoh",
            nationality: "Japanese"
        }, {
            name: "Eddy Guerrero",
            nationality: "American"
        }, {
            name: "Owen Hart",
            nationality: "Canadian"
        }
    ];
    // //Using a for loop
    // function returnCanadian (array) {
    //     let newArray = [];
    //     for (let i = 0; i < array.length; i++) {
    //         if(array[i].nationality === "Canadian") {
    //             newArray.push(array[i]);
    //         }
    //     }
    //     return newArray;
    // }
    //Using a forEach loop
    // function returnCanadian(array) {
    //     let newArray = [];
    //     array.forEach(function (element) {
    //         if(element.nationality === "Canadian") {
    //             newArray.push(element);
    //         }
    //     }
    //     return newArray;
    // });
    /*
    *
    * */
    // console.log(returnCanadian(wrestlers));
    // console.log("----------------------------------------------------------------------------------------------------");
    //Warmup - October 27, 2021
    // Find the area of the circle, and round it to the nearest whole number using the Math object.
    // console.log("Morning Warmup - Oct 27, 2021")
    var circle = {
        radius: 36
    }

    function areaOfCircle(radius) {
        return Math.round(Math.PI * (radius * radius));
    }

    // console.log(areaOfCircle(circle.radius));
    // console.log("----------------------------------------------------------------------------------------------------");

    //Warmup - November 2, 2021
    // console.log("Morning Warmup: November 2, 2021");

    /*
    Create a function that takes in an array of objects, and returns the object with the highest quantity property.

    var groceries = [
            {
                name: "carrots",
                quantity: 5
            },{
                name: "yams",
                quantity: 50
            },{
                name: "oranges",
                quantity: 9
            },{
                name: "onions",
                quantity: 2
            },{
                name: "cucumbers",
                quantity: 6
            },{
                name: "potatoes",
                quantity: 8
            }
        ];

        Ex. getHighestQuantityObject(groceries)//returns {name: “yams”, quantity: 50};

     */
    var groceries = [
        {
            name: "carrots",
            quantity: 5
        }, {
            name: "yams",
            quantity: 50
        }, {
            name: "oranges",
            quantity: 9
        }, {
            name: "onions",
            quantity: 2
        }, {
            name: "cucumbers",
            quantity: 6
        }, {
            name: "potatoes",
            quantity: 8
        }
    ];


    function getHighestQuantity(array) {
        var newObject = {
            name: "default name",
            quantity: 0
        }
        array.forEach(function (element) {
            if (element.quantity > newObject.quantity) {
                newObject = element;
            }
        });
        return newObject;
    }

    // console.log(getHighestQuantity(groceries));
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Morning Warmup:
        // Write a function named ‘sortByName’ that takes in an array of objects, and returns an array of objects in
    // alphabetical order based on the name property.
        var products = [
        {
            name: 'Playstation 5',
            price: 599.99
        }, {
            name: 'Logitech Wireless Mouse',
            price: 23.99
        }, {
            name: 'Macbook Pro',
            price: 1099.99
        }, {
            name: 'GoPro HERO10',
            price: 399.99
        }, {
            name: '12" & 6" Metal Ruler Set',
            price: 5.99
        }];

        // function sortByName (array) {
        //     // array.forEach(function(element) {
        //     //
        //     // });
        //     let newArray = array.name.sort();
        //
        //     return newArray;
        // }//end function

        function sortByName(array) {
            return array.sort(function (a, b) {
                let aToLower = a.name.toLowerCase();
                let bToLower = b.name.toLowerCase();

                if(aToLower < bToLower) {
                    return -1;
                }else if(aToLower > bToLower) {
                    return 1;
                }else {
                    return 0;
                }
            });
        }

    console.log(sortByName(products));
})();
