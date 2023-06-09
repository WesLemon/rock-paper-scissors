function getComputerChoice() {
    let choiceArray = [
        'Rock',
        'Paper',
        'Scissors'
    ]
    let choice = Math.floor(Math.random() * 3)
    const computerMessage = document.querySelector('.computer-message')
    computerMessage.classList.add('text')
    computerMessage.textContent = 'The computer chose: ' + choiceArray[choice]
    return choiceArray[choice]
}

function playRound(playerSelection, computerSelection) {
    if ((playerSelection == 'Rock' && computerSelection == 'Scissors') ||
        (playerSelection == 'Scissors' && computerSelection == 'Paper') ||
        (playerSelection == 'Paper' && computerSelection == 'Rock')) {
        playerScore++
        return "You win!"
    }
    else if (playerSelection == computerSelection) {
        return "Draw!"
    }
    else {
        computerScore++
        return "You lose!"
    }
}

function endGame(result) {
    document.open()
    document.write('<head><meta charset="UTF-8"><title>Rock Paper Scissors</title><link rel="stylesheet" href="style.css"></head>')
    document.write('<body></body>')
    const message = document.createElement('h1')
    message.textContent = result
    message.classList.add('end')
    const container = document.querySelector('body')
    container.appendChild(message)
    const button = document.createElement('button')
    button.textContent = 'Play again?'
    button.style.backgroundColor = 'black'
    button.style.color = 'white'
    button.style.border = '1px solid white'
    button.style.padding = '5px 10px'
    container.appendChild(button)
    button.addEventListener('click', () => {
        location.reload()
    })
}

function game() {
    const player = document.querySelector('.player-score')
    player.textContent = playerScore
    const computer = document.querySelector('.computer-score')
    computer.textContent = computerScore

    const buttons = document.querySelectorAll('button')
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            const playerMessage = document.querySelector('.player-message')
            playerMessage.classList.add('text')
            playerMessage.textContent = 'You chose: ' + button.id
            result = playRound(button.id, getComputerChoice())
            const resultMessage = document.querySelector('.result-message')
            resultMessage.classList.add('text')
            resultMessage.textContent = result
            player.textContent = playerScore
            computer.textContent = computerScore
            if (playerScore > 4) {
                endGame('You win!')
            }
            else if (computerScore > 4) {
                endGame('You lose!')
            }
        })
    })
}

let playerScore = 0
let computerScore = 0
game()

