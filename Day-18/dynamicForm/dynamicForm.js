document.body.classList.add("container");

// Create form
const form = document.createElement("form");
document.body.appendChild(form);

// Creating label
const label = document.createElement("label");
label.innerText = "Name : ";
label.setAttribute("for", "name");
form.appendChild(label);

// Creating input field
const input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("id", "name");
input.setAttribute("name", "name");
input.setAttribute("placeholder", "Your name..");
input.setAttribute("required", "true");
form.appendChild(input);

// Creating submit button
const submitBtn = document.createElement("input");
submitBtn.setAttribute("type", "submit");
submitBtn.setAttribute("value", "Submit");
form.appendChild(submitBtn);

// Creating reset button
const resetBtn = document.createElement("input");
resetBtn.setAttribute("type", "reset");
resetBtn.setAttribute("value", "Reset");
form.appendChild(resetBtn);

// Handle form submit
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const values = {};
  const inputs = form.querySelectorAll("input");

  inputs.forEach((input) => {
    // Skip submit & reset buttons
    if (input.type !== "submit" && input.type !== "reset") {
      values[input.name] = input.value;
    }
  });

  console.log("Form data:", values);
});
