// get all buttons + result
const buttons = document.querySelectorAll(".choice");
const result = document.getElementById("result");

// add single handler to all buttons
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    clickHandler(btn.textContent.toLowerCase());
  });
});

// click handler
function clickHandler(userChoice) {
  const computerChoice = generateComputerChoice();
  const resultMsg = getResult(userChoice, computerChoice);
  printFunction(userChoice, resultMsg, computerChoice);
}

// computer choice
function generateComputerChoice() {
  const choices = ["bat", "ball", "stump"];
  return choices[Math.floor(Math.random() * 3)];
}

// game logic
function getResult(user, comp) {
  if (user === comp) return "Match tie...";

  if (user === "bat" && comp === "ball") return "User has won!";
  if (user === "bat" && comp === "stump") return "Computer has won!";
  if (user === "ball" && comp === "stump") return "User has won!";
  if (user === "ball" && comp === "bat") return "Computer has won!";
  if (user === "stump" && comp === "bat") return "User has won!";
  if (user === "stump" && comp === "ball") return "Computer has won!";

  return "Computer has won!";
}

// print function
function printFunction(userChoice, result, computerChoice) {
  console.log(
    `User Choice: ${userChoice.toUpperCase()}, Computer Choice : ${computerChoice.toUpperCase()} → ${result}`
  );
}
