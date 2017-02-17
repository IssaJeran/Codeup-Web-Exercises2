"use strict";

var myNameIs = 'Jeran'; // TODO: Fill in your name here.

	function sayHello(name) {
		console.log("Hello from " + name);
	}

	sayHello(myNameIs);

// TODO:
// Create a function called 'sayHello' that takes a parameter 'name'.
// When called, the function should log a message that says hello from the passed in name.

// TODO: Call the function 'sayHello' passing the variable 'myNameIs' as a parameter.

// Don't modify the following line
// It generates a random number between 1 and 100 and stores it in random


// TODO:
// Create a function called 'isOdd' that takes a number as a parameter.
// The function should use the ternary operator to log a message.
// The log should tell the number passed in and whether it is odd or not.

// TODO: Call the function 'isOdd' passing the variable 'random' as a parameter.

var random = Math.floor((Math.random()*100)+1);
	function isOdd(number) {
		var message;
	 	var message = (number % 2 == 0) ? number + " is even" : number + " is odd";
	 	console.log(message)
	}



	isOdd(random);


	function isOdd(number) {
		var result;

		if(number % 2 == 0){
			result = false;
		} else {
			result = true;
		}
		return result;
	}

	if(isOdd(random)){
		console.log(random + " is odd");
	} else {
		console.log(random + " is even");
	}

	if(isOdd(1)) {
		console.log("One is the loneliest number and it's odd")
	}