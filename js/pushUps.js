
function fizzbuzz(num) {
    var output = ''
    for (var i = 1; i <= num; i++) {
        if (i % 15 === 0) {
            output += console.log("fizzbuzz");
        } else if (i % 3 === 0) {
            output += console.log("fizz")
        } else if (i % 5 === 0) {
            output += console.log("buzz")
        } else {
           output += console.log(i)
        }
    }
}

fizzbuzz(30);

function charCount(myChar, str) {
    var counter = 0;
    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i) === myChar) {
            counter++
        }
    }
    return counter
}