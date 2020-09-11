//
// function fizzbuzz(num) {
//     var output = ''
//     for (var i = 1; i <= num; i++) {
//         if (i % 15 === 0) {
//             output += console.log("fizzbuzz");
//         } else if (i % 3 === 0) {
//             output += console.log("fizz")
//         } else if (i % 5 === 0) {
//             output += console.log("buzz")
//         } else {
//            output += console.log(i)
//         }
//     }
// }
//
// fizzbuzz(30);
//
// function charCount(myChar, str) {
//     var counter = 0;
//     for (var i = 0; i < str.length; i++) {
//         if (str.charAt(i) === myChar) {
//             counter++
//         }
//     }
//     return counter
// }
//
// console.log(charCount("b", "babble"));
//
// var i = 1;
// function fizzbuzz(num) {
//     while (i <= num) {
//         if (i % 15 === 0) {
//             console.log("fizzbuzz");
//         } else if (i % 3 === 0) {
//             console.log("fizz");
//         } else if (i % 5 === 0) {
//             console.log("buzz")
//         } else {
//             console.log(i);
//         }
//         i++;
//     }
// }
//
// fizzbuzz(50)
//
// function countVowels(string) {
//     var vowel_list = "aeiouAEIOU"
//     var counter = 0;
//     for (var i = 0; i < string.length; i++) {
//         if (vowel_list.indexOf(string[i]) !== -1) {
//             counter += 1
//         }
//     }
//     return counter
// }
//
// function analyzeWord(string) {
//     var output = {};
//     output.word = string;
//     output.numberOfLetters = string.length;
//     output.numberOfVowels = countVowels(string);
//     return output
// }
//
// console.log(analyzeWord("supercalifraglisiticexplealidousious"));
//
// function capitalizeName(string) {
//     var stringArray = string.split(" ");
//     var captString = "";
//     for (var i = 0; i < stringArray.length; i++) {
//         captString += stringArray[i].charAt(0).toUpperCase() + stringArray[i].slice(1) + " ";
//     }
//     return captString
// }
//
// console.log(capitalizeName("cory holley"));
//
// function remove9s(array) {
//     array = array.filter(e => e !== "9")
//     return array
// }
//
// console.log(remove9s(["3", "9", "12"]));
//
// function convertNameToObject(string) {
//     var array = string.split(" ");
//     var newObj = {};
//     newObj.firstName = array[0];
//     newObj.lastName = array[1];
//     return newObj
// }
//
// console.log(convertNameToObject("herman little"));
//
// function avg(array) {
//     var total = 0;
//     for(var i = 0; i < array.length; i++) {
//             total += array[i];
//         }
//     return total / array.length;
// }
//
// console.log(avg([2, 2, 2]));

var tools = [
    {
        "title": "Hammer",
        "quantity": 25,
        "categories": [
            "Tool"
        ],
        "price": 20
    }, {
    "title": "Drill",
    "quantity": 5,
    "categories": [
        "Tool",
        " Powered"
    ],
    "price": 100
}, {
    "title": "Mower",
    "quantity": 5,
    "categories": [
        "Tool",
        " Gas",
        " Outdoor"
    ],
    "price": 200
}, {
    "title": "Screwdrivers",
    "quantity": 25,
    "categories": [
        "Tool"
    ],
    "price": 10
},
    {
        "title": "Saw",
        "quantity": 10,
        "categories": [
            "Tool"
        ],
        "price": 20
    }
]
// console.log(tools[0].price)
var findHighest = function (tools) {
    var highest = 0
    for (var i = 0; i < tools.length; i++) {
        if (tools[i].price > highest) {
            highest = tools[i].price
        }
    }
    return highest
}

findHighest(tools)

var findLowest = function (tools) {
    var lowest = 200
    for (var i = 0; i < tools.length; i++) {
        if (tools[i].price < lowest) {
            lowest = tools[i].price
        }
    }
    return lowest
}

console.log(findLowest(tools));