// Variables
let humanScore = 0;
let computerScore = 0;

// Function to get computer choice at random
function getComputerChoice() {
    const max = 3; 
    const choice = Math.floor(Math.random() * max);

    if (choice == 0) {
        return "rock";
    } else if (choice == 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

// Function to get human choice
function getHumanChoice() {
    const humanChoice = prompt("Rock, Paper, or Scissors").toLowerCase(); 

    if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors") {
        return humanChoice;
    } else {
        console.log("Invalid choice, please choose Rock, Paper, or Scissors.");
        return getHumanChoice(); 
    }
}

// Function to play a round
function playRound(humanChoice, computerChoice) {
    console.log(`You chose: ${humanChoice}`);
    console.log(`Computer chose: ${computerChoice}`);
    
    if (
        (humanChoice == "rock" && computerChoice == "scissors") ||
        (humanChoice == "paper" && computerChoice == "rock") ||
        (humanChoice == "scissors" && computerChoice == "paper")
    ) { 
        console.log("You Win");
        humanScore += 1;
    } else if (
        (computerChoice == "rock" && humanChoice == "scissors") ||
        (computerChoice == "paper" && humanChoice == "rock") ||
        (computerChoice == "scissors" && humanChoice == "paper")
    ) {
        console.log("Computer Wins");
        computerScore += 1;
    } else {
        console.log("Draw");
    }
}

// Function to play the game
function playGame(rounds) {
    for (let i = 0; i < rounds; i++) {
        const computerChoice = getComputerChoice();
        const humanChoice = getHumanChoice();

        playRound(humanChoice, computerChoice);

        console.log(`Score after round ${i + 1}: Human: ${humanScore}, Computer: ${computerScore}`);
    }
}

// Start the game with a specified number of rounds
playGame(5);
