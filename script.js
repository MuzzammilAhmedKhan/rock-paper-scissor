function getComputerChoice() {
    const choice = ['rock', 'paper', 'scissor'];
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

getComputerChoice();

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    let paper = "Paper beats rock";
    let rock = "Rock beats scissors";
    let scissors = "Scissors beat paper"
    let win = "You win!";
    let lose = "You lose!";
    if (playerSelection === "rock" && computerSelection === "paper") {
        return `${lose} ${paper}.`;
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return `${lose} ${scissors}.`;
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return `${lose} ${rock}.`;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return `${win} ${paper}`;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return `${win} ${scissors}`;
    } else if (playerChoice === "rock" && computerChoice === "paper") {
        return `${win} ${rock}`;
    }
}