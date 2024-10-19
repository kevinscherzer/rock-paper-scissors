//Create random number between 1 and 3 and store it
function getComputerChoice() {
    const computerChoice = Math.floor(Math.random() * 3) + 1;
    switch (computerChoice) {
        case 1:
            return "rock";
            break;
        case 2:
            return "paper";
            break;
        case 3:
            return "scissors";
    }
}
//Create window to let the player input a choice (rock, paper or scissors)
/*function getHumanChoice(humanChoice) {


    switch (humanChoice) {
        case "choose-rock":
            humanChoice = "rock";
            break;
        case "choose-paper":
            humanChoice = "paper";
            break;
        case "choose-scissors":
            humanChoice = "scissors";
            break;
    }
    return humanChoice;
}*/

function playRound(humanChoice, computerChoice) {
    const humanSelection = humanChoice;
    const computerSelection = getComputerChoice();
    //compare the choices to deklare the winner
    if (humanSelection === computerSelection) {
        winnerDeclaration.textContent = `${humanSelection} vs ${computerSelection}\r\nIt's a tie!`;
        display.insertBefore(winnerDeclaration, computerPoints);
    } else if (humanSelection === "rock" && computerSelection === "scissors") {
        winnerDeclaration.textContent = `${humanSelection} vs ${computerSelection}\r\nyou won`;
        display.insertBefore(winnerDeclaration, computerPoints);
        humanScore += 1;
        playerPoints.textContent = `Player :\r\n${humanScore}`;
    } else if (humanSelection === "scissors" && computerSelection === "paper") {
        winnerDeclaration.textContent = `${humanSelection} vs ${computerSelection}\r\nyou won`;
        display.insertBefore(winnerDeclaration, computerPoints);
        humanScore += 1;
        playerPoints.textContent = `Player :\r\n${humanScore}`;
    } else if (humanSelection === "paper" && computerSelection === "rock") {
        winnerDeclaration.textContent = `${humanSelection} vs ${computerSelection}\r\nyou won`;
        display.insertBefore(winnerDeclaration, computerPoints);
        humanScore += 1;
        playerPoints.textContent = `Player :\r\n${humanScore}`;
    } else {
        winnerDeclaration.textContent = `${humanSelection} vs ${computerSelection}\r\nYou lost`;
        display.insertBefore(winnerDeclaration, computerPoints);
        computerScore += 1;
        computerPoints.textContent = `CPU :\r\n${computerScore}`;
    }
    if (humanScore === 5) {
        const winner = "Player";
        getGameWinner(winner);
    } else if (computerScore === 5) {
        const winner = "Computer";
        getGameWinner(winner);
    }
}

let humanScore = 0;
let computerScore = 0;
//play 5 rounds
function startGame() {
    startGameBtn.style.display = "none";
    PLAYAGAIN.style.display = "none";
    playerSelectionBlock.style.display = "flex";
    humanScore = 0;
    computerScore = 0;
    playerPoints.textContent = 'Player :\r\n0';
    computerPoints.textContent = 'CPU :\r\n0';
};

function getGameWinner(winner) {
    playerPoints.textContent = '';
    computerPoints.textContent = '';
    winnerDeclaration.textContent = `${winner} is the winner!!!\r\n${humanScore} vs ${computerScore}`;
    playerSelectionBlock.style.display = 'none';
    PLAYAGAIN.style.display = "block";
    gameArea.appendChild(PLAYAGAIN);
};

//Setup display to show points and who won
const display = document.querySelector('.display');
display.style.display = 'none';
display.style.justifyContent = 'space-between';

const winnerDeclaration = document.createElement('p');
winnerDeclaration.style.textAlign = 'center';
const playerPoints = document.createElement('p');
const computerPoints = document.createElement('p');

display.appendChild(playerPoints);
display.appendChild(computerPoints);


const startGameBtn = document.querySelector('#play-game-btn');
const playerSelectionBlock = document.querySelector('#player-choice');

const playerSelectionBtn = document.querySelectorAll('.player-choice-btn');

playerSelectionBtn.forEach(button => {
    button.addEventListener("click", () => {
        const buttonPressed = button.id;
        playRound(buttonPressed);
    });
});
/*for (let button of playerSelectionBtn) {
                button.addEventListener("click", () => {
                    const buttonPressed = button.id;
                    playRound(buttonPressed);
                });
}*/



const PLAYAGAIN = document.querySelector('#play-again-btn');
PLAYAGAIN.style.display = "none";
PLAYAGAIN.addEventListener("click", () => {
    display.removeChild(winnerDeclaration);
    gameArea.removeChild(PLAYAGAIN);
    display.appendChild(playerPoints);
    display.appendChild(computerPoints);
    startGame();
});

const gameArea = document.querySelector('#game-area');


startGameBtn.addEventListener('click', () => {
    display.style.display = "flex";
    startGame();
});