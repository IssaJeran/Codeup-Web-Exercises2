'use strict';

var random = Math.floor((Math.random()*50)+1);

 
console.log('Random odd number to skip is: ' + random);

	for (var i = 1; i < 50; i++) {
		if (i % 2 !== 0) {
		continue;
		
		if (i % 2 == 0) {
		console.log('Here is an odd number: ' + i);

		 if (i == random) {
		 	console.log('Yikes! Skipping Number: ' + i)
		 	continue;
		 }}}}
        
'use strict';

var random = Math.floor((Math.random()*50)+1);

 
console.log('Random odd number to skip is: ' + random);

	for (var i = 1; i < 50; i++) {
		if (i % 2 !== 0) {
		continue;
		
		if (i % 2 == 0) {
		console.log('Here is an odd number: ' + i);

		 if (i == random) {
		 	console.log('Yikes! Skipping Number: ' + i)
		 	continue;
		 }}}}