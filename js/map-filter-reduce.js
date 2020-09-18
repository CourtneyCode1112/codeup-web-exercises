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

// Create a file named map-filter-reduce.js in your js directory and copy the users data below into it.
//     Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
const users3Languages = users.filter(userLanguage => userLanguage.languages.length >= 3)
console.log(users3Languages);

//     Use .map to create an array of strings where each element is a user's email address
const userEmails = users.map(({ email }) => email)
console.log(userEmails);

// Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.
const totalYearsofExperience = users.reduce((total, user) => {
    return total + user.yearsOfExperience;
}, 0);
console.log(totalYearsofExperience);

//     Use .reduce to get the longest email from the list of users.
const longestUserEmail = users.reduce(function(accum, {email}) {
    if (email.length > accum.length) {
        return email
    } else {
        return accum
    }
}, '')
console.log(longestUserEmail);

//     Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.

const instructors = `Your instructors are: ` + (users.reduce((greeting, {name}) => greeting + name.charAt(0).toUpperCase() + name.slice(1) + ", " , "")).slice(0, -2)
console.log(instructors);
// Bonus
// Use .reduce to get the unique list of languages from the list of users.

// let uniqueLanguages = users.map(user => user.languages).join()
// uniqueLanguages = Array.from(new Set(uniqueLanguages.split(',')));
// console.log(uniqueLanguages);

let langs = users.reduce((accum, {languages }) => accum += languages + ',', "").split(',').slice(0,-1)
let userUniqueLanguages1 = new Set(langs)
let userUniqueLanguages2 = langs.filter((x, i, a) => a.indexOf(x) === i)

console.dir(userUniqueLanguages1)
console.dir(userUniqueLanguages2)


