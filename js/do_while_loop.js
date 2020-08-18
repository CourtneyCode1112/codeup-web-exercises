// This is how you get a random number between 50 and 100
let allCones = Math.floor(Math.random() * 50) + 50;
// This expression will generate a random number between 1 and 5


let iceCreamConeSales = function() {
    do {
        let customerCones = Math.floor(Math.random() * 5) + 1;
        if (allCones === 0) {
            console.log("Yay, I sold them all!");
            break;
        } else if (allCones < customerCones && allCones > 0) {
                console.log("Cannot sell you " + customerCones + " cones. I only have " + allCones + " left");
                break;
        } else if (allCones > 0) {
            console.log(customerCones + " cones sold.");
            allCones = allCones - customerCones;
        }
    } while (allCones > 0);
}

iceCreamConeSales();