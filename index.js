let playerEl = document.getElementById("player");

let botEl = document.getElementById("bot");

const scoreLimit = 5

var botScore = 0
var playerScore = 0


function roll(){
    var generate = Math.floor(Math.random() * 3) + 1;
    rollNumber = generate
    console.log(rollNumber)
    if (rollNumber == 1){
        console.log("Tie")
    }
    else if (rollNumber == 2){
        console.log("You Lose")
        console.log("")
        botScore = botScore + 1
        botEl.innerText = botScore
        console.log("Player score: " + playerScore)
        console.log("Bot score: " + botScore)
        checkScore(playerScore, botScore) 
    }
    else {
        console.log("You win")
        console.log("")
        playerScore = playerScore + 1
        playerEl.innerText = playerScore
        console.log("Player score: " + playerScore)
        console.log("Bot score: " + botScore)
        checkScore(playerScore, botScore)  
    }
}

function roll2(){
    var generate = Math.floor(Math.random() * 3) + 1;
    rollNumber = generate
    console.log(rollNumber)
    if (rollNumber == 1){
        console.log("You win")
        console.log("")
        playerScore = playerScore + 1
        playerEl.innerText = playerScore
        console.log("Player score: " + playerScore)
        console.log("Bot score: " + botScore)
        checkScore(playerScore, botScore)
    }
    else if (rollNumber == 2){
        console.log("Tie")
    }
    else {
        console.log("You Lose")
        console.log("")
        botScore = botScore + 1
        botEl.innerText = botScore
        console.log("Player score: " + playerScore)
        console.log("Bot score: " + botScore)
        checkScore(playerScore, botScore) 
    }
}

function roll3(){
    var generate = Math.floor(Math.random() * 3) + 1;
    rollNumber = generate
    console.log(rollNumber)
    if (rollNumber == 1){
        console.log("Tie")
        console.log("You Lose")
        console.log("")
        botScore = botScore + 1
        botEl.innerText = botScore
        console.log("Player score: " + playerScore)
        console.log("Bot score: " + botScore)
        checkScore(playerScore, botScore) 
    }
    else if (rollNumber == 2){
        console.log("You win")
        console.log("")
        playerScore = playerScore + 1
        playerEl.innerText = playerScore
        console.log("Player score: " + playerScore)
        console.log("Bot score: " + botScore)
        checkScore(playerScore, botScore)
    }
    else {
        console.log("Tie")
    }
}



function checkScore(playerScore, botScore){
    if (playerScore == scoreLimit){
        console.log("You win, Player wins.")
        resetGame()
    }
    else if (botScore == scoreLimit){
        console.log("YOU LOSE THE GAME")
        resetGame()
    }
}

function resetGame(){
    botEl.innerText = 0
    playerEl.innerText = 0
    playerScore = 0
    botScore = 0
}