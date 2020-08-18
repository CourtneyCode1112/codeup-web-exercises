var oddNumbertoFifty = function(input = prompt("Please enter a number between 1-50.")) {
    var output = "";
    for (var i = 1; i < 50; i++) {
        if (isNaN(parseInt(input))) {
            input = prompt("Sorry that is not a number that fits the criteria. Please try again.");
        } else if (i % 2 === 0) {
            continue;
        }
    }
    output += console.log("Here in an odd number: " + i);
    if (i !== 0) output += '\n';
}
oddNumbertoFifty();