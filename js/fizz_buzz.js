//
// $("button").click(function () {
//     var userNum = prompt("Pick a number between 1-100")
//     if (userNum % 3 === 0 && userNum % 5 === 0) {
//         $("#results").html("Fizz Buzz" + " " + userNum)
//     } else if (userNum % 3 === 0) {
//         $("#results").html("Fizz" + " " + userNum)
//     } else if (userNum % 5 === 0) {
//         $("#results").html("Buzz" + " " + userNum)
//     }
// })

// const fizzBuzzGame = (num) => {
//     let userNum = prompt("Pick a number between 1-100")
//     if (userNum % 3 === 0 && userNum % 5 === 0) {
//         $("#results").html("Fizz Buzz" + " " + userNum)
//     } else if (userNum % 3 === 0) {
//         $("#results").html("Fizz" + " " + userNum)
//     } else if (userNum % 5 === 0) {
//         $("#results").html("Buzz" + " " + userNum)
//     }
// }

// const fizzBuzzGame = (num = 30) => {
//     for (let i = 0; i<=num; i++) {
//         if (i% 3 === 0 && i % 5 === 0)
//             console.log(`fizzbuzz`);
//         else if (i % 3 === 0)
//             console.log(`fizz`);
//         else if (i % 5 === 0)
//             console.log(`buzz`)
//         else
//             console.log(`${i}`)
//     }
// }
//
// fizzBuzzGame(80)

let gitHubFetch = fetch("https://api.github.com/users")
    .then(response => response.json())
    .then(result => {
        result.forEach(user => {
            console.log(user)
            return user
        })
        return result
    })
    .catch(error => console.log(error))

let starFetch = fetch("https://swapi.dev/api/people/1/")
    .then(response => {
        console.log(response)
        return response.json()
    })
    .then(data => {
        console.log(data)
        return data
    })
    .catch(error => console.log(error))

Promise.all([starFetch,gitHubFetch])
.then(result => console.log(result))