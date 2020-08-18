var oddNumbertoFifty = function() {
    var userNumber = prompt("Please pick an odd number between 1-50.")
    for (var i = 1; i <= 50; i++) {
        if (isNaN(parseInt(userNumber)) || parseInt(userNumber) < 0 || parseInt(userNumber) > 50) {
            userNumber = prompt("Sorry that is not a number that fits the criteria. Please try again.");
        } else if (i % 2 === 0) {
            continue;
        } else if (i == userNumber) {
            console.log("Yikes! Skipping number: " + userNumber);
        } else {
            console.log("Here in an odd number: " + i);
        }
        if (i >= 51) break;
    }
}
oddNumbertoFifty();