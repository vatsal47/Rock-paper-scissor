function playRound(){
    const array = ["rock", "paper", "scissor"]
    let computerSelection = array[Math.floor(Math.random() * 3)]
    let playerSelection = prompt("Select Your Choice", "")

    if (playerSelection === "rock") {
        if (computerSelection === "rock") {
            return "Game Tied"
        } else if (computerSelection === "paper") {
            return "You Lose"
        } else {
            return "You Win"
        }   
    } else if (playerSelection === "paper") {
        if (computerSelection === "paper") {
            return "Game Tied"
        } else if (computerSelection === "scissor") {
            return "You Lose"
        } else {
            return "You Win"
        }
    } else if (playerSelection === "scissor") {
        if (computerSelection === "scissor") {
            return "Game Tied"
        } else if (computerSelection === "rock") {
            return "You Lose"
        } else {
            return "You Win"
        }
    }
}

function play() {
    let userScore = 0
    let computerScore = 0

    for (let i=0; i<5; i++) {
        if(playRound() === "You Win") {
            userScore++
            alert(`You won this round`)
            
        } else if(playRound() === "You Lose") {
            computerScore++
            alert("You lost this round")
        } else {
            alert("This Round Tied")
        }
    }
    
    if (userScore > computerScore) {
        return `You won the Game\nYour Score: ${userScore}\nComputer Score: ${computerScore}`
    } else if (computerScore > userScore) {
        return `You lost the Game\nYour Score: ${userScore}\nComputer Score: ${computerScore}`
    } else {
        return `Tie, Everyone is a winner today.\nYour Score: ${userScore}\nComputer Score: ${computerScore}`
    }
}

document.querySelector("button").addEventListener('click', () => {
    alert(play())
})