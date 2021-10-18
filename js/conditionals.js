(function () {
    "use strict";

    /* ########################################################################## */

    /**
     * TODO:
     * Create a function named `analyzeColor` that accepts a string that is a color
     * name as input. This function should return a message that related to that
     * color. Only worry about the colors defined below, if the color passed is not
     * one of the ones defined below, return a message that says so
     *
     * Example:
     *  > analyzeColor('blue') // returns "blue is the color of the sky"
     *  > analyzeColor('red') // returns "Strawberries are red"
     *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
     *
     * You should use an if-else-if-else block to return different messages.
     *
     * Test your function by passing various string literals to it and
     * console.logging the function's return value
     */

    // function analyzeColor(string) {
    //     string = string.toLowerCase();
    //     if(string === "blue") {
    //         return string + " is the color of the sky.";
    //     }else if(string === "red") {
    //         return "Strawberries are " + string + ".";
    //     }else if(string === "cyan") {
    //         return "I don't know anything about " + string + ".";
    //     }else {
    //         return string + " is not one of the defined colors.";
    //     }
    // }
    //
    // console.log(analyzeColor("blue"));
    // console.log(analyzeColor("red"));
    // console.log(analyzeColor("cyan"));
    // console.log(analyzeColor("green"));

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
    var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    /**
     * TODO:
     * Pass the `randomColor` variable to your function and console.log the results.
     * You should see a different message every time you refresh the page
     */
   console.log(analyzeColor(randomColor));

    /**
     * TODO:
     * Refactor your above function to use a switch-case statement
     */
    function analyzeColor(string) {
        string = string.toLowerCase();
        switch (string) {
            case "blue":
                alert(string + " is the color of the sky.");
                break;
            case "red":
                alert("Strawberries are " + string + ".");
                break;
            case "cyan":
                alert("I don't know anything about " + string + ".");
                break;
            default:
                alert(string + " is not one of the defined colors.");
        }
    }
    // console.log(analyzeColor(randomColor));

    /**
     * TODO:
     * Prompt the user for a color when the page loads, and pass the input from the
     * user to your `analyzeColor` function. Alert the return value from your
     * function to show it to the user.
     */
    let userColor = prompt("Enter the name of a color:");
    analyzeColor(userColor);

    /* ########################################################################## */

    /**
     * TODO:
     * Suppose there's a promotion in Walmart, each customer is given a randomly
     * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
     * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
     * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
     * all for free!.
     *
     * Write a function named `calculateTotal` that accepts a lucky number and total
     * amount, and returns the discounted price.
     *
     * Example:
     * calculateTotal(0, 100) // returns 100
     * calculateTotal(4, 100) // returns 50
     * calculateTotal(5, 100) // returns 0
     *
     * Test your function by passing it various values and checking for the expected
     * return value.
     */
    function calculateTotal(number, total) {
        let discount = 0;

        switch (number) {
            case 0:
                discount = 0;
                break;
            case 1:
                discount = .10;
                break;
            case 2:
                discount = .25;
                break;
            case 3:
                discount = .35;
                break;
            case 4:
                discount = .50;
                break;
            case 5:
                discount = 1;
                break;
        }
        let convertedDiscount = discount * 100;
        let totalAfterDiscount = total - (discount * total);

        if(number === 0) {
            alert("Your number is " + number + ". Sorry, you don't qualify for a discount. Your total is: $" + totalAfterDiscount +  ". Better luck next time!")
        }else if (number === 5) {
            alert("Congratulations, you qualify for a " + convertedDiscount + "% discount! Your total after discount is $" + totalAfterDiscount + "!");
        }else{
            alert("Your lucky number is: " + number + ". You qualify for a " + convertedDiscount + "% discount!");
            alert("The price before the discount is: $" + total + ". Your total price after the discount is: $" + totalAfterDiscount + ".");
        }
    }

    // calculateTotal(0, 100);
    // calculateTotal(1, 100);
    // calculateTotal(2, 100);
    // calculateTotal(3, 100);
    // calculateTotal(4, 100);
    // calculateTotal(5, 100);

    /**
     * TODO:
     * Uncomment the line below to generate a random number between 0 and 6.
     * Prompt the user for their total bill, then use your `calculateTotal` function
     * and alerts to display to the user what their lucky number was, what their
     * price before the discount was, and what their price after the discount is.
     */
// Generate a random number between 0 and 6
 var luckyNumber = Math.floor(Math.random() * 6); // the six is not inclusive, it will generate five numbers
    let priceBeforeDiscount = parseFloat(prompt("What is your bill total?")).toFixed(2);
    calculateTotal(luckyNumber, priceBeforeDiscount);

    /**
     * TODO:
     * Write some JavaScript that uses a `confirm` dialog to ask the user if they
     * would like to enter a number. If they click 'Ok', prompt the user for a
     * number, then use 3 separate alerts to tell the user:
     *
     * - whether the number is even or odd
     * - what the number plus 100 is
     * - if the number is negative or positive
     *
     * if what the user enters is not a number, use an alert to tell them that, and
     * do *not* display any of the above information.
     *
     * Can you refactor your code to use functions?
     * HINT: The way we prompt for a value could be improved
     */

    function isEvenOrOdd (number) {
        if (number % 2 === 0) {
            return "The number " + number + " is even."
        }else {
            return "The number " + number + " is odd."
        }
    }
   // alert(isEvenOrOdd(7));

    function plusOneHundred (number) {
        let sum = number + 100;
        return number + " + 100 is: " + sum + ".";
    }
    //alert(plusOneHundred(5));

    function isPositiveOrNegative (number) {
        if (number > 0) {
            return "The number " + number + " is positive.";
        }else if (number < 0) {
            return "The number " + number + " is negative.";
        }else if (number === 0){
            return "The number " + number + " is neither positive nor negative.";
        }else {
            return number + " is not a number.";
        }
    }

    // console.log(isPositiveOrNegative(1));
    // console.log(isPositiveOrNegative(-1));
    // console.log(isPositiveOrNegative(0));
    // console.log(isPositiveOrNegative("a"));

   // alert(isPositiveOrNegative(-1));

    (function() {
        userConfirm();

        function userConfirm () {
            let confirmStart = confirm("Would you like to enter a number? Press 'OK' for yes.");
            if(confirmStart) {
                return numberInfo();
            }
        }

        function numberInfo () {
            let number = parseInt(prompt("Please enter a number:"));
            if(number) {
                alert(isEvenOrOdd(number));
                alert(plusOneHundred(number));
                alert(isPositiveOrNegative(number));
                let runAnotherNumber = confirm("Would you like to enter another number?");
                if(runAnotherNumber){
                    numberInfo();
                }else {
                    alert("Exiting...");
                }
            }else {
                alert("You did not enter a number. Please try again");
                numberInfo();
            }
        }

        //Need to fix: when selecting CANCEL at the number prompt ("Please enter a number"),
        //it goes to the else statement and calls it again. I need a way to exit if I choose cancel.
        //Presently, I believe that since is being parseInt-ed, it treats CANCEL as NaN.

        //function numberInfo () {
            //     let number = prompt("Please enter a number:");
            //     if (typeof number === 'number') {
            //         if(number) {
            //             let parsedNumber = Number(number);
            //             alert(isEvenOrOdd(parsedNumber));
            //             alert(plusOneHundred(parsedNumber));
            //             alert(isPositiveOrNegative(parsedNumber));
            //             let runAnotherNumber = confirm("Would you like to enter another number?");
            //             if(runAnotherNumber){
            //                 numberInfo();
            //             }else {
            //                 alert("Exiting...");
            //             }
            //         }
            //     }else {
            //         alert("You did not enter a number. Please try again");
            //         numberInfo();
            //     }
            // }
            // //The above code does not run properly
    })();

})();
