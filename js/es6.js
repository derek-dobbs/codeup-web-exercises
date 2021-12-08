/*
 * Complete the TODOne items below
 */
const users = [
  {
    name: 'zach',
    email: 'zach@codeup.com',
    languages: ['javascript', 'bash']
  },
  {
    name: 'ryan',
    email: 'ryan@codeup.com',
    languages: ['clojure', 'javascript']
  },
  {
    name: 'luis',
    email: 'luis@codeup.com',
    languages: ['java', 'scala', 'php']
  },
  {
    name: 'fernando',
    email: 'fernando@codeup.com',
    languages: ['java', 'php', 'sql']
  },
  {
    name: 'justin',
    email: 'justin@codeup.com',
    languages: ['html', 'css', 'javascript', 'php']
  }
];

// TODONE: fill in your name and email and add some programming languages you know
// to the languages array
// TODONE: replace the `var` keyword with `const`, then try to reassign a variable
// declared as `const`
const name = 'Derek';
const email = 'myemail@email.com';
const languages = ['HTML', 'CSS', 'Javascript'];

// name = 'Joe';
// console.log(name);

// TODOne: rewrite the object literal using object property shorthand
users.push({
  name,
  email,
  languages
});



// TODONE: replace `var` with `let` in the following variable declarations
let emails = [];
let names = [];

// TODONE: rewrite the following using arrow functions
// users.forEach(function(user) {
//   return emails.push(user.email);
// });
// users.forEach(function(user) {
//   return names.push(user.name);
// });

users.forEach(user => emails.push(user.email));
users.forEach(user => names.push(user.name));

// TODONE: replace `var` with `let` in the following declaration
// TODOne: replace `var` with `let` in the following declaration
let developers = [];
users.forEach(user = ({name, email, languages})  => {
  // TODOne: rewrite the code below to use object destructuring assignment
  //       note that you can also use destructuring assignment in the function
  //       parameter definition

  // TODOne: rewrite the assignment below to use template strings
  developers.push(`${name}'s email is ${email}. ${name} knows ${languages.join(', ')}.`);

});

// TODONE: Use `let` for the following variable
let list = '<ul>';

// TODOne: rewrite the following loop to use a for..of loop
for(let developer of developers) {

  // TODOne: rewrite the assignment below to use template strings
  list += `<li>${developer}</li>`;
}
list += '</ul>';
