/**Task-1 */
const user = { name: "Alex", age: undefined };
console.log(user.age ?? "Not provided");

// The ?? operator is known as the Nullish Coalescing Operator.
//It checks whether the left-hand side value is null or undefined.

//If the left-hand side is null or undefined, it returns the right-hand side value (the default value).

//Otherwise, it returns the left-hand side value.

/**Task-2 */
const obj = Object.freeze({ a: 1 });
obj.a = 2;
console.log(obj.a);
// we can't  change the value of a. because using the freeze method makes the object immutable

/**Task-6 */
let booksCollection = {
  "Harry Potter": { author: "J.K. Rowling", price: 500, quantity: 5 },
  "The Hobbit": { author: "J.R.R. Tolkien", price: 400, quantity: 3 },
  1984: { author: "George Orwell", price: 350, quantity: 8 },
  "The Alchemist": { author: "Paulo Coelho", price: 450, quantity: 6 },
  "To Kill a Mockingbird": { author: "Harper Lee", price: 380, quantity: 0 },
};

console.log(Object.keys(booksCollection)); // Object.keys() returns an array containing the keys of an object.s
// [
//   '1984',
//   'Harry Potter',
//   'The Hobbit',
//   'The Alchemist',
//   'To Kill a Mockingbird'
// ]

console.log(Object.entries(booksCollection)); //Object.entries() returns an array of key–value pairs from an object.
// [
//   [ '1984', { author: 'George Orwell', price: 350, quantity: 8 } ],
//   [
//     'Harry Potter',
//     { author: 'J.K. Rowling', price: 500, quantity: 5 }
//   ],
//   [
//     'The Hobbit',
//     { author: 'J.R.R. Tolkien', price: 400, quantity: 3 }
//   ],
//   [
//     'The Alchemist',
//     { author: 'Paulo Coelho', price: 450, quantity: 6 }
//   ],
//   [
//     'To Kill a Mockingbird',
//     { author: 'Harper Lee', price: 380, quantity: 0 }
//   ]
// ]

/**Task-7 */
//There are two method to check to check Object has certain property. One is (in) operator.Checks if a property exists anywhere in an object (including inherited ones).
//  other is (hasOwn) method.Checks if a property exists directly inside the object itself — not inherited.

const obj1 = {
  name: "Abdullah Al Noman",
  age: 26,
};

console.log("name" in obj1); //true
console.log("salary" in obj1); //false

console.log(Object.hasOwn(obj1, "name")); //true
console.log(Object.hasOwn(obj1, "salary")); //false

console.log(obj1.hasOwnProperty("name")); //true
console.log(obj1.hasOwnProperty("false")); //false

/**Task-8 */
const person = { name: "John" };
const newPerson = person;
newPerson.name = "Doe";
console.log(person.name); //Doe
//When we create a newPerson variable and assign it the reference of the person object, both person and newPerson share the same reference in memory.That’s why, when we update the name property using newPerson, the change is automatically reflected in the person object as well.

console.log(person === newPerson); // true

/**Task-9 */
//In modern JS using structuredClone() is the best way to deeply copy a nested object.
//Creates a completely independent copy, including nested objects
//Changes in the copy do not affect the original
let info = {
  name: "Noman",
  address: { city: "Pabna", country: "Bangladesh" },
};

let deepCopy = structuredClone(info);

deepCopy.address.city = "UK";

console.log(info.address.city);//Pabna
console.log(deepCopy.address.city);//UK