console.log("Welcome to the Rock, Paper, Scissors game!");    
let playerScore = 0;
let computerScore = 0;

const resetButton = document.getElementById("reset");
resetButton.addEventListener("click", () => {
    playerScore = 0;
    computerScore = 0;
    document.getElementById("result").innerText = "Game reset!";
    document.getElementById("score").innerText = `Player: ${playerScore} - Computer: ${computerScore}`;
});

const buttons = document.querySelectorAll(".game_buttons button");
buttons.forEach(button => {
    button.addEventListener("click", (event) => {
        playRound(event.target.id);
    });
});
// This function compares the player's choice with the computer's choice 
// and determines the winner
function playRound(playerChoice) {
    const computerChoices = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random() * computerChoices.length);
    let computerChoice = computerChoices[randomIndex];
    if (playerChoice === computerChoice) {
        document.getElementById("result").innerText ="It's a tie!";
        document.getElementById("score").innerText = `Player: ${playerScore} - Computer: ${computerScore}`;
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors")
         ||
        (playerChoice === "paper" && computerChoice === "rock")
         ||
        (playerChoice === "scissors" && computerChoice === "paper")
              ) {
        document.getElementById("result").innerText = `You win! ${playerChoice} beats ${computerChoice}.`;
        playerScore++;
        document.getElementById("score").innerText = `Player: ${playerScore} - Computer: ${computerScore}`;
                } 
                else {
                document.getElementById("result").innerText = `You lose! ${computerChoice} beats ${playerChoice}.`;
                computerScore++;
                document.getElementById("score").innerText = `Player: ${playerScore} - Computer: ${computerScore}`;
                     }
                     document.getElementById("score").innerText = `Player: ${playerScore} - Computer: ${computerScore}`;
                    
                    }