(function () {
    "use strict";

    console.log("Loops Exercises");

    //For Loops Exercise #2
    console.log("For Loops Exercise 2");
    function showMultiplicationTable(number) {
        for(let i = 1; i <= 10; i++) {
            console.log(number + " x " + i + " = " + (number * i));
        }
    }

    showMultiplicationTable(7);
    console.log("----------------------------------------------------------------------------------------------");

    //For Loops Exercise #3
    console.log("For Loops Exercise 3");
    function randomNumber(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
    }

    function oddOrEven (number) {
        if(number % 2 === 0) {
            return number + " is even.";
        }else {
            return number + " is odd."
        }
    }

    for(let i = 1; i <= 10; i++) {
        let random = randomNumber(20, 200);
        console.log(oddOrEven(random));
    }
    console.log("----------------------------------------------------------------------------------------------------");

    //For Loops Exercise # 4
    console.log("For Loops Exercise 4");
    function repeatingNumber (number) {
       let repeatArray = [];
        for (let i = 0; i < number; i++) {
            repeatArray.push(number);
        }
        repeatArray = repeatArray.join('');
        return repeatArray;
    }

    for (let i = 1; i < 10; i++) {
        console.log(repeatingNumber(i));
    }
    console.log("----------------------------------------------------------------------------------------------------");
    //For Loops Exercise # 5
    console.log("For Loops Exercise 5");
    for (let i = 100; i >=5 ;) {
        console.log(i);
        i -= 5;
    }

})();