'use strict';

// this code will produce a console log every second
// when count >= max, the interval is cancelled, and the logging will stop

// var count = 0;
// var max = 10;
// var interval = 1000; // interval time in milliseconds
//
// var intervalId = setInterval(function () {
//     if (count >= max) {
//         clearInterval(intervalId);
//         console.log('All done');
//     } else {
//         count++;
//         console.log('Repeating this line ' + count);
//     }
// }, interval);

//-------------------------------------------

// this code will produce a console log every second
// when count >= max, the interval is cancelled, and the logging will stop
// var count1 = 0;
// var max1 = 10;
// var interval1 = 1000; // interval time in milliseconds
// var intervalId1 = setInterval(myFunc, interval1);
// function myFunc() {
//     if (count1 >= max1) {
//         clearInterval(intervalId1);
//         console.log('All done');
//     } else {
//         count1++;
//         console.log('Repeating this line ' + count1);
//     }
// }

//-------------------------


// var count2 = 0;
// var max2 = 5;
// var interval2 = 2000; // interval time in milliseconds
//
// var intervalId2 = setInterval(function () {
//     if (count2 >= max2) {
//         clearInterval(intervalId2);
//         alert('ALL DONE!');
//     } else {
//         count2++;
//         alert('ALERT REPEAT!!!' + " " +count2);
//     }
// }, interval2);

//----------------------------

'use strict';

// this code will produce a console log every second
// when count >= max, the interval is cancelled, and the logging will stop

// var count = 0;
// var max = 10;
// var interval = 1000; // interval time in milliseconds
//
// var intervalId = setInterval(function () {
//     if (count >= max) {
//         clearInterval(intervalId);
//         console.log('All done');
//     } else {
//         count++;
//         console.log('Repeating this line ' + count);
//     }
// }, interval);

//-------------------------------------------

// this code will produce a console log every second
// when count >= max, the interval is cancelled, and the logging will stop
// var count1 = 0;
// var max1 = 10;
// var interval1 = 1000; // interval time in milliseconds
// var intervalId1 = setInterval(myFunc, interval1);
// function myFunc() {
//     if (count1 >= max1) {
//         clearInterval(intervalId1);
//         console.log('All done');
//     } else {
//         count1++;
//         console.log('Repeating this line ' + count1);
//     }
// }

//-------------------------

'use strict';

// var delay = 5000; // delay time in milliseconds
//
// var timeoutId = setTimeout(function () {
//     alert('Here is a delayed hello!');
// }, delay);
//
// var delay2 = 6000;
// var to2 = setTimeout(function () {
//     clearTimeout(timeoutId);
//     alert('Stopped Alert!');
// }, delay2);

//-------------------------

// var delay3 = 5000;
//
// var timeout2 =  setTimeout(function () {
//     console.log("It's been 3 seconds!");
//     //redirect browser
//     //window.location = 'http://www.imdb.com';
// }, delay3);

// to cancel the timeout, you can call
// clearTimeout(timeoutId);
// prior to the delay expiring
// function reloadFromCache() {
//     location.reload(); //reload page, possible from cache
// }
// function reloadFromServer() {
//     location.reload(true); //reload from server
// }

//---------DOM-----------

    "use strict";
    (function() {
    var btnToClick = document.getElementById('btnToClick');

    console.log(btnToClick); // prints <button id="btnToClick">Click Me</button>
})();

//     (function() {
//     var paragraph = document.getElementById('demo');
//     paragraph.innerHTML = "Message Content";
// })();
//
// (function(){
//     var header = document.getElementById('demo2');
//     header.innerHTML = "IO ROCKS!";
// })()

(function() {
    // Get all elements with class 'even'
    var evenElements = document.getElementsByClassName('even');

    // Print the first element
    console.log(evenElements[0]); // Prints li.even.list-one-item

    // Print all elements
    for (var i = 0; i < evenElements.length; i++) {
        console.log(evenElements[i]);
    }

    // Prints:
    // li.even.list-one-item
    // li.even.list-two-item

    var listItems = document.getElementsByTagName('li');

    // Print the first list item
    console.log(listItems[0]); // Prints li.odd.list-one-item

    // Print all the list items
    for (var i = 0; i < listItems.length; i++) {
        console.log(listItems[i]);
    }

    // Prints
    // li.odd.list-one-item
    // li.even.list-one-item
    // li.odd.list-two-item
    // li.even.list-two-item
})();

(function() {
    // Get all elements with class 'even'
    var bElements = document.getElementsByClassName('b');

    // Print all elements
    var output = "";
    for (var i = 0; i < bElements.length; i++) {
        output += bElements[i].outerHTML;
    }
    let pOut = document.getElementById('output');
    pOut.innerHTML = output;
    console.log(output);
})();

(function() {
    // Get all elements with class 'even'
    var paragraphTags = document.getElementsByTagName('p');
    // Print all elements
    var output = "";
    for (var i = 0; i < paragraphTags.length; i++) {
        output += paragraphTags[i].outerHTML;
    }
    let pOut = document.getElementById('output2');
    pOut.innerHTML = output;
    console.log(output);
})();

let hout = document.getElementById("demo3");
(function() {
    // get the "username" input
    var usernameInput = document.forms.login.username;

    // log the value of the "username" input
    hout.innerText = usernameInput.value;

})();

function saveUsername() {
    var usernameInput = document.forms.login.username;
    hout.innerText = usernameInput.value;
    console.log(usernameInput.value);
}