(function () {
    "use strict";

    //Break and Continue Exercise
    console.log("Break and Continue Exercise");

    let skipNumber;
    do {
        skipNumber = parseInt(prompt("Enter an odd number between 1 and 50."));
        if(skipNumber % 2 === 0 || skipNumber > 50 || skipNumber < 1){
            skipNumber = false;
        }
    }while(!skipNumber || isNaN(skipNumber));


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