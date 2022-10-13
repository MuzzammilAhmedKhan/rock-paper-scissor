function getComputerChoice() {
  const choice = ["rock", "paper", "scissors"];
  // console.log("choice.length");
  // console.log(choice.length);
  // let random = Math.random();
  // console.log("random");
  // console.log(random);
  // console.log("random * choice.length");
  // console.log(random * choice.length);
  // console.log("Math.floor(Math.random() * choice.length)");
  // console.log(Math.floor(Math.random() * choice.length));
  return choice[Math.floor(Math.random() * choice.length)];
}

function playRound(playerSelection, computerChoice) {
  let computerSelection = computerChoice();
  playerSelection = playerSelection.toLowerCase();
  let paper = "Paper beats rock";
  let rock = "Rock beats scissors";
  let scissors = "Scissors beat paper";
  let win = "You win!";
  let lose = "You lose!";
  if (computerSelection === playerSelection) {
    return "It's a draw!";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    return `${lose} ${paper}.`;
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return `${lose} ${scissors}.`;
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return `${lose} ${rock}.`;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return `${win} ${paper}`;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return `${win} ${scissors}`;
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    return `${win} ${rock}`;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return `${win} ${rock}`;
  } else {
    return `Error! Selection not in choice. ${playerSelection} and ${computerSelection}`;
  }
}

const buttonsDiv = document.createElement("div");
buttonsDiv.classList.add("buttons");

const rock = document.createElement("button");
rock.classList.add("rock");
rock.textContent = "Rock";

buttonsDiv.appendChild(rock);

const paper = document.createElement("button");
paper.classList.add("paper");
paper.textContent = "Paper";

buttonsDiv.appendChild(paper);

const scissors = document.createElement("button");
scissors.classList.add("scissors");
scissors.textContent = "Scissors";

buttonsDiv.appendChild(scissors);

document.body.appendChild(buttonsDiv);

const result = document.createElement("div");
result.classList.add("result");

paper.addEventListener("click", () => {
  result.textContent = playRound("Paper", getComputerChoice);
  document.body.appendChild(result);
});

rock.addEventListener("click", () => {
  result.textContent = playRound("rock", getComputerChoice);
  document.body.appendChild(result);
});

scissors.addEventListener("click", () => {
  result.textContent = playRound("scissors", getComputerChoice);
  document.body.appendChild(result);
});

