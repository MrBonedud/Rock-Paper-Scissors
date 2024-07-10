// Variables
let humanScore = 0;
let computerScore = 0;

// Function to get computer choice at random
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const choice = Math.floor(Math.random() * 3);
    return choices[choice];
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
        document.getElementById("result").textContent = "You Win!";
        humanScore += 1;
        document.getElementById("human-score").textContent = humanScore;
    } else if (
        (computerChoice == "rock" && humanChoice == "scissors") ||
        (computerChoice == "paper" && humanChoice == "rock") ||
        (computerChoice == "scissors" && humanChoice == "paper")
    ) {
        document.getElementById("result").textContent = "Computer Wins!";
        computerScore += 1;
        document.getElementById("computer-score").textContent = computerScore;
    } else {
        document.getElementById("result").textContent = "Draw!";
    }

    checkGameEnd();
}

// Function to check if the game has ended
function checkGameEnd() {
    if (humanScore >= 5 || computerScore >= 5) {
        document.getElementById("rock").disabled = true;
        document.getElementById("paper").disabled = true;
        document.getElementById("scissors").disabled = true;
        document.getElementById("reset").style.display = "block";
        document.getElementById("result").textContent += humanScore >= 5 ? " You have reached 5 points and won the game!" : " Computer has reached 5 points and won the game!";
    }
}

// Function to reset the game
function resetGame() {
    humanScore = 0;
    computerScore = 0;
    document.getElementById("human-score").textContent = humanScore;
    document.getElementById("computer-score").textContent = computerScore;
    document.getElementById("result").textContent = "";
    document.getElementById("human-choice").textContent = "";
    document.getElementById("computer-choice").textContent = "";
    document.getElementById("rock").disabled = false;
    document.getElementById("paper").disabled = false;
    document.getElementById("scissors").disabled = false;
    document.getElementById("reset").style.display = "none";
}

// Linking buttons to human choice
document.getElementById('rock').addEventListener('click', function() {
    const humanChoice = "rock";
    document.getElementById("human-choice").textContent = "rock";
    const computerChoice = getComputerChoice();
    document.getElementById("computer-choice").textContent = computerChoice;
    playRound(humanChoice, computerChoice);
});

document.getElementById('paper').addEventListener('click', function() {
    const humanChoice = "paper";
    document.getElementById("human-choice").textContent = "paper";
    const computerChoice = getComputerChoice();
    document.getElementById("computer-choice").textContent = computerChoice;
    playRound(humanChoice, computerChoice);
});

document.getElementById('scissors').addEventListener('click', function() {
    const humanChoice = "scissors";
    document.getElementById("human-choice").textContent = "scissors";
    const computerChoice = getComputerChoice();
    document.getElementById("computer-choice").textContent = computerChoice;
    playRound(humanChoice, computerChoice);
});

// Adding event listener to reset button
document.getElementById('reset').addEventListener('click', resetGame);
