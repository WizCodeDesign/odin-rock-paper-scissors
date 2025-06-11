console.log("Welcome to the Rock, Paper, Scissors game!");

// This function generates a random choice for the computer
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() 
    * choices.length);
    return choices[randomIndex];
    }
// This function allows the player to input their choice
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

// This function compares the player's choice with the computer's choice 
// and determines the winner
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

// This function starts the game and plays 5 rounds, keeping track of the
// scores.
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
            console.log(`Player Score: ${playerScore} - Computer Score: ${computerScore}`);
        } else if (result.startsWith("You lose")) {
            computerScore++;
            console.log(`Player Score: ${playerScore} - Computer Score: ${computerScore}`);
        }
        if (i != 5) {
                   console.log(`Round ${i + 1} complete. - on to round ${i + 2}`);
        }
        else {
            console.log(`All rounds complete!`);
        }
    }

    console.log(`Final Score: Player ${playerScore} - Computer ${computerScore}`);
}
// Call the playGame function to start the game
playGame();
