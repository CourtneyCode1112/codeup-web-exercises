// var input = document.getElementById("newInput").value;
// localStorage.setItem("server", input);

// Get form, item, and wishlist
var addToCoffeeList = document.querySelector('#addNewCoffee');
var newCoffeeItem = document.querySelector('#newCoffeeItem');
var newCoffeeList = document.querySelector('#checkNewCoffee');

addToCoffeeList.addEventListener('submit', function (event) {

    // Don't submit the form
    event.preventDefault();

    // Ignore it if the wishlist item is empty
    if (newCoffeeItem.value.length < 1) return;

    // Add item to wishlist
    newCoffeeList.innerHTML += '<li>' + newCoffeeItem.value + '</li>';

    // Clear input
    newCoffeeItem.value = '';

    // Save the list to localStorage
    localStorage.setItem('newCoffeeItem', newCoffeeList.innerHTML);

}, false);

// Check for saved wishlist items
var saved = localStorage.getItem('newCoffeeItem');

// If there are any saved items, update our list
if (saved) {
    newCoffeeList.innerHTML = saved;
}