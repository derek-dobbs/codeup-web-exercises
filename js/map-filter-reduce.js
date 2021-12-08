"use strict";
(function () {
    const users = [
        {
            id: 1,
            name: 'ryan',
            email: 'ryan@codeup.com',
            languages: ['clojure', 'javascript'],
            yearsOfExperience: 5
        },
        {
            id: 2,
            name: 'luis',
            email: 'luis@codeup.com',
            languages: ['java', 'scala', 'php'],
            yearsOfExperience: 6
        },
        {
            id: 3,
            name: 'zach',
            email: 'zach@codeup.com',
            languages: ['javascript', 'bash'],
            yearsOfExperience: 7
        },
        {
            id: 4,
            name: 'fernando',
            email: 'fernando@codeup.com',
            languages: ['java', 'php', 'sql'],
            yearsOfExperience: 8
        },
        {
            id: 5,
            name: 'justin',
            email: 'justin@codeup.com',
            languages: ['html', 'css', 'javascript', 'php'],
            yearsOfExperience: 9
        }
    ];

    //TODONE: Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
    let hasThree = users.filter(function (person) {
        return person.languages.length >= 3;
    });

    // console.log(hasThree);
    //TODONE: Use .map to create an array of strings where each element is a user's email address
    let emailAddresses = users.map(person => person.email);

    // console.log(emailAddresses);
    //TODONE: Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.
    let totalExperience = users.reduce((total, currentNumber) => {return total + currentNumber.yearsOfExperience}, 0);
    let averageExperience = totalExperience / users.length;

    // console.log(totalExperience);
    // console.log(averageExperience);
    //TODO: Use .reduce to get the longest email from the list of users.
    let longestUserEmail = users.reduce((total, currentLength) => {
        let emailLength = 0;
        let longestEmail;
        if(currentLength.email.length > emailLength) {
            emailLength = currentLength.email.length;
            longestEmail = currentLength.email;
        }
        return longestEmail;
    }, 0);

    console.log(longestUserEmail);

    // console.log(users[4].email.length);
    //TODO: Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.

})();