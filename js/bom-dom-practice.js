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


var count2 = 0;
var max2 = 5;
var interval2 = 2000; // interval time in milliseconds

var intervalId2 = setInterval(function () {
    if (count2 >= max2) {
        clearInterval(intervalId2);
        alert('ALL DONE!');
    } else {
        count2++;
        alert('ALERT REPEAT!!!' + " " +count2);
    }
}, interval2);