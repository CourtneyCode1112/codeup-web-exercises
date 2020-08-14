"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

function analyzeColor(color) {
    if (color.toLowerCase() === "blue") {
        console.log("Blue is the color of the sky");
    } else if (color.toLowerCase() === "red") {
        console.log("Strawberries are red");
    } else if (color.toLowerCase() === "cyan") {
        console.log("I don't know anything about cyan");
    } else {
        console.log("Color is unknown.");
    }
}
analyzeColor("red");

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */
function rainbowColors(randomColor) {
    if (randomColor === "red") {
        console.log("Red is the color of a tomato");
    } else if (randomColor === "orange") {
        console.log("Orange is the color of a pumpkin.");
    } else if (randomColor === "yellow") {
        console.log("Yellow is the color of my rubber duck.");
    } else if (randomColor === "green") {
        console.log("Green is the color of a frog.");
    } else if (randomColor === "blue") {
        console.log("Blue is the color of a sapphire.");
    } else if (randomColor === "indigo") {
        console.log("Indigo is the color of the flowers in my yard.");
    } else if (randomColor === "violet") {
        console.log("Violet, you're turning violet, Violet!");
    }
}
rainbowColors(randomColor);

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */
function rainbowColors2(randomColor) {
    switch(randomColor) {
        case "red":
            console.log("Red is the color of a tomato");
            break;
        case "orange":
            console.log("Orange is the color of a pumpkin.");
            break;
        case "yellow":
            console.log("Yellow is the color of my rubber duck.");
            break;
        case "green":
            console.log("Green is the color of a frog.");
            break;
        case "blue":
            console.log("Blue is the color of a sapphire.");
            break;
        case "indigo":
            console.log("Indigo is the color of the flowers in my yard.");
            break;
        case "violet":
            console.log("Violet, you're turning violet, Violet!");
            break;
    }
}
rainbowColors2(randomColor);

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
var color2 = prompt("Please pick one color: blue, red, cyan or pick your own.");

function analyzeColor2(color2) {
    if (color2.toLowerCase() === "blue") {
        alert("Blue is the color of the sky");
    } else if (color2.toLowerCase() === "red") {
        alert("Strawberries are red");
    } else if (color2.toLowerCase() === "cyan") {
        alert("I don't know anything about cyan");
    } else {
        alert("Color is unknown.");
    }
}
analyzeColor2(color2);
/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

function calculateTotal(luckyNumber, totalAmount) {
    var totalAmountNum = parseInt(totalAmount);
    var luckyNumberOne = totalAmountNum - (totalAmountNum * .10);
    var luckyNumberTwo = totalAmountNum - (totalAmountNum * .25);
    var luckyNumberThree = totalAmountNum - (totalAmountNum * .35);
    var luckyNumberFour = totalAmountNum - (totalAmountNum * .50);
    switch(luckyNumber, totalAmountNum) {
        case (luckyNumber == 0 && totalAmountNum) :
            console.log("Sorry, you're lucky number is " + luckyNumber + ", you do not receive a discount.");
            break;
        case (luckyNumber == 1 && totalAmountNum) :
            console.log("You're lucky number is " + luckyNumber + ", you received a 10% discount! Your new discounted price is $" + luckyNumberOne + "!");
            break;
        case (luckyNumber == 2 && totalAmountNum) :
            console.log("You're lucky number is " + luckyNumber + ", you received a 25% discount! Your new discounted price is $" + luckyNumberTwo + "!");
            break;
        case (luckyNumber == 3 && totalAmountNum) :
            console.log("You're lucky number is " + luckyNumber + ", you received a 35% discount! Your new discounted price is $" + luckyNumberThree + "!");
            break;
        case (luckyNumber == 4 && totalAmountNum) :
            console.log("You're lucky number is " + luckyNumber + ", you received a 50% discount! Your new discounted price is $" + luckyNumberFour + "!");
            break;
        case (luckyNumber == 5 && totalAmountNum) :
            console.log("You're lucky number is " + luckyNumber + ", you received a 100% discount! Your items are free!");
            break;
    }
}
calculateTotal(4, 100);

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber1 = Math.floor(Math.random() * 6);

function calculateTotal2(luckyNumber1, totalAmount) {
    var totalAmountNum = parseInt(totalAmount);
    var luckyNumberOne = totalAmountNum - (totalAmountNum * .10);
    var luckyNumberTwo = totalAmountNum - (totalAmountNum * .25);
    var luckyNumberThree = totalAmountNum - (totalAmountNum * .35);
    var luckyNumberFour = totalAmountNum - (totalAmountNum * .50);
    switch(luckyNumber1, totalAmountNum) {
        case (luckyNumber1 == 0 && totalAmount) :
            console.log("Sorry, you're lucky number is " + luckyNumber1 + ", you do not receive a discount. Your bill is " + totalAmountNum + ".");
            break;
        case (luckyNumber1 == 1 && totalAmount) :
            console.log("You're lucky number is " + luckyNumber1 + ", you received a 10% discount! Your price before the discount is $" + totalAmountNum + ". Your new discounted price is $" + luckyNumberOne + "!");
            break;
        case (luckyNumber1 == 2 && totalAmount) :
            console.log("You're lucky number is " + luckyNumber1 + ", you received a 25% discount! Your price before the discount is $" + totalAmountNum + ". Your new discounted price is $" + luckyNumberTwo + "!");
            break;
        case (luckyNumber1 == 3 && totalAmount) :
            console.log("You're lucky number is " + luckyNumber1 + ", you received a 35% discount! Your price before the discount is $" + totalAmountNum + ". Your new discounted price is $" + luckyNumberThree + "!");
            break;
        case (luckyNumber1 == 4 && totalAmount) :
            console.log("You're lucky number is " + luckyNumber1 + ", you received a 50% discount! Your price before the discount is $" + totalAmountNum + ". Your new discounted price is $" + luckyNumberFour + "!");
            break;
        case (luckyNumber1 == 5 && totalAmount) :
            console.log("You're lucky number is " + luckyNumber1 + ", you received a 100% discount! Your price before the discount is $" + totalAmountNum + ". Your items are now free!");
            break;
        default :
            console.log("Error");
            break;
    }
}
calculateTotal2(luckyNumber1, 100);

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */
function yourNumber() {
    var participate = confirm("Would you like to enter a number?");
    if (participate === true) {
        var inputAnswer = prompt("Enter your number");
        if (isNaN(parseInt(inputAnswer)) === false) {
            alert(inputAnswer % 2 === 0 ? "The number is even" : "The number is odd");
            alert("Your number + 100 is " + (parseInt(inputAnswer) + 100));
            alert(inputAnswer >= 0 ? "The number is positive" : "The number is negative");
        } else {
            alert("What you have entered is not a number");
        }
    } else {
        alert("Goodbye.");
    }
}

yourNumber();

