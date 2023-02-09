const readline = require("readline-sync");
const VALID_CHOICES = ["rock", "paper", "scissors"];
const END_OF_TOURNAMENT = 3;

const USER_WINS_ROUND = "You win this round!";
const COMP_WINS_ROUND = "I win this round!";
const TIE_MSG = "It's a tie!";
const USER_WINS_GAME = "You win the game!";
const COMP_WINS_GAME = "I win the game!";

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

  printMessage("Thanks for playing! Goodbye!");
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

function scoreTracker(winner, scoreBoard) {
  if (winner === USER_WINS_ROUND) {
    scoreBoard.userScore++;
  } else if (winner === COMP_WINS_ROUND) {
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
    printMessage(USER_WINS_GAME);
  }
  if (scoreBoard.compScore === END_OF_TOURNAMENT) {
    printMessage(COMP_WINS_GAME);
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

function printMessage(message) {
  console.log(`=> ${message}`);
}
