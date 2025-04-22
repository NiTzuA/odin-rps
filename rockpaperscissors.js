let getComputerChoice = () => {
    let random = Math.floor(Math.random() * 3)
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

humanScore = 0;
computerScore = 0;
round = 0;

document.querySelectorAll('.choice-button').forEach(button => {
    button.addEventListener("click", () => {
        let playerInput;
        switch (button.id) {
            case "rock-button":
                playerInput = "rock";
                break;
            case "paper-button":
                playerInput = "paper";
                break;
            case "scissors-button":
                playerInput = "scissors";
                break;
        }

        let computerInput = getComputerChoice();

        let score = playRound(playerInput, computerInput);
        if (score == "win") {
            humanScore++;
            alert(`You won! Your current score is ${humanScore}`);
        } else if (score == "lose") {
            computerScore++;
            alert(`You lost. Computer score is currently ${computerScore}`);
        } else {
            alert("It's a draw!");
        }

        div = document.querySelector(".results");
        const result = document.createElement("p");
        result.classList.add("result");
        
        if (score == "win") {
            result.textContent = `Player chose ${playerInput} while computer chose ${computerInput}. Player Won!`;
            result.style.color = "green";

        } else if (score == "lose") {
            result.textContent = `Player chose ${playerInput} while computer chose ${computerInput}. Player Lost!`;
            result.style.color = "red";
        } else {
            result.textContent = `Player chose ${playerInput} while computer chose ${computerInput}. It's a draw!`;
            result.style.color = "black";
        }

        div.appendChild(result);
        round++;

        if (round == 5) {
            const gameOver = document.createElement("p");
            gameOver.classList.add("game-over");
            gameOver.textContent = `Final Score is Player: ${humanScore} and Computer: ${computerScore}`;
            gameOver.style.fontWeight = "bold";
            div.appendChild(gameOver);
            document.querySelectorAll(".choice-button").forEach(btn => btn.disabled = true);
            return
        }
    });
});

let playRound = (humanChoice, computerChoice) => {
    if (humanChoice == computerChoice) {
        return "draw";
    } else if ((humanChoice == "rock" && computerChoice == "scissors") 
        || (humanChoice == "paper" && computerChoice == "rock") 
        || (humanChoice == "scissors" && computerChoice == "paper"))
    {
        return "win";
    } else {
        return "lose";
    }
}