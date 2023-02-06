const readline = require("readline-sync");
const VALID_CHOICES = ["rock", "paper", "scissors"];

//main function
function startRPSGame() {
  greeting();
  while (true) {
    const userSelection = getUserSelection();
    const userChoice = validateUserChoice(userSelection);
    const computerChoice = determineComputerChoice();
    displayChoices(userChoice, computerChoice);
    const winner = determineWinner(userChoice, computerChoice);
    displayWinner(winner);
    const anotherGame = keepPlaying();
    if (anotherGame[0] !== "y") break;
    console.clear();
  }

  printMessage("Thanks for playing! Goodbye!");
}

startRPSGame();

//helper functions

function greeting() {
  console.clear();
  printMessage("Welcome to the game of 'Rock, Paper, Scissors'!");
}

function getUserSelection() {
  printMessage(
    `Please choose one of the following options: ${VALID_CHOICES.join(", ")}.`
  );
  let choice = readline.question().toLowerCase();

  while (
    !VALID_CHOICES.includes(choice) &&
    choice !== "r" &&
    choice !== "p" &&
    choice !== "s"
  ) {
    printMessage("Oops! That's not a valid choice. Please choose again.");
    choice = readline.question();
  }

  return choice[0];
}

function validateUserChoice(userSelection) {
  if (userSelection[0] === "r") {
    return "rock";
  } else if (userSelection[0] === "p") {
    return "paper";
  } else {
    return "scissors";
  }
}

function determineComputerChoice() {
  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let choice = VALID_CHOICES[randomIndex];

  return choice;
}

function displayChoices(userChoice, computerChoice) {
  printMessage(`You chose ${userChoice}, I chose ${computerChoice}.`);
}

function determineWinner(userChoice, computerChoice) {
  const userWinsMsg = "You win!";
  const compWinsMsg = "I win!";
  const tieMsg = "It's a tie!";
  const gameResults = {
    rock: {
      rock: tieMsg,
      paper: compWinsMsg,
      scissors: userWinsMsg,
    },
    paper: {
      rock: userWinsMsg,
      paper: tieMsg,
      scissors: compWinsMsg,
    },
    scissors: {
      rock: compWinsMsg,
      paper: userWinsMsg,
      scissors: tieMsg,
    },
  };
  return gameResults[userChoice][computerChoice];
}

function displayWinner(winner) {
  printMessage(winner);
}

function keepPlaying() {
  printMessage("Do you want to play again? Choose 'y' or 'n'.");
  anotherGame = readline.question().toLowerCase();

  while (anotherGame[0] !== "n" && anotherGame[0] !== "y") {
    printMessage("Please enter 'y or 'n').");
    anotherGame = readline.question().toLocaleLowerCase();
  }
  return anotherGame.toLocaleLowerCase();
}

function printMessage(message) {
  console.log(`=> ${message}`);
}
