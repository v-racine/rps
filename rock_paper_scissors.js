const readline = require("readline-sync");
const VALID_CHOICES = ["rock", "paper", "scissors"];

//main function
function startRPSGame() {
  greeting();
  while (true) {
    const userChoice = getUserChoice();
    const computerChoice = determineComputerChoice();
    displayChoices(userChoice, computerChoice);
    const winner = determineWinner(userChoice, computerChoice);
    displayWinner(winner);
    const anotherGame = keepPlaying();
    if (anotherGame[0] !== "y") break;
    console.clear();
  }

  prompt("Thanks for playing! Goodbye!");
}

startRPSGame();

//helper functions

function greeting() {
  console.clear();
  prompt("Welcome to the game of 'Rock, Paper, Scissors'!");
}

function getUserChoice() {
  prompt(
    `Please choose one of the following options: ${VALID_CHOICES.join(", ")}.`
  );
  let choice = readline.question();

  while (!VALID_CHOICES.includes(choice)) {
    prompt("Oops! That's not a valid choice. Please choose again.");
    choice = readline.question();
  }

  return choice;
}

function determineComputerChoice() {
  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let choice = VALID_CHOICES[randomIndex];

  return choice;
}

function displayChoices(userChoice, computerChoice) {
  prompt(`You chose ${userChoice}, I chose ${computerChoice}.`);
}

function determineWinner(userChoice, computerChoice) {
  if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    return "You win!";
  } else if (
    (userChoice === "rock" && computerChoice === "paper") ||
    (userChoice === "paper" && computerChoice === "scissors") ||
    (userChoice === "scissors" && computerChoice === "rock")
  ) {
    return "I win!";
  } else {
    return "It's a tie!";
  }
}

function displayWinner(winner) {
  prompt(winner);
}

function keepPlaying() {
  prompt("Do you want to play again? Choose 'y' or 'n'.");
  anotherGame = readline.question().toLowerCase();

  while (anotherGame[0] !== "n" && anotherGame[0] !== "y") {
    prompt("Please enter 'y or 'n').");
    anotherGame = readline.question().toLocaleLowerCase();
  }
  return anotherGame.toLocaleLowerCase();
}

function prompt(message) {
  console.log(`=> ${message}`);
}
