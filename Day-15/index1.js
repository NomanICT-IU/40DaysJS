/**T-001: Create an array of 5 elements using the Array Constructor. */
const arrCons = new Array(1, 2, 3, 4, 5);
console.log(`The array are created using Array Constructor : ${arrCons}`); // [ 1, 2, 3, 4, 5 ]

/** T-002: Create an array of 3 empty slots. */
const emptyArr = new Array(3);
console.log(`Creating an array with 3 empty slots ${emptyArr}`); // [ <3 empty items> ]

/** T-003: Create an array of 6 elements using the Array literals and access the fourth element in the array using its length property.*/
const arr = [1, 2, 3, 4, 5, 6];
console.log("The array are created with 6 element using Array literals :", arr);
console.log(
  `the fourth element in the array using its length property is : ${
    arr[arr.length - 3]
  }`
);

/** T-004: Use the for loop on the above array to print elements in the odd index.*/
for (let i = 0; i < arr.length; i++) {
  if (i % 2 === 1) {
    console.log(`The element od odd index are : ${arr[i]}`);
  }
}

/** T-005: Add one element at the front and the end of an array.*/

arr.unshift(0);
console.log("Add one element at the front of [1,2,3,4,5,6] :", arr);
arr.push(7);
console.log("Add one element at the end of [0,1,2,3,4,5,6] :", arr);

/** T-006: Remove an element from the front and the end of an array.*/
const arr1 = [1, 2, 3, 4, 5, 6];
arr1.shift();
console.log("Remove one element at the front of [1,2,3,4,5,6] :", arr1);
arr1.pop();
console.log("Remove one element at the end of [2,3,4,5,6] :", arr1);

/** T-007: Create an array containing the name of your favourite foods(10 foods). Destructure the 6th food element from the array using destructuring.*/

const favoriteFoods = [
  "Pizza",
  "Burger",
  "Pasta",
  "Biryani",
  "Sushi",
  "Steak",
  "Tacos",
  "Ice Cream",
  "Shawarma",
  "Fried Rice",
];
let [, , , , , sixFood] = favoriteFoods;
console.log(`The 6th food element from the array is: ${sixFood}`);

/** T-008: Take out the last 8 food items from the above array using the Array destructuring. Hint: rest parameter. */
let [, , ...lest8Food] = favoriteFoods;

console.log(`The last 8 food items from the above array are: ${lest8Food}`);

/** T-009: Clone an Array(Shallow cloning) */
const shallowCopy = [...favoriteFoods];
console.log("Shallow copy of favoriteFoods array is: ", shallowCopy);


/** T-010: Empty an array using its length property*/
const num = [1, 2, 3, 4, 5, 6];
num.length = 0;
console.log(num);
