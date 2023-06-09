function getComputerChoice() {
    let choiceArray = [
        'rock',
        'paper',
        'scissors'
    ]
    let choice = Math.floor(Math.random() * 3)
    console.log('Computer chose: ' + choiceArray[choice])
    return choiceArray[choice]
}

function playRound(playerSelection, computerSelection) {

    if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection == 'rock')) {
        return "You win!"
    }

    else if (playerSelection == computerSelection) {
        return "Draw!"
    }

    else {
        return "You lose!"
    }
}

const buttons = document.querySelectorAll('button')
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        console.log('You chose: ' + button.id)
        console.log(playRound(button.id, getComputerChoice()))
    })
})
