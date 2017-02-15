// GRADE CONVERTER

    var grade1 = 70,
        grade2 = 80,
        grade3 = 95,
        numberOfGrades = 3,
        gradeAverage = (grade1 + grade2 + grade3) / numberOfGrades;

    if (gradeAverage > 80) {
        console.log("You're awesome!");
    } else {
        console.log("You need to practice more.");
    }


    // GROCERY DISCOUNT

    var customer = null,
        cost = null,
        totalCost = null,
        discount = .35,
        discountMessage = "";

    var cameronTotal = 180,
        ryanTotal = 250,
        georgeTotal = 320;

    var cameron = "Cameron",
        ryan = "Ryan",
        george = "George";


    customer = cameron;
    cost = cameronTotal;

    if (cost > 200) {
        totalCost = cost - cost * discount;
        discountMessage = "Discount was applied.";
    } else {
        totalCost = cost;
        discountMessage = "No discount was applied.";
    }
    console.log(customer + " bought " + "$" + cost.toFixed(2) + ". " + discountMessage + " Final payment: $" + totalCost.toFixed(2));


    customer = ryan;
    cost = ryanTotal;

    if (cost > 200) {
        totalCost = cost - cost * discount;
        discountMessage = "Discount was applied.";
    } else {
        totalCost = cost;
        discountMessage = "No discount was applied.";
    }
    console.log(customer + " bought " + "$" + cost.toFixed(2) + ". " + discountMessage + " Final payment: $" + totalCost.toFixed(2));


    customer = george;
    cost = georgeTotal;

    if (cost > 200) {
        totalCost = cost - cost * discount;
        discountMessage = "Discount was applied.";
    } else {
        totalCost = cost;
        discountMessage = "No discount was applied.";
    }
    console.log(customer + " bought " + "$" + cost.toFixed(2) + ". " + discountMessage + " Final payment: $" + totalCost.toFixed(2));


    // COIN FLIP

    var flipACoin = Math.floor(Math.random()* 2);

    var outcome = (flipACoin) ? "Buy a car." : "Buy a house.";

    console.log(outcome);