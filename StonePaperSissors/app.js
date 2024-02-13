let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.getElementById("msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock","paper","scissors"]
    let ramIdx = Math.floor(Math.random()*3);
    return options[ramIdx]
}

const drawGame = () => {
    console.log("The game was draw")
    msg.innerText = "Game is draw"
}

const showWinner = (userWin) => {
    if(userWin){
        console.log("You win!!")
        msg.innerText = "You win!!"
        userScore++;
        userScorePara.innerText = userScore;
    }
    else{
        console.log("You lost")
        msg.innerText = "You lost"
        compScore++;
        compScorePara.innerText = compScore;
    }
}

const playGame = (userChoice) => {
    console.log("choice was clicked ",userChoice)

    //Generate computer choice
    const compChoice = genCompChoice();
    console.log("Computer choice ", compChoice)

    //draw condition
    if(userChoice === compChoice){
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;

        }else if (userChoice === "paper"){
            userWin = compChoice ==="scissors" ? false : true;
        }else{
            userWin = compChoice ==="rock" ? false : true ;
        }
        showWinner(userWin);
    }

};

choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})