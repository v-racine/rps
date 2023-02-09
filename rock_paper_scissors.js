const readline = require("readline-sync");
const VALID_CHOICES = ["rock", "paper", "scissors"];
const END_OF_TOURNAMENT = 3;

const MESSAGES = {
  userWinsRound: "You win this round!",
  compWinsRound: "I win this round!",
  tieMsg: "It's a tie!",
  userWinsGame: "You win the game!",
  compWinsGame: "I win the game!",
};

//main function
function startRPSGame() {
  greeting();
  const scoreBoard = { userScore: 0, compScore: 0 };
  let anotherGame = "y";
  while (anotherGame[0] === "y") {
    while (
      scoreBoard.userScore !== END_OF_TOURNAMENT &&
      scoreBoard.compScore !== END_OF_TOURNAMENT
    ) {
      const userSelection = getUserSelection();
      const userChoice = validateUserChoice(userSelection);
      const computerChoice = determineComputerChoice();
      displayChoices(userChoice, computerChoice);
      const winner = playRound(userChoice, computerChoice);
      scoreTracker(winner, scoreBoard);
      displayScores(scoreBoard, winner);
      displayGameWinner(scoreBoard);
    }
    anotherGame = keepPlaying(anotherGame);
    console.clear();
    scoreBoard.userScore = 0;
    scoreBoard.compScore = 0;
  }
  printFarewell();
}

startRPSGame();

//helper functions

function greeting() {
  console.clear();
  printMessage(
    "Welcome to the game of 'Rock, Paper, Scissors'! Let's play a Best-of-Five tournament!"
  );
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
  } else if (userSelection[0] === "s") {
    return "scissors";
  } else {
    return printMessage("invalid user choice");
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
      rock: MESSAGES.tieMsg,
      paper: MESSAGES.compWinsRound,
      scissors: MESSAGES.userWinsRound,
    },
    paper: {
      rock: MESSAGES.userWinsRound,
      paper: MESSAGES.tieMsg,
      scissors: MESSAGES.compWinsRound,
    },
    scissors: {
      rock: MESSAGES.compWinsRound,
      paper: MESSAGES.userWinsRound,
      scissors: MESSAGES.tieMsg,
    },
  };
  return gameResults[userChoice][computerChoice];
}

function scoreTracker(winner, scoreBoard) {
  if (winner === MESSAGES.userWinsRound) {
    scoreBoard.userScore++;
  } else if (winner === MESSAGES.compWinsRound) {
    scoreBoard.compScore++;
  }
}

function displayScores(scoreBoard, msg) {
  printMessage(
    `${msg} Your score is ${scoreBoard.userScore}. My score is ${scoreBoard.compScore}.`
  );
  console.log("SCOREBOARD:", scoreBoard);
}

function displayGameWinner(scoreBoard) {
  if (scoreBoard.userScore === END_OF_TOURNAMENT) {
    printMessage(MESSAGES.userWinsGame);
  }
  if (scoreBoard.compScore === END_OF_TOURNAMENT) {
    printMessage(MESSAGES.compWinsGame);
  }
}

function keepPlaying(anotherGame) {
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

function printFarewell() {
  printMessage("Thanks for playing! Goodbye!");
}

function printMessage(message) {
  console.log(`=> ${message}`);
}
