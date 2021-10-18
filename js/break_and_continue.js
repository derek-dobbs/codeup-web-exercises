(function () {
    "use strict";

    //Break and Continue Exercise
    console.log("Break and Continue Exercise");
    /*
        Need to add: Use a loop and a break statement to continue prompting the user if they enter invalid input.
     */
    // console.log("Correction Needed \(see above comments\ in source code)");

    let skipNumber = parseInt(prompt("Enter an odd number between 1 and 50."));

    console.log("Number to skip is: " + skipNumber);
    console.log("");
        for (let i = 1; i <= 50 ; i++) {
            if(i == skipNumber) {
                console.log("Yikes! Skipping number " + skipNumber);
                continue;
            }
            if(i % 2 !== 0) {
                console.log("Here is an odd number: " + i);
            }
        }
        console.log("------------------------------------------------------------------------------------------------");

})();