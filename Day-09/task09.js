/**Task 01 */

{
  console.log(usingVar); //undefined
  var usingVar = "I am var keyword";
  console.log(usingLet); //ReferenceError
  let usingLet = "I am var keyword";
  console.log(usingConst); //ReferenceError
  let usingConst = "I am var keyword";
}

//The Temporal Dead Zone (TDZ) is the period between a variable’s hoisting and its initialization.During this time, variables declared with let and const exist in memory but cannot be accessed.Only variables declared with var are accessible before initialization, and their value is undefined.

/**Task 02 */
// Example of Variable
console.log(a); // Output: undefined (var is hoisted)
var a = 10;

//Example of Function Hoisting
greet(); // Output: Hello, I am hoisted!

function greet() {
  console.log("Hello, I am hoisted!");
}

//Hoisting means the Creation Phase in the Execution Context (EC), whether it is the Global Execution Context (GEC) or a Function Execution Context (FEC).During this phase, JavaScript creates memory space for variables and functions before executing the code.

//If a variable’s memory is created before execution, it is called Variable Hoisting.
//If a function’s memory is created before execution, it is called Function Hoisting.