// ROCK PAPER SCISSORS

const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    let result = "";

    if (playerChoice === computerChoice) {
        result = "It's a tie!";
    } else {
        switch (playerChoice) {
            case "rock":
                (computerChoice === "scissors") ? result = "YOU WIN!" : result = "YOU LOSE!";
                break;
            case "paper":
                (computerChoice === "rock") ? result = "YOU WIN!" : result = "YOU LOSE!";
                break;
            case "scissors":
                (computerChoice === "paper") ? result = "YOU WIN!" : result = "YOU LOSE!";
                break;
        }
    }

    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greenText", "redText", "blueText");

    // Change the color of the result text based on the outcome
    switch(result){
        case "YOU WIN!":
            resultDisplay.style.color = "green";
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
        case "YOU LOSE!":
            resultDisplay.style.color = "red";
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;
        case "It's a tie!":
            resultDisplay.style.color = "blue";
            break;
    }
}


