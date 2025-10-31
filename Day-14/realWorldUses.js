// Real World Example
//Example - 1
function divideNumber(a, b) {
  try {
    if (b === 0) {
      const err = new Error("Division by Zero is not allowed.");
      throw err;
    }
    const result = a / b;
    console.log(result);
  } catch (error) {
    console.error(error.message);
  }
}
divideNumber(10, 50);

//Example - 2
const person = {
  name: "Tapas",
  address: {
    city: "Bangalore",
  },
};

function getPostalCode(user) {
  try {
    console.log(user.address.country.postalCode);
  } catch (err) {
    console.log(err.message);
  }
}

getPostalCode(person);

//Example - 3
function validateAge(age) {
  try {
    if (isNaN(age)) {
      throw new Error(
        `Invalid Input: Age must be a number. Your input is ${age}`
      );
    }
    console.log(`User age is: ${age}`);
  } catch (error) {
    console.error("Validation Error:", error.message);
  }
}
validateAge(20);

//Example - 4 (form validation)
const user = {
  username: "Noman",
  email: "noman.ict.gmail.com",
};

function validateForm(formData) {
  try {
    if (!formData.username) throw new Error("User name is mandatory");
    if (!formData.email.includes("@")) throw new Error("Invalid Email");
  } catch (error) {
    console.error("Validation error found :  ", error.message);
    throw error;
  }
}

try {
  validateForm(user);
} catch (error) {
  console.error("Showing error message for user creation", error.message);
}

//self assignment operator ?=

let x ;
let y = 10;
x ?= 20 ;