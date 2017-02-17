'use strict';

var random = Math.floor((Math.random()*50)+1);
console.log('Random odd number to skip is: ' + random);

	for (var i = 1; i <= 50; i+=2) {
		if (random == i) {
	 	console.log('Yikes! Skipping Number: ' + i);
	 	} else {
	 	console.log("Here is an odd number " + i);
	}
 }
	
	




