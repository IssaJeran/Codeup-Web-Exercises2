"use strict";
(function () {

	var myNameIs = 'Jeran'; 
	function sayHello(name) {
		console.log("Hello from " + name);
	}

	sayHello(myNameIs);



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
})();