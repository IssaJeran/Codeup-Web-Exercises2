"use strict";
(function () {

    var circle = {
        radius: 3,
        area: Math.PI * 3 * 2,
        getArea: function () {
            return area;
        },
        logInfo: function() {
                 if ((Math.PI * 3 * 2) % 2 == 0) {
                    console.log("Raw Circle Information: " + circle.area);
                } else {
                    console.log("Circle Information rounded to nearest whole number: " + Math.round(circle.area));
                }
            }
         };
                

    // log info about the circle

    console.log("=======================================================");
    //change radius of circle to 5
    
    
   


    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
    })();
