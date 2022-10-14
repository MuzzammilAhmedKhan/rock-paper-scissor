function getComputerChoice() {
  const choice = ["rock", "paper", "scissors"];
  return choice[Math.floor(Math.random() * choice.length)];
}

function playRound(playerSelection, computerChoice) {
  let computerSelection = computerChoice();
  playerSelection = playerSelection.toLowerCase();
  if (computerSelection === playerSelection) {
    return 0;
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    return -1;
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return -1;
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return -1;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return 1;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return 1;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return 1;
  } else {
    return 0;
  }
}

var playerScore = document.querySelector(".player-score").innerHTML;
const computerScore = document.querySelector(".computer-score").innerHTML;

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissor = document.querySelector(".scissor");

let score 

for (let i = 0; i < 5; i++) {
  rock.addEventListener("click", () => {
    score = setTimeout(playRound("rock", getComputerChoice), 5000);
    // console.log(score)
  });
}

console.log(score);


