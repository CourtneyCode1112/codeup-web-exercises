// Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

let addAllNumbers = function (num) {
    let numTotal = 0;
    for (let i = 1; i <= num; i++) {
        numTotal += i;
    }
    return numTotal;
}

console.log(addAllNumbers(4))