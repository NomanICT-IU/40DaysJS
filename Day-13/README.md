## 1. Create a table of two columns, `situation` and `value`. Now add the rows for every situations and the value of `this` in that situation. Please cover the following situations

- At the Global
- Inside an Object Method
- Inside the Satandalone non-Arrow Function
- Inside an Arrow Function(standalone)
- Inside an Arrow Function(as object method)
- Inside an object created with the Constructor Function

Please add examples for each of the scenarios.

**Table of Two column, situation and value are given bleow:**
![situation and value's table](https://github.com/NomanICT-IU/40DaysJS/blob/f271d553998731c1a8a7335d0c1fa29b6efcec85/Day-13/task1.png)

*Example-1(At the Global)**
```js
console.log(this) // Output: windwo Object
```

*Example-2( Inside an Object Method)**
```js
const user = {
name : "Noman",
print: function(){
console.log(this.name)
},
};
user.print() //Output: Noman

```

*Example-3(Inside the Satandalone non-Arrow Function)**
```js
function func(){
console.log(this);
}
func();
// Output: windwo Object
```

*Example-4(Inside an Arrow Function(standalone)**
```js
const func = ()=>{
console.log(this);
}
func(); // Output: windwo Object

```
*Example-5(Inside an Arrow Function(standalone)**
```js
const func = ()=>{
console.log(this);
}
func(); //  Output: windwo Object

```
*Example-6(Inside an Arrow Function(as object method))**
```js
const obj = {
  name: "Noman",
  greet: () => {
    console.log(`Hello, ${this.name}!`);
  },
};

obj.greet(); // Output: Hello, undefined!

```
*Example-7(Inside an object created with the Constructor Function)**
```js
function Person(name, age) {
  this.name = name;
  this.age = age;

  this.greet = function () {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  };
}

const person1 = new Person("Noman", 26);
person1.greet(); // Output: Hello, my name is Noman and I am 26 years old.

```

---
## 2. What is the problem here? Fix it to log the correct name and explain the fix

```js
const user = {
  name: "tapaScript",
  greet: () => {
    console.log(`Hello, ${this.name}!`);
  },
};

user.greet();
```
Explanation: <br>
Inside an Arrow Function(as object method) : Arrow functions do not have their own this. Instead, 
they inherit this from the parent scope (the scope where the function was defined), not the object itself.

---
## 3. Can you explain what is the problem here and fix the issue to log the correct name?

```js
const obj = {
  name: "Tom",
  greet: function () {
    console.log(`Hello, ${this.name}!`);
  },
};

const greetFn = obj.greet;
greetFn();
```
Explanation: <br>
Here, we’re copying the function without the object.When we call greetFn(),
this is no longer obj.To fix this issue using explicit method.

---
## 4. What is the problem with the following code? Why isn't it logging the name correctly?

```js
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
```
Explanation: <br>
user.greet() → this inside greet points to user.But inner() is a regular function called without an object,
so its this points to:Browser:1. window object 2.Node.js (strict mode): undefined

---

## 6. Can you attach the car1's `describe()` method to car2 object? Give all possible solutions that you can think of

```js
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
```
Explanation: <br>
I can attach the car1's describe() method to car2 object.There have three possible solution. These are:
- Using .call()
```js
car1.describe.call(car2);
```
- Using .apply()
```js
car1.describe.apply(car2);
```
- Using .bind()
```js
const car2Describe = car1.describe.bind(car2);
car2Describe(); 
```

---
## 7. What will be the output of the following code and why?

```js
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
```

Options is:
- B: "Charlie" and undefined
