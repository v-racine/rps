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

//main function

function startRPSGame() {
  greeting();
  while (true) {
    // the condition of the while loop is anotherGame[0] === 'y'; remove break statement
    for (let i = 0; i < 100; i++) {
      // this should be a while loop with condition userScore !== 3 && compScore !== 3; rm the break statement
      const userSelection = getUserSelection();
      const userChoice = validateUserChoice(userSelection);
      const computerChoice = determineComputerChoice();
      displayChoices(userChoice, computerChoice);
      const winner = playRound(userChoice, computerChoice);
      scoreTracker(winner);
      displayGameWinner(userScore, compScore);

      if (userScore === 3 || compScore === 3) {
        break;
      }
    }
    const anotherGame = keepPlaying();
    if (anotherGame[0] !== "y") break;
    console.clear();
    userScore = 0;
    compScore = 0;
  }

  printMessage("Thanks for playing! Goodbye!");
}

startRPSGame();
