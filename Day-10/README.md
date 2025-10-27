## 1. What will be the output of the following code and why?
```js
let user = "Alice";

function outer() {
    function inner() {
        console.log(user);
    }
    let user = "Bob";
    inner();
}

outer();
```
Output: Bob <br>
Because :I think there are two reasons: scoping and execution context.
During the creation phase of the function’s execution context, the variable user is hoisted but kept uninitialized (because it’s declared with let).
When the function starts executing, inner() is invoked after the variable user gets its value "Bob".


---
## 2. What is the mistake in the code below?
```js
let total = 0; // Global, bad practice

function add(num) {
    total += num;
}

add(5);
add(10);
console.log(total);
```
Output: Bob <br>
Because : The variable total are declare in global scope.on the other hand using let key word to declare a variable we can reassign value in this variable. Thas why after add(10) funtion call. the value of total change automatically.
 ---
 ## 3. Create a function with a nested function and log a variable from the parent function.
 ```js
function outerFunc() {
  let parentVar = 20;
  function innerFunc() {
    console.log(parentVar);
  }
  innerFunc();
}
outerFunc();
```
---
## 4. Use a loop inside a function and declare a variable inside the loop. Can you access it outside?

```js
function insideLoop() {
  for (let i = 0; i < 5; i++) {
    let a = 20;
    const b = 30;
    var c = 40;
  }

  //console.log(a);//a is not defined
  //console.log(b);//b is not defined
  console.log(c);
}
insideLoop();
```
**Explanation** <br>
If i declare a variable with let or const keyword. It is quite impossible to access it outside of loop beause of both let and const are block-scoped. On the other hand if i declare variable with var key word it is possible to access outside the loop but impossible to access 
out side the function scope. Because var is function-scoped, not block-scoped.
---
## 5. Write a function that tries to access a variable declared inside another function.
```js
function func1() {
  let func1var = 2;
}
function func2() {}
{
  //console.log(func1var);//func1var is not defined
}

func1();
func2();
```
**Explanation** <br>
A variable declare with var,let or const all are function-scoped. That why is quite immposible to acces a variable which is declear inside other variable.

---
## 6. What will be the output and why?
```js
console.log(a);
let a = 10;
```
**Explanation** <br>
Cannot access 'a' before initialization Beacuse of TDZ. TDZ is an area where we can't access a variable without initialization.

---
## 7. Where is the `age` variable accessible?
```js
function showAge() {
    let age = 25;
    console.log(age);
}

console.log(age);
```

outPut:
- B: Only inside showAge

---
## 8. What will be the output and explain the output?
```js
let message = "Hello";

function outer() {
    let message = "Hi";

    function inner() {
        console.log(message);
    }

    inner();
}

outer();
```
Output:
- Hi

Explanation: <br>
I think there are two reasons: scoping and execution context.
During the creation phase of the function’s execution context, the variable user is hoisted but kept uninitialized (because it’s declared with let).
When the function starts executing, inner() is invoked after the variable user gets its value "hi".

---
## 9. What will be the output and why?
```js
let x = "Global";

function outer() {
    let x = "Outer";

    function inner() {
        let x = "Inner";
        console.log(x);
    }

    inner();
}

outer();
```
Output:
- inner

Explanation: <br>
I think there are two reasons: scoping and execution context.
During the creation phase of the function’s execution context, the variable user is hoisted but kept uninitialized (because it’s declared with let).
When the function starts executing, inner() is invoked after the variable user gets its value "inner".

---

## 10. What will be the output and why?
```js
function counter() {
    let count = 0;
    return function () {
        count--;
        console.log(count);
    };
}

const reduce = counter();
reduce();
reduce();
```
Output:
- -1
- -2

Explanation: <br> Beacuse of lexical scoping





