// function determineWinner(userChoice, computerChoice) {
//   if (
//     (userChoice === "rock" && computerChoice === "scissors") ||
//     (userChoice === "paper" && computerChoice === "rock") ||
//     (userChoice === "scissors" && computerChoice === "paper")
//   ) {
//     return "user wins";
//   } else if (
//     (userChoice === "rock" && computerChoice === "paper") ||
//     (userChoice === "paper" && computerChoice === "scissors") ||
//     (userChoice === "scissors" && computerChoice === "rock")
//   ) {
//     return "computer wins";
//   } else {
//     return "tie";
//   }
// }

//fix function:
// function determineWinner(userChoice, computerChoice) {
//   const userWinsMsg = "You win!";
//   const compWinsMsg = "I win!";
//   const tieMsg = "It's a tie!";
//   const gameResults = {
//     rock: {
//       rock: tieMsg,
//       paper: compWinsMsg,
//       scissors: userWinsMsg,
//     },
//     paper: {
//       rock: userWinsMsg,
//       paper: tieMsg,
//       scissors: compWinsMsg,
//     },
//     scissors: {
//       rock: compWinsMsg,
//       paper: userWinsMsg,
//       scissors: tieMsg,
//     },
//   };
//   return gameResults[userChoice][computerChoice];
// }

// console.log(determineWinner("paper", "rock"));

// const readline = require("readline-sync");
// const VALID_CHOICES = ["rock", "paper", "scissors"];

// const userSelection = getUserSelection();
// const userChoice = validateUserChoice(userSelection);

// function getUserSelection() {
//   printMessage(
//     `Please choose one of the following options: ${VALID_CHOICES.join(", ")}.`
//   );
//   let choice = readline.question().toLowerCase();

//   while (
//     !VALID_CHOICES.includes(choice) &&
//     choice !== "r" &&
//     choice !== "p" &&
//     choice !== "s"
//   ) {
//     printMessage("Oops! That's not a valid choice. Please choose again.");
//     choice = readline.question();
//   }

//   return choice[0];
// }

// //console.log(getUserSelection());

// function validateUserChoice(userSelection) {
//   if (userSelection[0] === "r") {
//     return "rock";
//   } else if (userSelection[0] === "p") {
//     return "paper";
//   } else {
//     return "scissors";
//   }
// }

// console.log(userChoice);

// function printMessage(message) {
//   console.log(`=> ${message}`);
// }

//BEST-OF-FIVE Feature:

const USER_WINS_ROUND = "You win this round!";
const COMP_WINS_ROUND = "I win this round!";
const TIE_MSG = "It's a tie!";
const USER_WINS_GAME = "You win the game!";
const COMP_WINS_GAME = "I win the game!";

let userScore = 0;
let compScore = 0;
let tie = 0;

//assumed functions
// const userSelection = getUserSelection();
// const userChoice = validateUserChoice(userSelection);
// const computerChoice = determineComputerChoice();
// displayChoices(userChoice, computerChoice);

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

function scoreTracker(winner) {
  if (winner === USER_WINS_ROUND) {
    userScore++;
  } else if (winner === COMP_WINS_ROUND) {
    compScore++;
  } else {
    tie++;
  }

  if (userScore === 3) {
    console.log(USER_WINS_GAME);
  }
  if (compScore === 3) {
    console.log(COMP_WINS_GAME);
  }
}
