//DOM
const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorBtn = document.querySelector(".scissor");
const scorePlayer = document.querySelector('.player-score');
const scoreComputer = document.querySelector('.computer-score');
const resultDisplay = document.querySelector('.result-text');

//EVENTS
let rockPick = rockBtn.addEventListener("click", () => {
  playOneGame(items[0]);
});

let paperPick = paperBtn.addEventListener('click', () => {
  playOneGame(items[1]);
});

let scissorPick = scissorBtn.addEventListener('click', () => {
  playOneGame(items[2]);
})

//game logic
const items = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;
let result;

let getComputerChoice = () => {
  return items[Math.floor(Math.random() * items.length)];
};

let playOneRound = (playerChoice, computerChoice) => {
  let computerSelection = computerChoice();
  playerSelection = playerChoice.toLowerCase();
  let paper = "Paper beats rock";
  let rock = "Rock beats scissors";
  let scissors = "Scissors beat paper";
  let win = "You win!";
  let lose = "You lose!";
  if (computerSelection === playerSelection) {
    result = `It's a draw! ${playerSelection} = ${computerSelection}`;
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    result = `${lose} ${paper}.`;
    computerScore++;
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    result = `${lose} ${scissors}.`;
    computerScore++;
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    result = `${lose} ${rock}.`;
    computerScore++;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    result = `${win} ${paper}`;
    playerScore++;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    result = `${win} ${scissors}`;
    playerScore++;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    result = `${win} ${rock}`;
    playerScore++;
  } else {
    result = `Error! Selection not in choice. ${playerSelection} and ${computerSelection}`;
  }
  return result;
};

let playOneGame = (playerChoice) => {
  playOneRound(playerChoice, getComputerChoice);
  scoreComputer.textContent = `${computerScore}`;
  scorePlayer.textContent = `${playerScore}`;

  if(playerScore < 5 && computerScore === 3) {
    resultDisplay.textContent = `You Lost! `;
  } else {
    resultDisplay.textContent = `You Won! `;
  }
};
