// Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

let addAllNumbers = function (num) {
    let numTotal = 0;
    for (let i = 1; i <= num; i++) {
        numTotal += i;
    }
    return numTotal;
}

console.log(addAllNumbers(4))

// In a board game, a piece may advance 1-6 tiles forward depending on the number rolled on a six-sided dice. If you advance your piece onto the same tile as another player's piece, both of you earn a bonus.
//
// Given you and your friend's tile number, create a function that returns if it's possible to earn a bonus when you roll the dice.

let tileTeamworkGame = function (p1, p2) {
    return p1 + 1 <= p2 && p2 <= p1 + 6;
}

console.log(tileTeamworkGame(3, 7));

// Create a function to return the amount of potatoes there are in a string.

let potato = function (string) {
    // let potato = "potato";
    console.log(string.split("potato").length - 1);
}

potato("potatoasdfpotatoasdpotato");

// In this challenge you will be given a relation between two numbers, written as a string. Write a function that determines if the relation is true or false.

let isTrue = function (string) {
    let stringArray = string.split("");
    let firstNum = "";
    let operator = "";
    let secondNum = "";
    for (let i = 0; i < stringArray.length - 1; i++) {
        if(stringArray[i] === ("<" || ">" || "=")) {
            operator = stringArray[i];
            console.log(operator);
            firstNum = stringArray.slice(0, stringArray[i+1] -1).join("");
            console.log(firstNum);
            secondNum = stringArray.slice(stringArray[i+1], stringArray.length).join("");
            console.log(secondNum);
        }
    }
    console.log(stringArray);
    console.log(eval(string.replace('=', '===')));
}

isTrue("15<31");

// There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.

let remainder = function(num1,num2) {
    console.log(num1 % num2);
}

remainder(6,5)