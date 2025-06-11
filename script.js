console.log("Welcome to the Rock, Paper, Scissors game!");

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() 
    * choices.length);
    return choices[randomIndex];
    }

function getPlayerChoice() {
    let playerChoice = prompt("Enter rock, paper, or scissors:")
    .toLowerCase();
    while (!["rock", "paper", "scissors"].includes(playerChoice))
        {
        playerChoice = prompt("Invalid choice. Please enter rock, paper, or scissors:")
        .toLowerCase();
        }
    return playerChoice;
}       

function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors")
         ||
        (playerChoice === "paper" && computerChoice === "rock")
         ||
        (playerChoice === "scissors" && computerChoice === "paper")
              ) {
        return `You win! ${playerChoice} beats ${computerChoice}.`;
                } 
                else {
                return `You lose! ${computerChoice} beats ${playerChoice}.`;
                     }
}

playRound(getPlayerChoice(), getComputerChoice());
function playGame() {
    let playerScore = 0;
    let computerScore = 0;
    const rounds = 5;

    for (let i = 0; i < rounds; i++) {
        const playerChoice = getPlayerChoice();
        const computerChoice = getComputerChoice();
        const result = playRound(playerChoice, computerChoice);
        console.log(result);

        if (result.startsWith("You win")) {
            playerScore++;
        } else if (result.startsWith("You lose")) {
            computerScore++;
        }
    }

    console.log(`Final Score: Player ${playerScore} - Computer ${computerScore}`);
}
playGame();
// This function starts the game and plays 5 rounds, keeping track of the scores.
