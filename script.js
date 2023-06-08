function getComputerChoice() {
    let choiceArray = [
        'Rock',
        'Paper',
        'Scissors'
    ]
    let choice = Math.floor(Math.random()*3)
    return choiceArray[choice]
}

console.log(getComputerChoice())