//QUESTION : 46

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

//QUESTION :47

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

//QUESTION: 48

//combing arrays with spread operator: suppose youre comparing prices of two differnt
//laptops use the spread operator to combine these arrys into a single array 
//sorted in ascending order, then log the result

let priceSet1 = [1200, 1500, 1100];
let priceSet2 = [1000, 13000, 1600];
let combinedPrices = [...priceSet1, ...priceSet2].sort((a,b) => a-b);

console.log(combinedPrices);

//QUESTION :49

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

//QUESTION :50

//multiple template literals:use template literals to create a multiline 
//string that descibes your ideal day.include at least three different activities

//Using template literals to define a multilinestring
let myIdealDay = `my ideal day would involve:
1. waking up early AND do exercise
2. doing coding
3. cooking new food recipes;`

//logging the multiline string to console
console.log(myIdealDay);

//QUESTION :51

//Refactoring to arrow functions.take a simple function that calculates the area of a 
//rectangle and refactor it into an arrow function.

//original function for calculating the area of a rectamgle
function calculateArea(width:number, height: number): number {
    return width * height;
}
 //Refactored into an arrow function
 let calculateAreaArrow = (width: number, height: number): number =>
 width * height;

//Example usage of the arrow function
console.log(calculateAreaArrow(5,7)); //logs the area of the rectanglee


//QUESTION : 52
//Makes a smartphone object :create a simple way to keep track ofa smartphone
//details. include its brand,model,and other key features like how much storage it has,the size of its screen
//and how long its battery lasts.

//sets up details about a smartphone 
//let smartphone = {
    //make: "oppo",
    //model: "A52020",
    //specs: {
        //storage: "128GB",
      //  ScreenSize: "5.6 inches",
    //    batterylife: "24hours"
  //  }
//};

//shows what we are set up about my smartphone
//console.log(smartphone)

//QUESTION : 53
//Pulling apart a nested object:imagine you have a list inside another list
//that shows what a computer programmer knows, likes coding languages,tools 
// and softwear frameworks. find a way to get three specific skills from list
//and show them

//A list showing a programmer's skills in detail
//let developerskills = {
    //languages: ["JavaScript", "TypeScript", "Python"],
    //Frameworks: ["React", "Angular", "vue"],
  //  tools: ["Git", "Webpack", "Docker"],
//}; 
//Getting specific skilss from the list
//let{ languages, Frameworks, tools } = developerskills;

//showing a skill from each category
//console.log(`languages: ${languages[0]}, Frameworks: ${Frameworks[0]}, tools: 
//${tools[0]}`)

//QUESTION : 54
//Making flexible object keys: learn how to setup a list where you can change
//the name of each section based on what you need at that moment,like adjusting
//labels based on user choices


//way to make a flexible list function
 
//function dynamicObjectWithKey(key: string, value: string){
    //let dynamicObject = {};
    //setting up a section in the list with a changeable name dynamic object

  //  return dynamicObject;
//}
//using the flexible list setup for a user prefence
 
//let dynamicObjectStore = dynamicObjectWithKey("theme", "dark");
//console.log(dynamicObjectStore);

//QUESTION : 55
//Double Numbers in an array : make a list of numbers.then use a trick to make
//a new list where each number is twice its orignal value.

//Starts with a list of numbers 
let numbers = [1,2,3,4,5,6,7];
//Double each number
let doubledNumbers = numbers.map(number => number * 2);

//shows the new list of doubled numbers 
console.log(doubledNumbers);//output: [2,4,6,8,10,12,14]

//QUESTION : 56
//Keep only Strings:Given a mix of differnt types of items,make a new list that
//that has only the words.

//A Mixed bag of items 
//let mixedArray = [1, "pizza", 2,"tikka", 3,"biryani" ,true, "carrot"];

//picks out only the words
//let stringsArray = mixedArray.filter(item => Typesofitem === "string" );
//show list of words
//console.log(stringsArray);//
//output: ["pizza", "tikka", "biryani", "carrot"]


//QUESTION : 57
//Find the Average Grade: Given a list of grades, calculate the average grade.

//A list of grades
let grades = [56,79,86,99,54];
//Calculates the average grades 
let averageGrades = grades.reduce((total,gardes) => total + gardes, 0) /grades.length
//shows tha average grade 
console.log(averageGrades);

//QUESTION : 58
//Average score Calculator : write a simple program that can take alots
//of scores and find their averages.

//This progarm calculate the average of all scores given
function averageScore(...scores: number[]): number{
    //Adds all scores toghether and divide by the number of scores
    let total = scores.reduce((sum, score) => sum + score, 0);
    return total /scores.length;
}
console.log(averageScore(80,90,60,50));
//SHOW the average score 
//we add up all the score ,then divide by how many there are

//QUESTION :59
//Add a special Number: make a program that create castom  adders.
//these adders can add a specific number to any other number you give them later.

////This program makes a function that adds a specific number
function makeAdder(valueToAdd:number): (Number) => number{
    //this is a magic box.it takes a number and adds your specialnumber to it
    return function(number:number): number{
        return number + valueToAdd;
    };
}
let addFive = makeAdder(5);
console.log(addFive(10));

//QUESTION :60
//Self running user profile:create a quick,self setup prifile for a user
//that can tell you the user's name and age.

//This profile sets itself up and can share info about the user
let userProfile = (function(){
    //user details
    let name = "yousha";
    let age = 26;
    //share user details
    return{
        dispalyInfo: function(){
            console.log(`name: ${name}, age: ${age}`);
        }
    };
})();
userProfile.dispalyInfo();


