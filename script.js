let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = ()=>{
    //rock paper scissors
    let options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx]; //comp choice returned 
}

const drawGame = ()=>{
    console.log("Game was draw.")
    msg.innerText = "Game Drawn!! Play Again"
    msg.style.backgroundColor = "blue";
}

const showWinner = (userWin, userChoice, compChoie) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("You Win!!");
        msg.innerText = `You Win..!! ${userChoice} beats ${compChoie}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        console.log("You loose!!");
        msg.innerText = `You loose!! ${compChoie} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}


const playGame = (userChoice)=>{
    console.log("user choice is: ",userChoice);
    // generate computer choice
    const compChoie = genCompChoice();
    console.log("Computer Choice: ",compChoie);

    if(userChoice ===  compChoie){
        // draw game
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            //scissor,paper
            userWin = compChoie === "paper" ? false : true;
        }else if (userChoice === "paper"){
            //rock,scissors
            userWin = compChoie === "scissors" ? false : true;
        } else{
            userWin = compChoie === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoie);
    }

};

choices.forEach((choice) =>{
    //console.log(choice);
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id");
        //console.log("choice was clicked",userChoice);
        playGame(userChoice);
    })
})