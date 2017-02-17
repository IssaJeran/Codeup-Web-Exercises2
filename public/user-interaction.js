'use strict';

function getName() {
	var name = prompt("Please input your name");

	if(name == "" || !isNaN(name)) {
		return getName();
	} else {
		alert("Welcome " + name + " it's been too long.");
	}
}
	function likePizza() {
		var response = prompt("Do you like pizza?");
		if(response == "yes"){
		alert("That is wonderful you said ' + response + '. Pizza is great!!");
	}	else {
		alert("Your answer: " + response + " was terrible. How do you not love pizza!?");
	}
}

	

// TODO: Ask the user for their name.
//       Keep asking if an empty input is provided.

// TODO: Show an alert message that welcomes the user based on their input.

// TODO: Ask the user if they like pizza.
//       Based on their answer show a creative alert message.