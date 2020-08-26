'use strict';

// create a handler function
var listener = function (event) {
    alert('You clicked the button!');
}

// register the listener to handle clicks on btn1
document.getElementById('btn1').addEventListener('click', listener);

// MINI LAB
// Create a button with the id='me'
// Create a listener named 'listenToMe' that says, "You clicked me."
// Register the listener 'listenToMe' to be called when the element 'me' is clicked.

var listenToMe = function (event2) {
    alert("You clicked me!");
}

document.getElementById('me').addEventListener('click', listenToMe)