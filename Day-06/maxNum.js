function findMax(num1, num2) {
  let result = num1 > num2 ? num1 : num2;
  return result;
}
let result = findMax(-10, -15);
console.log(`The ${result} is larger of the two numbers`);
