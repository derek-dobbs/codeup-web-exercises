"use strict";

console.log("Hello, I'm in my own file now!");

var returnOfAlert = alert("TGIF!");
console.log(returnOfAlert);

var returnOfConfirm = confirm("Got any plans for this three day weekend?"); // <-- That string is called a string literal.
// ^ confirm is like alert, but with two options. OK returns true and CANCEL returns false.

console.log(returnOfConfirm);

var favoriteNuMetalBand = prompt("What is your favorite nu metal band?");


console.log("Ha ha, you like " + favoriteNuMetalBand + "!");

var leastFavoriteSoda = prompt("What is your least favorite soda?");
var favoriteSoda = prompt("What's your favorite soda?");

alert("Hello fellow teens, my name is " + leastFavoriteSoda + " " + favoriteSoda + " and I choose hugs, not drugs.");






