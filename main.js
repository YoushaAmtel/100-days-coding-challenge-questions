//enhanced laptop object: construct an object for a laptop including properties make,
//module,year,nd a method describe() that logs a sentence about the laptop
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var laptop = {
    make: "Dell",
    model: "XP 16",
    year: 2020,
    describe: function () {
        console.log("This laptop isa ".concat(this.year, " ").concat(this.make, " ").concat(this.model, "."));
    }
};
laptop.describe();
//advanced array destructuring different laptops,each with properties make,model,
//nd year,use array destructuring to assign the first nd second laptops to
//variables.then,log these variable.
var laptops = [
    { make: "Dell", model: "XPS 15", year: 2020 },
    { make: "APPLE", model: "MACBook pro", year: 2021 },
    { make: "HP", model: "spectre x360", year: 2022 },
];
var laptop1 = laptops[0], laptop2 = laptops[1], laptop3 = laptops[2];
console.log(laptop1);
console.log(laptop2);
console.log(laptop3);
//combing arrays with spread operator: suppose youre comparing prices of two differnt
//laptops use the spread operator to combine these arrys into a single array 
//sorted in ascending order, then log the result
var priceSet1 = [1200, 1500, 1100];
var priceSet2 = [1000, 13000, 1600];
var combinedPrices = __spreadArray(__spreadArray([], priceSet1, true), priceSet2, true).sort(function (a, b) { return a - b; });
console.log(combinedPrices);
//function with rest parameters: write a function that makes a rest parameter
//representing multiple hobbies.it should log each hobbywith  a statement
//saying you enjoy that hobby.
//Defines a function that accepts multiple hobbies as arguments
function logHobbies() {
    var hobbies = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        hobbies[_i] = arguments[_i];
    }
    //loops through each hobby in the array
    hobbies.forEach(function (hobby) {
        //log a statement of each hobby
        console.log("I enjoy ".concat(hobby, "."));
    });
}
//calling a function with 3 hobbies
logHobbies("cooking", "coding", "shopping");
//multiple template literals:use template literals to create a multiline 
//string that descibes your ideal day.include at least three different activities
//Using template literals to define a multilinestring
var myIdealDay = "my ideal day would involve:\n1. waking up early AND do exercise\n2. doing coding\n3. cooking new food recipes;";
//logging the multiline string to console
console.log(myIdealDay);
