/** T-011: Create an array of 10 elements(number 1 to 10). Resize the array to length 6 once you find the number 5 in that array. Hint: Use for-loop. */

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < arr.length; i++) {
  if (i === 5) {
    arr.length = 6;
  }
}
console.log("After resizing the array to length six, the array is:", arr);

/** T-012: Create an Array of 10 elements. Use the splice() method to empty the array. */
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newArr = arr1.splice(0, 10);
console.log("Use the splice() method:", arr1);

/** T-013: Create an Array of 10 elements. You can empty the array in multiple ways: using the length property, using the pop() method, using the shift() method, setting the array with [], or the splice() method. Which among these methods are most efficient and why?*/
//Using length property is most efficient
//Because -> All elements are removed instantaneously. The existing array reference is modified.

/**T-014: What happens when you concatenate two empty arrays? */
const emptyArr1 = [];
const emptyArr2 = [];
const emptyArr = [...emptyArr1, ...emptyArr2];
console.log(emptyArr); // we get another empty array

/**T-015: How can you check if a value is partially matching with any of the elements of an Array? */
const includeArr = [1, 2, 3, 4, 5, 6, 7];
console.log(includeArr.includes(5));
//Using array includes() method to check if a value is particularly matching with of the elements of an Array. If it return true that's mean existing element is matched with searching element

/**T-016: What is the difference between the slice() and splice() methods?*/
//Using the slice() method, we can copy an array from its original array. The slice() method is an immutable method. If we change the copied array, the original array remains unchanged.
const beforeSlice = [1, 2, 3, 4, 5, 6, 7];
console.log(beforeSlice); //[1, 2, 3, 4, 5, 6, 7]
const afterSlice = beforeSlice.slice();
afterSlice.push(8);
console.log(afterSlice); //[1, 2, 3, 4, 5, 6, 7, 8]

//Using the splice() method, we can remove, replace, or add elements in an array. The splice() method is a mutable method. If we change the array using splice(), the original array is modified."
const arr3 = [1, 2, 3, 4];
arr.splice(0, 2);
console.log(arr3); // [3,4]

/**T-017: Create an Array of alphanumeric strings. Sort the elements in both ascending and descending orders. You must be doing this in an immutable way such that the source array never gets modified.*/

const alphaArray = ["Xavir", "Noman", "Shown", "Yeasir"];

const ascending = alphaArray.toSorted(function (a, b) {
  return a === b ? 0 : a > b ? 1 : -1;
});
console.log("Original Array: ", alphaArray);

console.log("Ascending Array: ", ascending);

const descending = alphaArray.toSorted(function (a, b) {
  return a === b ? 0 : a > b ? -1 : 1;
});
console.log("Descending Array: ", descending);

/** T-018: Can you give examples of sparse and dense arrays? */
//A dense array means every index has a value — no empty or missing elements.
const denseArray = [1, 2, 3, 4, 5];
console.log(denseArray.length); // 5
console.log(denseArray); // [1, 2, 3, 4, 5]

//A sparse array has holes — some indexes are missing or skipped.
const sparseArray = [1, , 3, , 5];
console.log(sparseArray.length); // 5
console.log(sparseArray); // [1, <1 empty item>, 3, <1 empty item>, 5]

/**T-019: Give a practical usages of the .fill() method */

const fillArray = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(fillArray.fill("*"));//['*', '*', '*','*', '*', '*','*', '*']

/**T-020: How to convert an array to a string? */
//Using toString()
const arrStr1 = ["apple", "banana", "cherry"];
const str = arrStr1.toString();

console.log(str); // "apple,banana,cherry"

//Using JSON.stringify()
const arrStr2 = ["apple", "banana", "cherry"];
const str1 = JSON.stringify( arrStr2);

console.log(str1); // ["apple","banana","cherry"]
