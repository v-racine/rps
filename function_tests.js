function determineWinner(userChoice, computerChoice) {
  if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    return "user wins";
  } else if (
    (userChoice === "rock" && computerChoice === "paper") ||
    (userChoice === "paper" && computerChoice === "scissors") ||
    (userChoice === "scissors" && computerChoice === "rock")
  ) {
    return "computer wins";
  } else {
    return "tie";
  }
}

console.log(determineWinner("rock", "paper"));

//fix function:
function gameResults() {
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
    scissors: {},
  };
  return gameResults[userChoice][computerChoice];
}

//change name of prompt function
