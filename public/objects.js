 "use strict";

 var person = {};
 person.firstName = "Jeran";
 person.lastName = "Smith";

 person.sayHello = function () {
 	alert('Hello my name is ' + person.firstName + " " + person.lastName);
 };
    
 person.sayHello();