let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");
let msg = document.querySelector("#Status");
const choices = document.querySelectorAll(".choice");

let userScore = 0;
let compScore = 0;

const genChoice = () => {
    let options = ["rock", "papper", "scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
};

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        console.log("You Win");
        userScore++;
        msg.innerText=`You Win ${userChoice} beats ${compChoice}`;
        userScorePara.innerText = userScore;
        msg.style.backgroundColor="green";
    } else {
        console.log("You Lose");
        compScore++;
        msg.innerText = `You Lose ${compChoice} beats ${userChoice}`;
        compScorePara.innerText = compScore;
        msg.style.backgroundColor="red";
    }
}

const drawGame = () => {
    console.log("Game Draw");
    msg.innerText = "Game Draw Play Again";
    msg.style.backgroundColor = "#081b31";
}

const playGame = (userChoice) => {
    console.log(userChoice);
    const compChoice = genChoice();
    console.log(compChoice);

    if(userChoice === compChoice) {
        drawGame();

    }else {
            let userWin = true;
            if(userChoice === "rock"){
                userWin = compChoice == "paper" ? false : true;
            }
            
            else if(userChoice === "paper"){
                userWin = compChoice == "scissors" ? false : true;
            }

            else {
                userWin = compChoice == "rock" ? false : true;
            }
            showWinner(userWin, userChoice, compChoice);
           }
    
};

choices.forEach((choice)=> {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});