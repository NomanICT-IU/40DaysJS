/**Task-2 */
const user = {
  name: "tapaScript",
  greet: function () {
   return () => {
      console.log(`Hello, ${this.name}!`);
    };
  },
};

user.greet()();

// Inside an Arrow Function(as object method) : Arrow functions do not have their own this. Instead, they inherit this from the parent scope (the scope where the function was defined), not the object itself.

/**Task-3 */
const obj = {
  name: "Tom",
  greet: function () {
    console.log(`Hello, ${this.name}!`);
  },
};

const greetFn = obj.greet;
greetFn.call(obj);

//Here, we’re copying the function without the object.When we call greetFn(), this is no longer obj.To fix this issue using explicit method.


/**Task-4 */
const user = {
  name: "Alex",
  greet: function () {
    function inner() {
      console.log(`Hello, ${this.name}!`);
    }
    inner();
  },
};

user.greet();

//user.greet() → this inside greet points to user.But inner() is a regular function called without an object, so its this points to:Browser:1. window object 2.Node.js (strict mode): undefined

/**Task-6 */
const car1 = {
  brand: "Audi",
  model: "A8",
  describe: function () {
    console.log(`This car is a ${this.brand} ${this.model}.`);
  },
};

const car2 = {
  brand: "BMW",
  model: "X1",
};

// I can attach the car1's describe() method to car2 object.There have three possible solution. These are:
//1.Using .call() -> car1.describe.call(car2); 
//2.Using .apply() -> car1.describe.apply(car2); 
//3.Using .bind() to create a new function -> const car2Describe = car1.describe.bind(car2); car2Describe(); 

/**Task-7 */
const person = {
  name: "Charlie",
  sayHello: function () {
    console.log(this.name);
  },
  sayHelloArrow: () => {
    console.log(this.name);
  },
};

person.sayHello();
person.sayHelloArrow();

//B: "Charlie" and undefined