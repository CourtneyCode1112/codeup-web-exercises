'use strict';

//Morning push up exercise on DOM BOM
(function() {
    var output = '';
    for (var i = 1; i <= 10; i++) {
        var headerElement = document.getElementById('here');
        output += "Index: " + [i] + '<br>';
        headerElement.innerHTML = output;
    }
})();

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

// MINI LAB
// Add a second button to you first lab.
//     Write a second event listener to remove 'listenToMe' from the 'me'.
//     Register the snd listener to be called when the 2nd button is clicked.
//     Test you code.

var remover = function (event3) {
    document.getElementById('me').removeEventListener('click', listenToMe);
}

document.getElementById('meDone').addEventListener('click', remover)



//remove listener

var listener = function (event) {
    alert('You clicked the button!');
}

// add event listener to btn1
var btn2 = document.getElementById('btn2');
btn2.addEventListener('click', listener);

var remover = function (event) {
    // remove event listener from btn2
    btn2.removeEventListener('click', listener);
    console.log('Event listener removed.');
}

// add event listener to btn2
var btn3 = document.getElementById('btn3');
btn3.addEventListener('click', remover);