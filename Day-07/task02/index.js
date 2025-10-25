function secretNumberGame() {
  console.log("Welcome to the Number Guessing Game!");
  console.log("Try to guess a number Between 1 to 10");
  let userPrompt = prompt("Enter Your Guess: ");
  let randomNumber = Math.floor(Math.random() * 10 + 1);
  let count = 1;
  while (Number(userPrompt)) {
    if (userPrompt === null) {
      return;
    } else if (userPrompt > randomNumber) {
      console.log(`To High! Try again.`);
      count += 1;
      userPrompt = prompt("Again. Enter Your Guess : ");
    } else if (userPrompt < randomNumber) {
      console.log(`To low! Try again.`);
      count += 1;
      userPrompt = prompt("Again. Enter Your Guess : ");
    } else {
      console.log(`congrats! You guessed the number in ${count} `);
      break;
    }
  }
  const playAgainPrompt = prompt(`Do you want to play again ?'yes/no' `);
  const playAgain = playAgainPrompt
    ? playAgainPrompt.toLocaleLowerCase()
    : "no";
  if (playAgain === "yes") {
    secretNumberGame();
  }
}
secretNumberGame();
