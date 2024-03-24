//enhanced laptop object: construct an object for a laptop including properties make,
//module,year,nd a method describe() that logs a sentence about the laptop




let laptop = {
    make: "Dell",
    model: "XP 16",
    year: 2020,
    describe: function(){
        console.log(`This laptop isa ${this.year} ${this.make} ${this.model}.`);
    }
};
laptop.describe();

//advanced array destructuring different laptops,each with properties make,model,
//nd year,use array destructuring to assign the first nd second laptops to
//variables.then,log these variable.

let laptops = [
    { make: "Dell", model: "XPS 15", year: 2020},
    {make: "APPLE", model: "MACBook pro", year: 2021},
    {make: "HP", model: "spectre x360", year: 2022},
]; 

let [laptop1, laptop2, laptop3] = laptops;

console.log(laptop1);
console.log(laptop2);
console.log(laptop3);

//combing arrays with spread operator: suppose youre comparing prices of two differnt
//laptops use the spread operator to combine these arrys into a single array 
//sorted in ascending order, then log the result

let priceSet1 = [1200, 1500, 1100];
let priceSet2 = [1000, 13000, 1600];
let combinedPrices = [...priceSet1, ...priceSet2].sort((a,b) => a-b);

console.log(combinedPrices);

//function with rest parameters: write a function that makes a rest parameter
//representing multiple hobbies.it should log each hobbywith  a statement
//saying you enjoy that hobby.

//Defines a function that accepts multiple hobbies as arguments
function logHobbies(...hobbies: string[]){
    //loops through each hobby in the array
    hobbies.forEach(hobby => {
        //log a statement of each hobby
        console.log(`I enjoy ${hobby}.`);

    });
}

//calling a function with 3 hobbies
logHobbies("cooking", "coding", "shopping");

//multiple template literals:use template literals to create a multiline 
//string that descibes your ideal day.include at least three different activities

//Using template literals to define a multilinestring
let myIdealDay = `my ideal day would involve:
1. waking up early AND do exercise
2. doing coding
3. cooking new food recipes;`

//logging the multiline string to console
console.log(myIdealDay);