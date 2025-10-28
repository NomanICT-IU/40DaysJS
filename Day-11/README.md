## 1. What will be the output of the following code and why?
```js
function outer() {
    let count = 0;
    return function inner() {
        count++;
        console.log(count);
    };
}
const counter = outer();
counter();
counter();
```

Outpu : 
- 1
- 2

Explanation: <br>
For inner function,the value of count taken from it's lexical scope which is 0.The inner function executing outside it's lexical scope.
But can remember the value of count.This process known as closure.During the execution phase of the inner function there using post increment operator.For this when we first function counter() function invoke. 
We get count equal 1. After that again inner() function invoked. we get 2.Because inner function is able to remember previous value.

---
## 2. What will be the output and why?
```js
function testClosure() {
    let x = 10;
    return function () {
        return x * x;
    };
}
console.log(testClosure()());
```
Outpu : 
- 100
  

Explanation: <br>
For inner function,the value of x taken from it's lexical scope which is 10.The inner function executing outside it's lexical scope. 
But can remember the value of x.This process known as closure.During the execution phase of the inner function x multiple by x. That's why we get 100;
---
## 5. What happens if a closure references an object?
Outpu : 
-  The object remains in memory as long as the closure exists
  
