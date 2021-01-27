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

let tileTeamworkGame = function(p1, p2) {
        return p1 + 1 <= p2 && p2 <= p1 + 6;
}

console.log(tileTeamworkGame(3,7));