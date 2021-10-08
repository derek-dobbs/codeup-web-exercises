console.log("Hello from external Javascript");

alert("Welcome to my Website!");

let userInput = prompt("What is your favorite color?");
alert("Great, " + userInput + " is my favorite color too!");
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let price = 3;
let numberOfMovies = parseFloat(prompt("How many movies would you like to rent? Rental price is $3 per day."));
let numberOfDays = parseFloat(prompt("How many days would you like to rent the movie(s)?"));
let total = numberOfMovies * (numberOfDays * price);
alert("The total price is: " + "$" + total);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let googleRate = parseFloat(prompt("What is your pay rate at Google?"));
let googleHours = parseFloat(prompt("How many hours did you work at Google this week?"));

let amazonRate = parseFloat(prompt("What is your pay rate at Amazon?"));
let amazonHours = parseFloat(prompt("How many hours did you work at Amazon this week?"));

let facebookRate = parseFloat(prompt("What is your pay rate at Google?"));
let facebookHours = parseFloat(prompt("How many hours did you work at Google this week?"));

let googlePay = googleRate * googleHours;
let amazonPay = amazonRate * amazonHours;
let facebookPay = facebookRate * facebookHours;

let payTotal = googlePay + amazonPay + facebookPay;

alert("Your total pay this week is: $" + payTotal);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let isFull = confirm("Is the class full? Select OK for 'yes' or CANCEL for 'no'");
let isConflict = confirm("Does this course conflict with an existing coure? Select OK for 'yes' and CANCEL for 'no'");

if (!isFull && !isConflict) {
    alert("You may enroll in the course!");
}else {
    alert("You may NOT enroll in the course.");
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let itemDiscount = 3;
let isMember = confirm("Are you a premium member? Press OK for 'yes' or CANCEL for 'no'.");
if (isMember) {
    alert("Congratulations, you qualify for the discount!");
}else {
    let isExpired = confirm("Is the offer expired? Press CANCEL for 'yes' or OK for 'no'.");
    let numberOfItems = parseFloat(prompt("How many items did you purchase?"));
    if (isExpired === true && (numberOfItems >= itemDiscount)) {
        alert("Congratulations, you qualify for the discount!");
    } else {
        alert("Sorry, you don't qualify for the discount.")
    }
}
