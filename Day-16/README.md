# 🐞 Chrome DevTools Debugger Buttons

In **Chrome DevTools (Sources tab)**, there are usually 5 main buttons  
used to control how your JavaScript code executes — pause, step, or resume line by line.

---

## 🔹 The 5 Debugger Buttons and Their Functions

| No. | Symbol / Icon | Name | Function |
|------|----------------|------|-----------|
| 1️⃣ | ▶️ / ⏸️ | **Resume / Pause Script Execution** | Pauses the running code or resumes it if it’s currently paused. |
| 2️⃣ | ⏭️ | **Step Over (F10)** | Executes the current line but skips inside any function calls — goes directly to the next line. |
| 3️⃣ | ⤵️ | **Step Into (F11)** | If the current line calls a function, this goes *inside* that function to debug it line by line. |
| 4️⃣ | ⤴️ | **Step Out (Shift + F11)** | If you’re inside a function, this runs the rest of it and returns to the outer function. |
| 5️⃣ | ⏩ | **Step (Next Function Call)** | Runs the code until the next function call. (Not always visible in all Chrome versions.) |

---

## 🧠 Example

```js
function greet(name) {
  console.log("Hello " + name);
}

function main() {
  let user = "Rafi";
  greet(user);
  console.log("Done!");
}

main();
