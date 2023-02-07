const readline = require("readline-sync");
const VALID_CHOICES = ["rock", "paper", "scissors"];

const USER_WINS_ROUND = "You win this round!";
const COMP_WINS_ROUND = "I win this round!";
const TIE_MSG = "It's a tie!";
const USER_WINS_GAME = "You win the game!";
const COMP_WINS_GAME = "I win the game!";

let userScore = 0;
let compScore = 0;
let tie = 0;

//main function
function startRPSGame() {
  greeting();
  while (true) {
    for (let i = 0; i < 100; i++) {
      const userSelection = getUserSelection();
      const userChoice = validateUserChoice(userSelection);
      const computerChoice = determineComputerChoice();
      displayChoices(userChoice, computerChoice);
      const winner = playRound(userChoice, computerChoice);
      //displayRoundWinner(winner);
      scoreTracker(winner);
      displayGameWinner(userScore, compScore);

      if (userScore === 3 || compScore === 3) {
        break;
      }
    }
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

function playRound(userChoice, computerChoice) {
  const gameResults = {
    rock: {
      rock: TIE_MSG,
      paper: COMP_WINS_ROUND,
      scissors: USER_WINS_ROUND,
    },
    paper: {
      rock: USER_WINS_ROUND,
      paper: TIE_MSG,
      scissors: COMP_WINS_ROUND,
    },
    scissors: {
      rock: COMP_WINS_ROUND,
      paper: USER_WINS_ROUND,
      scissors: TIE_MSG,
    },
  };
  return gameResults[userChoice][computerChoice];
}

// function displayRoundWinner(winner) {
//   printMessage(winner);
// }

function scoreTracker(winner) {
  if (winner === USER_WINS_ROUND) {
    userScore++;
    printMessage(
      `${USER_WINS_ROUND} Your score is ${userScore}. My score is ${compScore}.`
    );
  } else if (winner === COMP_WINS_ROUND) {
    compScore++;
    printMessage(
      `${COMP_WINS_ROUND} Your score is ${userScore}. My score is ${compScore}.`
    );
  } else {
    tie++;
    printMessage(
      `${TIE_MSG} Your score is ${userScore}. My score is ${compScore}.`
    );
  }
}

function displayGameWinner(userScore, compScore) {
  if (userScore === 3) {
    printMessage(USER_WINS_GAME);
  }
  if (compScore === 3) {
    printMessage(COMP_WINS_GAME);
  }
}

function keepPlaying() {
  let validYesOrNo = ["yes", "no"];

  printMessage(
    `Do you want to play again? Choose ${validYesOrNo.join(" or ")}.`
  );
  anotherGame = readline.question().toLowerCase();

  while (
    !validYesOrNo.includes(anotherGame) &&
    anotherGame !== "n" &&
    anotherGame !== "y"
  ) {
    printMessage("Please choose: 'yes' or 'no'.");
    anotherGame = readline.question().toLocaleLowerCase();
  }
  return anotherGame;
}

function printMessage(message) {
  console.log(`=> ${message}`);
}
