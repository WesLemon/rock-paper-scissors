function getComputerChoice() {
    let choiceArray = [
        'Rock',
        'Paper',
        'Scissors'
    ]
    let choice = Math.floor(Math.random()*3)
    return choiceArray[choice]
}

function playRound(playerSelection, computerSelection) {
    player = playerSelection.toLowerCase()
    computer = computerSelection.toLowerCase()

    if((player == 'rock' && computer == 'scissors') ||
        (player == 'scissors' && computer == 'paper') ||
        (player == 'paper' && computer == 'rock')) {
            return "You win!"
        }

    else if(player == computer) {
        return "Draw!"
    }

    else {
        return "You lose!"
    }
}

computerChoice = getComputerChoice()
console.log("Computer: " + computerChoice)
console.log(playRound('Rock', computerChoice))