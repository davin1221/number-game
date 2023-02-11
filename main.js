let computerNumber = 0
let playButton = document.getElementById("play-button")
let userInput = document.getElementById("user-Input")
let resetButton = document.getElementById("reset-button")
let resultAreaImg = document.querySelector(".result-area")
let chanceArea = document.getElementById("chance-area")
let wrongArea = document.getElementById("wrong-number")
let chance = 5
let gameOver = false
let numberHistory = []


chanceArea.innerHTML = `남은 기회: ${chance}`
playButton.addEventListener("click", play)
resetButton.addEventListener("click", reset)
userInput.addEventListener("focus", function(){userInput.value = ""})


function randomNumber(){
    computerNumber = Math.floor(Math.random() * 100) + 1
    console.log("정답: " + computerNumber)
}


function play(){
    let userNumber = userInput.value;   

    if(userNumber > 100 || userNumber < 1) {
        wrongArea.textContent = "1에서 100 사이의 숫자를 입력!!"
        return;
    } else if(numberHistory.includes(userNumber)) {
        wrongArea.textContent = "이미 입력한 숫자!!"
        return;
    }
    

    if(userNumber > computerNumber) {
        resultAreaImg.src = "img/down.png"
        wrongArea.textContent = ""
    } else if(userNumber < computerNumber) {
        resultAreaImg.src = "img/up.png"
        wrongArea.textContent = ""
    } else {
        resultAreaImg.src = "img/win.png"
        wrongArea.textContent = ""
        gameOver = true
    }

    chance --;
    chanceArea.innerHTML = `남은 기회: ${chance}`

    if(chance < 1) {
        gameOver = true;
        resultAreaImg.src = "img/lose.png"
    }

    if(gameOver == true){
        playButton.disabled = true;
    }

    numberHistory.push(userNumber)
    console.log(numberHistory)
}


function reset(){
    chance = 5
    chanceArea.innerHTML = `남은 기회: ${chance}`
    randomNumber()
    userInput.value = ""
    gameOver = false;
    playButton.disabled = false;
    resultAreaImg.src = "img/startimoji.png"
    numberHistory = []
    wrongArea.textContent = ""

}

randomNumber()