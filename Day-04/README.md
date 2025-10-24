**Code Snippet:**
```js
let day = "Monday";

switch (day) {
   case "monday":
       console.log("It's the start of the week.");
       break;
   default:
       console.log("It's a normal day.");
}
```
**Output:**
#### The output of this code is: `It's a normal day`

**Because:**
JavaScript is case-sensitive. The values `Monday` and `monday` are not same.The switch statement uses strict comparison (===). That means it matches both the type and the value (including case).






