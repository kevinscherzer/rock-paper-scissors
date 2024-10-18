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
        console.log(`you both coose ${humanSelection}. It's a tie!`)
    } else if (humanSelection === "rock" && computerSelection === "scissors") {
        console.log(`You choose ${humanSelection}, the Computer choose ${computerSelection}. Congratulations you won`)
        humanScore += 1;
    } else if (humanSelection === "scissors" && computerSelection === "paper") {
        console.log(`You choose ${humanSelection}, the Computer choose ${computerSelection}. Congratulations you won`)
        humanScore += 1
    } else if (humanSelection === "paper" && computerSelection === "rock") {
        console.log(`You choose ${humanSelection}, the Computer choose ${computerSelection}. Congratulations you won`)
        humanScore += 1;
    } else {
        console.log(`You choose ${humanSelection}, the Computer choose ${computerSelection}. You lost`)
        computerScore += 1;
    }
    if (humanScore === 5) {
        const winner = "You";
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
    console.log('Game Started');
    startGameBtn.style.display = "none";
    PLAYAGAIN.style.display = "none";
    playerSelectionBlock.style.display = "flex";
    humanScore = 0;
    computerScore = 0;
};

function getGameWinner(winner) {
    winnerDeclaration.textContent = `${winner} is the winner!!!`;
    display.appendChild(winnerDeclaration);
    playerSelectionBlock.style.display = 'none';
    PLAYAGAIN.style.display = "block";
    display.appendChild(PLAYAGAIN);
};

//playGame();
const display = document.querySelector('.display');

const startGameBtn = document.querySelector('#play-game-btn');
const playerSelectionBlock = document.querySelector('#player-choice');

const playerSelectionBtn = document.querySelectorAll('.player-choice-btn');
for (let button of playerSelectionBtn) {
    button.addEventListener("click", () => {
        const buttonPressed = button.id;
        playRound(buttonPressed);
    });
}


const winnerDeclaration = document.createElement('p');

const PLAYAGAIN = document.createElement('button');
PLAYAGAIN.textContent = "PLAY AGAIN?";
PLAYAGAIN.classList.add("button");
PLAYAGAIN.id = 'winner-text';
PLAYAGAIN.addEventListener("click", () => {
    display.removeChild(winnerDeclaration);
    display.removeChild(PLAYAGAIN);
    startGame();
});



startGameBtn.addEventListener('click', startGame);