/**Task 1: Declare variables for a person’s name, age, isStudent status, and favorite programming language */
let personName = "Abdullah Al Noman";
let age = 26;
let isStudent = true;
const FavoriteProgrammingLanguage = "JavaScript";

/** Task 2: Print the values to the console. */
console.log(`Person name is : ${personName}`);
console.log(`Person age is : ${age}`);
console.log(`Status : ${isStudent}`);
console.log(`Favorite Programming language : ${FavoriteProgrammingLanguage}`);

/** Task 3: Try reassigning values to let and const variables and observe errors. */
personName = " Noman";
age = 30;
isStudent = false;
// FavoriteProgrammingLanguage = "JS"; // can't reassign

console.log(`Person name is : ${personName}`);
console.log(`Person age is : ${age}`);
console.log(`Status : ${isStudent}`);
console.log(`Favorite Programming Language : ${FavoriteProgrammingLanguage}`);

/** Task 4: Create an object and an array, assign them to new variables, modify, and observe changes. */

/**Object Observation */
const personObj = {
  personName: "Abdullah Al Noman",
  age: 26,
  isStudent: true,
  FavoriteProgrammingLanguage: "JavaScript",
};

console.log(`Name before modified obj. : ${personObj.personName}`); //Abdullah Al Noman
personObj["personName"] = "Noman";
// The original object can be modified.
console.log(`Name after modified obj. : ${personObj.personName}`); //Noman



/**Array Observation */
const personArr = ["Abdullah Al Noman", 26, true, "JavaScript"];
console.log(`Name before modified obj. : ${personArr[0]}`); //Abdullah Al Noman
personArr[0] = "Noman";
// The original Array can be modified.
console.log(`Name after modified obj. : ${personArr[0]}`); //Noman
