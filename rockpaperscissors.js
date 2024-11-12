let getComputerChoice = () => {
    random = Math.floor(Math.random() * 3)
    switch (random) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
        default:
            return "error"
    };
}

let getHumanChoice = () => {
    let userInput = prompt("Welcome to Rock, Paper, and Scissors! \n\nType either Rock, Paper, or Scissors!");
    return userInput.toLowerCase();
}

humanScore = 0;
computerScore = 0;

let playRound = (humanChoice, computerChoice) => {
    if (humanChoice == computerChoice) {
        return "draw";
    } else if ((humanChoice == "rock" && computerChoice == "scissors") || (humanChoice == "paper" && computerChoice == "rock") || (humanChoice == "scissors" && computerChoice == "rock"))
    {
        return "win";
    } else {
        return "lose";
    }
}

for (let i = 0; i < 5; i++) {
    let score = playRound(getHumanChoice(),getComputerChoice());
    if (score == "win") {
        humanScore++;
        alert(`You won! Your current score is ${humanScore}`);
    } else if (score == "lose") {
        computerScore++;
        alert(`You lost. Computer score is currently ${computerScore}`);
    } else {
        alert("It's a draw!");
    }
}

alert(`Final Score is Player: ${humanScore}, Computer: ${computerScore}`);