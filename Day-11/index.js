//**Task-1 */

function outer() {
    let count = 0;
    return function inner() {
        count++;
        console.log(count);
    };
}
const counter = outer();
counter(); //1
counter(); //2

// For inner function,the value of count taken from it's lexical scope which is 0.The inner function executing outside it's lexical scope. But can remember the value of count.This process known as closure.During the execution phase of the inner function there using post increment operator.For this when we first function counter() function invoke. We get count equal 1. After that again inner() function invoked. we get 2.Because inner function is able to remember previous value.


/**Task-2 */
function testClosure() {
    let x = 10;
    return function () {
        return x * x;
    };
}
console.log(testClosure()());

//For inner function,the value of x taken from it's lexical scope which is 10.The inner function executing outside it's lexical scope. But can remember the value of x.This process known as closure.During the execution phase of the inner function x multiple by x. That's why we get 100;