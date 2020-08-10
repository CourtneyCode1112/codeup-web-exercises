"use strict"

console.log("Hello from external JavaScript");

alert("Welcome to my Website!");

var favColorQ = ("What is your favorite color?");
var userFavColor = prompt(favColorQ);
alert("Wow! " + userFavColor + " is my favorite color too!");

var littleMermaidRentalDays = prompt("How many days will you renting The Little Mermaid?");
var brotherBearRentalDays = prompt("How many days will you be renting Brother Bear?");
var herculesRentalDays = prompt("How many days will you be renting Hercules?");
var totalBill = 3 * (Number(littleMermaidRentalDays) + Number(brotherBearRentalDays) + Number(herculesRentalDays));
alert("At $3 a day you owe: $" + totalBill.toFixed(2));

var googleRate = 400;
var amazonRate = 380;
var facebookRate = 350;
var googleHoursWorked = prompt("How many hours did you work at Google this week?");
var amazonHoursWorked = prompt("How many hours did you work at Amazon this week?");
var facebookHoursWorked = prompt("How many hours did you work at Facebook this week?");
var totalPayment = (Number(googleHoursWorked) * googleRate) + (Number(amazonHoursWorked) * amazonRate) + (Number(facebookHoursWorked) * facebookRate);
alert("Your total pay for this week is: $" + totalPayment.toFixed(2));

var classFull = confirm("Click ok to continue if the class you are enrolling in is not full.");
var scheduleConflict = confirm("Click ok to continue if the class does not conflict with your schedule.");
var studentEnrolled = classFull && scheduleConflict;
alert("The student is enrolled: " + studentEnrolled);

var numberOfItemsPurchased = prompt("How many items did you buy today?");
var offerExpired = confirm("Click ok if your product offer has not expired.");
var premiumMember = confirm("Click ok if you are a Premium Member");
var productOfferApplied = (numberOfItemsPurchased >= 2 || premiumMember) && offerExpired;
alert("You may apply your coupon: " + productOfferApplied);