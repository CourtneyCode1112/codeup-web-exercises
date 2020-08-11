"use strict"

console.log("Hello from external JavaScript");

alert("Welcome to my Website!");

var favColorQ = ("What is your favorite color?");
var userFavColor = prompt(favColorQ);
alert("Wow! " + userFavColor + " is my favorite color too!");

// You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear
// (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it).
// If price for a movie per day is $3, how much will you have to pay?
var littleMermaidRentalDays = prompt("How many days will you renting The Little Mermaid?");
var brotherBearRentalDays = prompt("How many days will you be renting Brother Bear?");
var herculesRentalDays = prompt("How many days will you be renting Hercules?");
var totalBill = 3 * (Number(littleMermaidRentalDays) + Number(brotherBearRentalDays) + Number(herculesRentalDays));
alert("At $3 a day you owe: $" + totalBill.toFixed(2));

// Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook,
// they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350.
// How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours
// for Google and 4 hours for Amazon.
var googleRate = 400;
var amazonRate = 380;
var facebookRate = 350;
var googleHoursWorked = prompt("How many hours did you work at Google this week?");
var amazonHoursWorked = prompt("How many hours did you work at Amazon this week?");
var facebookHoursWorked = prompt("How many hours did you work at Facebook this week?");
var totalPayment = (Number(googleHoursWorked) * googleRate) + (Number(amazonHoursWorked) * amazonRate) + (Number(facebookHoursWorked) * facebookRate);
alert("Your total pay for this week is: $" + totalPayment.toFixed(2));

// A student can be enrolled in a class only if the class is not full and the class schedule does
// not conflict with her current schedule.
var classFull = confirm("Click ok to continue if the class you are enrolling in is not full.");
var scheduleConflict = confirm("Click ok to continue if the class does not conflict with your schedule.");
var studentEnrolled = classFull && scheduleConflict;
alert("The student is enrolled: " + studentEnrolled);

// A product offer can be applied only if a person buys more than 2 items, and the offer has
// not expired. Premium members do not need to buy a specific amount of products.
var numberOfItemsPurchased = prompt("How many items are you purchasing today?");
var offerNotExpired = confirm("Click ok if your product offer has not expired.");
var premiumMember = confirm("Click ok if you are a Premium Member");
var productOfferApplied = (numberOfItemsPurchased > 2 || premiumMember) && offerNotExpired;
alert("You may apply your coupon: " + productOfferApplied);