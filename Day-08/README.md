## 1. Draw the Execution Context Diagram of the follwoing code and share as explained below:
```js
const message = "I can do it";

fucntion sum(a, b) {
    const result = a + b;
    return result;
}

function mul(a, b) {
    const result = a * b;
    return result;
}
function calc(a, b) {
    return (sum(a, b) + mul(a,b))/2;
}

function getResult(a, b) {
    return calc(a, b);
}

getResult(8, 5);
```


1. Create the GEC and FEC with CP and EP flow
  ---
![alt text](https://github.com/NomanICT-IU/40DaysJS/blob/d3e3b17d23647dc0a42a2b90fc19407af02d2d12/Day-08/task1.png)

2.Create the Stack and Heap Flow
  ---
![alt text](https://github.com/NomanICT-IU/40DaysJS/blob/d3e3b17d23647dc0a42a2b90fc19407af02d2d12/Day-08/task2.png)

2.Create the Stack Diagram
  ---
![alt text](https://github.com/NomanICT-IU/40DaysJS/blob/d3e3b17d23647dc0a42a2b90fc19407af02d2d12/Day-08/task3.png)

