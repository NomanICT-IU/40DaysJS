

let num1 = 10;
let num2 = 5;
let operator = "+"; 

let result;

switch (operator) {
  case "+":
    result = num1 + num2;
    break;

  case "-":
    result = num1 - num2;
    break;

  case "/":
    result = num1 / num2;
    break;

  case "%":
    result = num1 % num2;
    break;

  default:
    console.log("Invalid operator!");
    break;
}

console.log(`Result: ${result}`);