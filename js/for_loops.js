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

//RETURNEVENODDMESSAGE
var returnEvenOddMessage = function(int) {
    if (int % 2 === 0) {
        return int + " is even";
    } else {
        return int + " is odd";
    }
}

console.log(returnEvenOddMessage(108));

//TENEVENODDMESSAGE

function returnTenEvenOddMessages() {
    let output1 = "";
    for (let a = 0; a < 10; a++) {
        var randomNumber = Math. floor(Math. random() * (180 + 1) + 20);
        output1 += returnEvenOddMessage(randomNumber);
        if (a !== 9) output1 += '\n'
    }  return output1;
}


console.log(returnTenEvenOddMessages());