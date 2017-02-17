(function(){
    "use strict";

    // TODO: Create an array holding the names of the eight planets in our solar system in order, starting closest to the sun.
    
    var planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];
    var planetString = "Mercury,Venus,Earth,Mars,Jupiter,Saturn,Uranus,Neptune"; 

    var planetArray = planetString.split(",");

    var unorderedList = "<ul><li>";

    unorderedList += planetArray.join("</li><li>");

    unorderedList += "</li></ul>";


})
