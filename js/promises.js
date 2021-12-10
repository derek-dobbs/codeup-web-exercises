/////Handle an API Promise/////
//TODONE: Generate a Personal Access Token for the GitHub API.
//
// We will use this so that we don't get rate limited when talking to the GitHub API. You can add the token to your requests like this:
//
// fetch(url, {headers: {'Authorization': 'token YOUR_TOKEN_HERE'}})
//TODONE: Create a function that accepts a GitHub username, and returns a promise that resolves returning just the date of the last commit that user made. Reference the github api documentation to achieve this.
// fetch('https://api.github.com/users/derek-dobbs/events', {headers: {'Authorization': GITHUB_KEY}})
//     .then(response => response.json())
//     // .then(data => console.log(`Most recent commit was on ${data[0].created_at.substring(0, 10)}`))
//     .catch(error => console.error(error));

function getLastCommit (username) {
    fetch(`https://api.github.com/users/${username}/events`, {headers: {'Authorization': GITHUB_KEY}}).then(response => response.json())
        .then(data => console.log(`${username}'s last commit was on: ${data[0].created_at.substring(0, 10)}`))
        .catch(error => console.error(error));
}

// getLastCommit('derek-dobbs');

/////Create Your Own Promise/////
//TODO: Write a function named wait that accepts a number as a parameter, and returns a promise that resolves after the passed number of milliseconds.
function wait(seconds) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let x = 1;
            if (seconds <= 1000) {
                resolve('Loaded in less than a second or less');
            } else {
                reject('Took more than a second to load');
            }
        }, seconds);
    });
}
wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));

/////BONUS/////
//TODO: As a bonus make sure the promise resolves with the milliseconds in return, so you can make the console log message more dynamic.