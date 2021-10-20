(function () {
    "use strict";

    /*
    Define a function named allIndexesOf that takes in two arguments.
    The first argument should be the array to search and the second argument should be the value you want to search for.
    If the item does not exist in the provided array, return an empty array.

    Given:
    var fruits = ["apple", "banana", "orange", "apple", "pineapple"];

    allIndexesOf(fruits, "apple") should return the array [0, 3]
    allIndexesOf(fruits, "guava") should return the array []
    allIndexesOf(fruits, "pineapple") should return [4]
    */
    let fruits = ["apple", "banana", "orange", "apple", "pineapple"];

    function allIndexesOf (array, indexValue) { //code not working properly, need to fix
        let blankArray = [];
        let firstIndex = array.indexOf(indexValue);
        let lastIndex = array.lastIndexOf(indexValue);
        let newArray = [firstIndex, lastIndex];
        return newArray;
    }

    console.log(allIndexesOf(fruits, "pineapple"));
})();