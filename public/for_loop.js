'use strict';

var i;
var randomNumber;
var returnMessage = "";
var int;

for(i = 100; i >= 5; i = i - 5){
	console.log(i);
}

var multiplyTable;
var message;
var randomTableNumber = Math.floor(Math.random()* 11);
	for(i = 1; i <= 10; i++){
		console.log(randomTableNumber + "x" + i + "=" + randomTableNumber *i);
}

var totalNumbers = new Array(10);
    for(i = 0; i < totalNumbers.length; i++) {
     randomNumber = Math.floor(Math.random()*(181) + 20);
     if (randomNumber % 2 !== 0){
		returnMessage = " is odd.";
	}
     else {
    	returnMessage = " is even.";
    }
    	console.log(randomNumber + returnMessage);
    }



var numberOutput =1;
for (var i = 1; i <=10; i++) {
	numberOutput = (i % 10);
	for (var j = 1; j < i; j++) {
		numberOutput += String((i % 10));
	}
	console.log(numberOutput);
}










	




