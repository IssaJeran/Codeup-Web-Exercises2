// WALMART CHECKOUT

var luckyNumber = Math.floor(Math.random() * 6),
	receipt = 60,
	total = null;

console.log("Your lucky number is: " + luckyNumber);

switch (luckyNumber) {
	case 0:
		total = receipt;
		break;
	case 1:
		total = receipt - (receipt * .1);
		break;
	case 2:
		total = receipt - (receipt * .25);
		break;
	case 3:
		total = receipt - (receipt * .35);
		break;
	case 4:
		total = receipt - (receipt * .5);
		break;
	case 5:
		total = 0;
		break;
	default:
		console.log("Something went wrong.")
}
console.log("Your price is $" + total.toFixed(2));


// NUMBER-TO-MONTH CONVERTER

var number = 1;

switch (number) {
	case 1:
		console.log("January");
		break;
	case 2:
		console.log("February");
		break;
	case 3:
		console.log("March");
		break;
	case 4:
		console.log("April");
		break;
	case 5:
		console.log("May");
		break;
	case 6:
		console.log("June");
		break;
	case 7:
		console.log("July");
		break;
	case 8:
		console.log("August");
		break;
	case 9:
		console.log("September");
		break;
	case 10:
		console.log("October");
		break;
	case 11:
		console.log("November");
		break;
	case 12:
		console.log("December");
		break;
	default:
		console.log("Number not between 1 and 12");
}