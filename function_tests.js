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

const readline = require("readline-sync");
const VALID_CHOICES = ["rock", "paper", "scissors"];

const userSelection = getUserSelection();
const userChoice = validateUserChoice(userSelection);

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

//console.log(getUserSelection());

function validateUserChoice(userSelection) {
  if (userSelection[0] === "r") {
    return "rock";
  } else if (userSelection[0] === "p") {
    return "paper";
  } else {
    return "scissors";
  }
}

console.log(userChoice);

//improve input validation features
//add feature: best of 5

function printMessage(message) {
  console.log(`=> ${message}`);
}
