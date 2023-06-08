function getComputerChoice() {
    let choiceArray = [
        'Rock',
        'Paper',
        'Scissors'
    ]
    let choice = Math.floor(Math.random() * 3)
    return choiceArray[choice]
}

function getPlayerChoice() {
    let valid = false
    while (!valid) {
        choice = prompt('What do you choose? Rock, Paper, or Scissors?')
        choice = choice.toLowerCase()
        if (choice == 'rock' || choice == 'scissors' || choice == 'paper') {
            valid = true
        }
    }
    return choice
}

function playRound(playerSelection, computerSelection) {
    player = playerSelection.toLowerCase()
    computer = computerSelection.toLowerCase()

    if ((player == 'rock' && computer == 'scissors') ||
        (player == 'scissors' && computer == 'paper') ||
        (player == 'paper' && computer == 'rock')) {
        return "You win!"
    }

    else if (player == computer) {
        return "Draw!"
    }

    else {
        return "You lose!"
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        computerChoice = getComputerChoice()
        playerChoice = getPlayerChoice()
        console.log("Computer: " + computerChoice)
        console.log(playRound(playerChoice, computerChoice))
    }
}

game()
