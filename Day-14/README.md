## 1. What will be the output of the following code?

```js
try {
    let r = p + 50;
    console.log(r);
} catch (error) {
    console.log("An error occurred:", error.name);
}
```

**Output:** Reference Error
---
## 2. Write a function processPayment(amount) that checks if the amount is positive and not exceeding balance.
If any condition fails, throw appropriate errors

```js
function processPayment(amount) {
  const totalBalance = 10000;
  try {
    if (amount <= 0) throw new Error("Invalid Amount");
    if (amount > totalBalance) throw new Error("Insufficient Balance");
    console.log(`You want to withdraw: ${amount} Taka`);
  } catch (error) {
    console.error(error.message);
  }
}
processPayment(11000);

```

---

## 4. Simulate an API call function fetchData(url). If the URL does not start with "https", throw an "Invalid URL" error.
Handle it using try...catch

```js
const url =
  "github.com/NomanICT-IU/40-days-of-javascript/blob/main/day-14/task.md";
function fetchData(url) {
  try {
    if (!url.startsWith("https://")) {
      throw new Error("Invalid URL");
    }
  } catch (error) {
    console.error(`${error.name} : ${error.message}`);
  }
}
fetchData(url);

```
---

## 8. What is the purpose of throw in JavaScript?

**Output:**  It creates a new error manually
---
## 9. What does the finally block do in a try...catch statement?

**Output:** Runs regardless of whether an error occurs or not

---
## 10. Create a table exaplaining the usages of try, catch, throw, rethrow, error object

| Keyword / Concept | Usage / Purpose | Example |
|------------------|----------------|---------|
| try | Holds the code that might throw an error. | `try { JSON.parse(str); }` |
| catch | Handles an error thrown in the try block. | `catch (err) { console.error(err.message); }` |
| throw | Manually creates or throws an error. | `throw new Error("Something went wrong");` |
| rethrow | Throws the caught error again to propagate it further. | `catch (err) { console.log("Log"); throw err; }` |
| Error object | Provides information about an error (name, message, stack). | `console.log(err.name, err.message, err.stack);` |



