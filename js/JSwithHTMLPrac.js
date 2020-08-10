"use strict"

var insideESGreeting = "Hello from inside the ES!";
alert(insideESGreeting);

var goodbye = "Goodbye for now!";
alert(goodbye);

// the following line will show the OK/CANCEL confirm dialog
var confirmed = confirm('Are you having fun?!');
console.log("You are having fun:" +confirmed); // will be either true or false

var userInput = prompt('What is your favorite color?');
console.log(userInput + " is my favorite color too!");

