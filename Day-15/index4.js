/** T-049: Given the array-like object below, access the second element and log it: */
const arrayLike = { 0: "First", 1: "Second", length: 2 };
console.log(Array.from(arrayLike)[1]); // Second

/**T-050: Write a function that takes a variable number of arguments and converts the arguments object into a real array using Array.from. */

function numberOfArguments() {
  let total = 0;
  Array.from(arguments).forEach((value) => (total += value));
  return total;
}

const sum = numberOfArguments(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log("Summation of these arguments :", sum); //Summation of these arguments : 55

/** T-052: Merge these two arrays into a single array: */
const arr1 = [1, 2];
const arr2 = [3, 4];

console.log("Marge array :", [...arr1, ...arr2]); //Marge array : [ 1, 2, 3, 4 ]

/** T-053: Create an array of n duplicate values using Array.from. Input: Create an array with 5 "A" values. Output: ["A", "A", "A", "A", "A"] */
const n = 5;
const duplicateArray = Array.from({ length: n }, () => "A");

console.log(duplicateArray); //[ 'A', 'A', 'A', 'A', 'A' ]

/** T-054: Use Array.from to convert a string like "Hello" into an array of characters. */
let str = "Hello";
console.log("Convert string to Array: ", Array.from(str)); //Convert string to Array:  [ 'H', 'e', 'l', 'l', 'o' ]

/**T-055: For the array, ['apple', 'banana', 'apricot', 'mango', 'blueberry'], group words by their first letter using group(). */
const fruits = ["apple", "banana", "apricot", "mango", "blueberry"];

const groupedFruits = fruits.reduce((acc, fruit) => {
  const key = fruit[0];
  if (!acc[key]) {
    acc[key] = [];
  }
  acc[key].push(fruit);
  return acc;
}, {});

console.log(groupedFruits); //{ a: [ 'apple', 'apricot' ],b: [ 'banana', 'blueberry' ],m: [ 'mango' ]}

/**T-057: From this array [3, 7, 3, 2, 3, 8, 7, 7], find the most repeated number. Hint: Use array method. */
const numbers = [3, 7, 3, 2, 3, 8, 7, 7];
const count = numbers.reduce((acc, num) => {
  acc[num] = (acc[num] || 0) + 1;
  return acc;
}, {});
const maxFreq = Math.max(...Object.values(count));
const mostRepeatedNumbers = Object.entries(count)
  .filter(([num, freq]) => freq === maxFreq)
  .map(([num]) => Number(num));
console.log(
  `Most repeated number(s): ${mostRepeatedNumbers} (appeared ${maxFreq} times)` );//Most repeated number(s): 3,7 (appeared 3 times)


/** T-058: Find the median of [5, 2, 9, 1, 3, 6, 8].*/
const numberArray = [5, 2, 9, 1, 3, 6, 8].sort((a, b) =>
  a === b ? 0 : a > b ? 1 : -1
);
const length = numberArray.length;
const medianNumber = numberArray[Math.floor(length / 2)];
console.log("The medina Number is :", medianNumber); //The medina Number is : 5

/**T-059: Convert this array [['a', 1], ['b', 2], ['c', 3]], into { a: 1, b: 2, c: 3 } using array method(s). */
const nestedArray = [
  ["a", 1],
  ["b", 2],
  ["c", 3],
];
const nestedArrayToObject = nestedArray.reduce((acc, [index, value]) => {
  acc[index] = value;
  return acc;
}, {});

console.log(nestedArrayToObject); //{ a: 1, b: 2, c: 3 }

/**T-060: Flatten and convert all letters to uppercase in one step using flatMap(). Here is input array: [['a', 'b'], ['c', 'd']]. */
const input = [
  ["a", "b"],
  ["c", "d"],
];

const result = input
  .flatMap((innerArray) => innerArray)
  .map((value) => value.toLocaleUpperCase());
console.log(result); //[ 'A', 'B', 'C', 'D' ]

/** T-061: Count the occurrences of each fruit in this array: ['apple', 'banana', 'apple', 'mango', 'banana', 'banana'] */
const fruitsArray = ["apple", "banana", "apple", "mango", "banana", "banana"];
const countTheOccurrences = fruitsArray.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});
console.log(countTheOccurrences); //{ apple: 2, banana: 3, mango: 1 }

/** T-062: Extract extract [‘b’, ‘c’, ‘d’] using slice() from this array: ['a', 'b', 'c', 'd', 'e'] */
const originalArray = ["a", "b", "c", "d", "e"];
const sliceArray = originalArray.slice(1, 4);
console.log(sliceArray); //[ 'b', 'c', 'd' ]

/** T-063: Sort the array [9, 3, 1, 6, 8] in ascending order using toSorted() */
const givenNumbers = [9, 3, 1, 6, 8];
const sortedNumbers = givenNumbers.sort((a, b) =>
  a === b ? 0 : a > b ? 1 : -1
);

console.log("The array of sorted Numbers: ", sortedNumbers); //The array of sorted Numbers:  [ 1, 3, 6, 8, 9 ]

/**T-064: Reverse [1, 2, 3, 4, 5] using toReversed() and compare it with reverse() */
const givenArray = [1, 2, 3, 4, 5];
console.log("Reverse Array", givenArray.reverse()); //Reverse Array [ 5, 4, 3, 2, 1 ]
console.log("givenArray", givenArray); //givenArray [ 5, 4, 3, 2, 1 ] change original array

const givenArray1 = [1, 2, 3, 4, 5];
console.log("Reverse Array using toReverse() :", givenArray1.toReversed()); //Reverse Array using toReverse() : [ 5, 4, 3, 2, 1 ]
console.log("givenArray1", givenArray1); //givenArray [ 1, 2, 3, 4, 5 ] // original array remain unchanged

/** T-065: Group the following array elements based on age(Adult vs Non-Adult): */

const users = [
  { name: "Alice", age: 55 },
  { name: "Bob", age: 3 },
  { name: "Charlie", age: 25 },
];

const groupedByAge = users.reduce((acc, user) => {
  const key = user.age >= 18 ? "Adult" : "Non-Adult";
  if (!acc[key]) acc[key] = [];
  acc[key].push(user);
  return acc;
}, {});

console.log(groupedByAge); 
//{ Adult: [ { name: 'Alice', age: 55 }, { name: 'Charlie', age: 25 } ],'Non-Adult': [ { name: 'Bob', age: 3 } ]}

/** T-066: Find the longest word in this sentence using Array and Array methods: "40 Days of JavaScript by tapaScript is a powerful initiative". */
const str1 = "40 Days of JavaScript by tapaScript is a powerful initiative";
const strArray = str1.split(" ");

const strArrToNumArr = strArray.map((element) => element.length);
const maxLength = Math.max(...strArrToNumArr);

const index = strArrToNumArr
  .map((v, i) => {
    return v === maxLength ? i : -1;
  })
  .filter((i) => i !== -1);

console.log(
  `The length of longest word in this sentence is ${maxLength} and the word are given bellow: `
);
index.forEach((v) => console.log(` ${strArray[v]}`));
// The length of longest word in this sentence is 10 and the word are given bellow:
//  JavaScript
//  tapaScript
//  initiative

/** T-067: Find common elements between two arrays, [1, 2, 3, 4], [3, 4, 5, 6] */

const array1 = [1, 2, 3, 4];
const array2 = [3, 4, 5, 6];

const mergeArray = [...array1, ...array2];
console.log(mergeArray);

const commonElement = mergeArray.filter((value, index, self) => {
  return self.indexOf(value) !== index;
});
console.log("common elements between two arrays : ", commonElement);//common elements between two arrays :  [ 3, 4 ]
