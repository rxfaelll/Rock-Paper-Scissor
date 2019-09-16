const player = document.querySelectorAll(".player-btn");
const feedbackMsg = document.querySelector(".feedback-msg")
const compMoveList = ["rock", "paper", "scissor"];

for(let i = 0; i < player.length; i++){
    player[i].addEventListener("click", function(){
        compareValues(this.value);        
    });    
}

function compareValues(playerMove){
    rollCompMove();
    compMove = rollCompMove();

    if (playerMove == compMove) {        
        showFeedbackMsg("Draw", "draw-feedback");

    } else if (playerMove == "rock" && compMove == "paper") {
        showFeedbackMsg("You Lose!", "lose-feedback");

    } else if (playerMove == "rock" && compMove == "scissor") {
        showFeedbackMsg("You Won!", "win-feedback");

    } else if (playerMove == "paper" && compMove == "rock") {
        showFeedbackMsg("You Won!", "win-feedback");

    } else if (playerMove == "paper" && compMove == "scissor") {
        showFeedbackMsg("You Lose!", "lose-feedback");

    } else if (playerMove == "scissor" && compMove == "paper") {
        showFeedbackMsg("You Won!", "win-feedback");

    } else if (playerMove == "scissor" && compMove == "rock") {
        showFeedbackMsg("You Lose!", "lose-feedback");

    }
}

function rollCompMove(){
    return compMoveList[Math.floor(Math.random() * 3) + 0];
}

function showFeedbackMsg(message, feedbackClass) {
    feedbackMsg.innerHTML = message;
    feedbackMsg.className = "";

    feedbackMsg.classList.add(feedbackClass);
}

