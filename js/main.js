"use strict"

//!!!!!!!!!!NEED TO FIX FILTER BY ROAST DISPLAY
//                  & ADD ADD COFFEE FUNCTION AND CREATE COFFEE FUNCTION!!!!!!!!!

//  <==================================== VARIABLES ====================================>
var tbody = document.querySelector('#coffees');
var roastSelection = document.querySelector('#roast-selection');

//search function
var userSelection = document.querySelector('#userSearch');
var itemsArray = [];
//Local Storage Code
localStorage.setItem('itemsArray', JSON.stringify(itemsArray));
    let itemArray;
    if(localStorage.getItem('itemsArray') === null) {
        itemArray = [];
    } else {
        itemArray = JSON.parse(localStorage.getItem('itemsArray'));
    }
    itemsArray = JSON.parse(localStorage.getItem('itemsArray'));

    itemsArray.push(itemArray);
    // localStorage.setItem('itemsArray', JSON.stringify(itemsArray));
    console.log(itemsArray);


// let itemsArray = [];
// localStorage.setItem("addedCoffee", JSON.stringify(itemsArray));
// var storedCoffee = JSON.parse(localStorage.getItem("addedCoffee"));

// window.localStorage.setItem('addedCoffee', JSON.stringify(itemsArray))
// var data = JSON.parse(window.localStorage.getItem('addedCoffee'))



//  <==================================== ADD COFFEE ====================================>
var createCoffee = document.querySelector('#submit');
createCoffee.addEventListener('click', function (e) {
    e.preventDefault();
    var addCoffeeRoast = document.getElementById("add-coffee");
    var newCoffeeName = document.getElementById('newInput');

    if (newCoffeeName !== ""){
        newCoffee(addCoffeeRoast.value, newCoffeeName.value);
        updateCoffees();
    }
});


//  <==================================== RENDERING COFFEES ====================================>
function renderCoffee(coffee) {
    var html = '<div class="coffee">';
    html += '<h2>' + coffee.name + '</h2>';
    html += '<p>' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for (var i = 0; i < coffees.length; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}


//  <============================= FILTER COFFEES AND SEARCH INPUT =============================>
var updateCoffees = function () {
    // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var userSelectedCoffee = userSelection.value;
    var filteredCoffees = [];

    coffees.forEach(function (coffee) {
        if ((coffee.roast === selectedRoast) || selectedRoast === 'All') {
            if (coffee.name.toLowerCase().includes(userSelectedCoffee.toLowerCase())){
                filteredCoffees.push(coffee);
            }
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
};


//  <==================================== CREATE NEW COFFEE ====================================>

var newCoffee = function (type, name) {
    var newCoffeeObj = {id: coffees.length + 1, name: name, roast: type};
    console.log(newCoffeeObj);
    coffees.push(newCoffeeObj);
    itemsArray.push(newCoffeeObj);
    console.log(coffees);
    // var storeAddedCoffee = window.localStorage.setItem('newCoffee', JSON.stringify(newCoffeeObj))
    // console.log(storeAddedCoffee)
    // var newData = JSON.parse(window.localStorage.getItem('newCoffee'))
};


//  <==================================== COFFEE TABLE ====================================>
// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'Light'},
    {id: 2, name: 'Half City', roast: 'Light'},
    {id: 3, name: 'Cinnamon', roast: 'Light'},
    {id: 4, name: 'City', roast: 'Medium'},
    {id: 5, name: 'American', roast: 'Medium'},
    {id: 6, name: 'Breakfast', roast: 'Medium'},
    {id: 7, name: 'High', roast: 'Dark'},
    {id: 8, name: 'Continental', roast: 'Dark'},
    {id: 9, name: 'New Orleans', roast: 'Dark'},
    {id: 10, name: 'European', roast: 'Dark'},
    {id: 11, name: 'Espresso', roast: 'Dark'},
    {id: 12, name: 'Viennese', roast: 'Dark'},
    {id: 13, name: 'Italian', roast: 'Dark'},
    {id: 14, name: 'French', roast: 'Dark'},
];
tbody.innerHTML = renderCoffees(coffees);


//  <================================== COFFEE EVENT LISTENERS ==================================>
// var submitButton = document.querySelector('#submit');
// submitButton.addEventListener('click', updateCoffees);

roastSelection.addEventListener('change', updateCoffees);
userSelection.addEventListener("keyup", function () {
    updateCoffees(userSelection.value);
});


