(function(){
    "use strict";

   	var names = ['Rome', 'Yoshi', 'Tommy', 'Bankreaux'];

    for (var i = 0; i < names.length; i++) {
        console.log("Hello my name is " + names[i] + ".");
    }

 		names.forEach(function(element, index, array) {
        console.log("Hello my name is " + element + ".");
    });

    for (var i = 0; i <= names.length; i++) {
        console.log(names[i]);
    }    

    names.forEach(function(element, index, array) {
        element = "length";
        console.log(array);
    });

    // TODO: Create log statements that will print each of the names array elements individually.

	console.log('There are ' + names.length + ' characters in the name');


	console.log('The first name is: ' + names[0]);


	console.log('The second name is: ' + names[1]);


	console.log('The third name is: ' + names[2]);

		
	console.log('The fourth name is: ' + names[3]);
})();