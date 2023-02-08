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
