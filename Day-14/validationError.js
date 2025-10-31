const userInput = { username: "", age: -2 };

function ValidationError(message) {
  (this.name = "ValidationError"), (this.message = message);
}

function handleFormValidation(user) {
  if (!user.username) throw new ValidationError("Username cannot be empty");
  if (user.username >= 0)
    throw new ValidationError("Age must be a positive number");
}

try {
  handleFormValidation(userInput);
} catch (error) {
  console.error(`${error.name} : ${error.message}`);
}
