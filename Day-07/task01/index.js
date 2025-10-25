function rockPaperScissorGame() {
  let userPrompt = prompt(`Enter your choice: "rock", "paper", or "scissors".`);

  let userChoice = userPrompt.toLocaleLowerCase();

  console.log(`You choice ${userChoice}`);
  let randomNum = Math.floor(Math.random() * 3 + 1);
  let computerChoice = "";
  switch (randomNum) {
    case 1:
      computerChoice = "rock";
      break;
    case 2:
      computerChoice = "paper";
      break;

    default:
      computerChoice = "scissors";
      break;
  }
  console.log(`Computer choice ${computerChoice}`);
  if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log("Oh no. You win the game...");
  } else if (
    (userChoice === "scissors" && computerChoice === "rock") ||
    (userChoice === "rock" && computerChoice === "paper") ||
    (userChoice === "paper" && computerChoice === "scissors")
  ) {
    console.log("Oh no.Computer win the game...");
  } else {
    console.log("Match tie...");
  }

  let gameAgainPrompt = prompt(`Do you want to play again? 'yes/no'`);
  let gameAgain = gameAgainPrompt ? gameAgainPrompt.toLocaleLowerCase() : "no";
  if (gameAgain === "yes") {
    rockPaperScissorGame();
  }
}
rockPaperScissorGame();
