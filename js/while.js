(function () {
    "use strict";
    function randomNumber(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
    }

    //While Loops Exercise 2
    console.log("While Loops Exercise 2");
    // 16 iterations
    let number = 2;
    while (number <= 65536) {
        console.log(number);
        number *= 2;
    }

    console.log("----------------------------------------------------------------------------------------------------");

    //Do While Loop Exercise #1
    console.log("Do While Loop Exercise 1");
    let numOfConesToSell = randomNumber(50, 100);

    do {
        let numOfConesBought = randomNumber(1, 5);
        if(numOfConesBought < numOfConesToSell){
            console.log(numOfConesBought + " cones sold.");
        }else if(numOfConesBought > numOfConesToSell) {
            console.log("Cannot sell you " + numOfConesBought + " cones. I only have " + numOfConesToSell + "...");
        }else if(numOfConesBought === numOfConesToSell) {
            console.log("Yay, I sold them all!")
        }
        //console.log("Number of cones needed to sell: " + numOfConesToSell + ". Number of cones bought: " + numOfConesBought + ".");
    }while (numOfConesBought < numOfConesToSell);

})();