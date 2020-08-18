let returnMultiplicationTable = function(num) {
    let output = '';
    for (let i = 1; i <= 10; i++) {
        output += (num + " x " + i + " = " + num*i);
        if (i !== 10) output += '\n';
    }
    return output;
}
console.log(returnMultiplicationTable(7));

//RETURNEVENODDMESSAGE
let returnEvenOddMessage = function(int) {
    if (!Number.isInteger(int)) return int + "is invalid.";
    if (int % 2 === 0) {
        return int + " is even";
    } else {
        return int + " is odd";
    }
}

console.log(returnEvenOddMessage(108));

//TENEVENODDMESSAGE

let returnTenEvenOddMessages = function() {
    let output1 = "";
    for (let a = 0; a < 10; a++) {
        let randomNumber = Math. floor(Math. random() * (180 + 1) + 20);
        output1 += returnEvenOddMessage(randomNumber);
        if (a !== 9) output1 += '\n'
    }  return output1;
}

console.log(returnTenEvenOddMessages());

//returnNumberSail Function
let returnNumberSail = function() {
 let output2 = "";
     for (let b = 1; b < 10; b++) {
         output2 += String(b).repeat(b);
         if (b !== 9) output2 += '\n'
     } return output2;
}

console.log(returnNumberSail());

//countdown from 100 in 5's
let returnCountDownFrom100InFives = function () {
    let output3 = '';
    for (let c = 100; c >= 5; c-=5) {
        output3 += c
        if (c !== 5) output3 += '\n';
    } return output3;
}

console.log(returnCountDownFrom100InFives());