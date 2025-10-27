/**Task-1 */
let user = "Alice";

function outer() {
  function inner() {
    console.log(user); // bob
  }
  let user = "Bob";
  inner();
}

outer();

/**Task-2 */
let total = 0; // Global, bad practice

function add(num) {
  total += num;
}

add(5);
add(10);
console.log(total);

/**Task-3 */
function outerFunc() {
  let parentVar = 20;
  function innerFunc() {
    console.log(parentVar);
  }
  innerFunc();
}
outerFunc();

/**Task-4 */
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

/**Task-5 */
function func1() {
  let func1var = 2;
}
function func2() {}
{
  //console.log(func1var);//func1var is not defined
}

func1();
func2();

/**Task-6*/
//console.log(a); //Cannot access 'a' before initialization
let a = 10;

/**Task-8 */
let message = "Hello";

function outer() {
  let message = "Hi";

  function inner() {
    console.log(message); //hi
  }

  inner();
}

outer();

/**Task-9 */
let x = "Global";

function outer() {
  let x = "Outer";

  function inner() {
    let x = "Inner";
    console.log(x); //inner
  }

  inner();
}

outer();

/**Task-10 */
function counter() {
    let count = 0;
    return function () {
        count--;
        console.log(count);
        console.log(count--);
    };
}

const reduce = counter();
reduce();
reduce();
reduce();