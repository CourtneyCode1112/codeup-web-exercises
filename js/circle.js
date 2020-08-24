(function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 3,

        getArea: function () {
            // TODO: complete this method
            // hint: area = pi * radius^2
            var areaOfCircle = Math.PI * Math.pow(circle.radius, 2)
            return areaOfCircle; // TODO: return the proper value
        },

        logInfo: function (doRounding) {
            // TODO: complete this method.
            if (doRounding === true) {
                circle.area = Math.round(this.getArea());
                console.log("Area of a circle with radius: " + circle.radius + ", is: " + circle.area);
            } else {
                circle.area = this.getArea();
                console.log("Area of a circle with radius: " + circle.radius + ", is: " + circle.area);
            }
        },
            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value
    };

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.
    circle.radius = 5;
    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();
