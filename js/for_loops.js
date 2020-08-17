var returnMultiplicationTable = function(num) {
    var i = 1;
    let output = '';
    while (i <= 10) {
        output += (num + " x " + i + " = " + num*i);
        i++;
        if (i !== 11) output += '\n';
    }
    return output;
}
console.log(returnMultiplicationTable(7));

var returnEvenOddMessage = function(int) {
    if (int % 2 === 0) {
        return int + " is even";
    } else {
        return int + " is odd";
    }
}

console.log(returnEvenOddMessage(108));