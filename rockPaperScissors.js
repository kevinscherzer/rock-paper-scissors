//Create random number between 1 and 3 and store it
function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3) + 1;
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
function getHumanChoice() {
    let humanChoice = prompt("Rock, Paper, or Scissors? Choose your weapon!")
    return humanChoice;
}
//play 5 rounds
function playGame() {
    function playRound(humanChoice, computerChoice) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        humanSelection.toLowerCase();
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
    }
    let humanScore = 0;
    let computerScore = 0;
    for (i = 0; i < 5; i++) {
        playRound();
    }
    if (humanScore > computerScore) {
        console.log(`You have won. ${humanScore} vs ${computerScore}`)
    } else if (humanScore < computerScore) {
        console.log(`You have lost. ${humanScore} vs ${computerScore}`)
    } else {
        console.log(`It's a tie. ${humanScore} vs ${computerScore}`)
    }

}

playGame();
