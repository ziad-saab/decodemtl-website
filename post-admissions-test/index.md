//1. Declare a variable "firstName"

var firstName;



//2. Assign the "firstName" variable the value of "Scooby"

var firstName = "Scooby";


//3. Declare a variable "lastName" and assign it the value of "Doo"


var lastName = "Doo";


//4. Use console.log() to display the string "Where are you Scooby Doo?". Make sure to use the variables firstName and lastName.


console.log("Where are you " + firstName + lastName + "?");


//5. Create an empty object "greeting"

var greeting = {};


//6. Assign the greeting object the properties "firstName" and "lastName" and set their values to the variables declared above


var greeting = {
firstName: "Scooby",
lastName: "Doo"
};


//7. Assign the "greeting" object a method "greet". The method should return the string "Where are you Scooby Doo?". The method must make use of the objects firstName and lastName properties to display the string.

greeting.greet = function () {
var sentence = console.log("Where are you " + greeting.firstName + greeting.lastName + "?");
return sentence;
}


//8. Create and empty array "names"

var names = [];


//9. Push three of your favorite cartoon characters names to that array.

names.push("Scooby Doo");
names.push("Square Bob");
names.push("Batman");

//10. Assign a property "names" to our "greeting" object and set its value to the "names" array.

greeting.names = names;


//11. Assign a property "greetAll" to the "greeting" object and set its value to a method that loops over all the names in the "names" property of the object and for each name displays to the console the message "Hello " + the name.

greeting.greetAll = function () {
for (var i=0; i<names.length; i++) {
console.log("Hello " + names[i]);
};


//13. Create a function that takes two numbers and returns the largest one. Use an "if" statement.

var bigNumber = function (a,b) {
if (a > b) {
return a
}
else if (a < b) {
return b
}
else {
return "Not a number";
}
};
console.log(bigNumber(2,4);

//14. Create a function that takes two numbers "a , b" and returns the string "Hello Mars!" if "a" is smaller than "b" OR "a" = "0". Use an if statement.

var string = function (a,b) {
if (a < b || a===0) {
return "Hello Mars!";
}
else {
return "Your first number is bigger than the second one";
}
};
console.log(string(1,2));