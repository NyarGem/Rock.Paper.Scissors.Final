let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("userscore");
const compScore_span = document.getElementById("compscore");
// const scoreBoard_div = document.querySelector(".scoreboard"); //gets the first element .scoreboard
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function convertToWord(letter){
    if(letter === "r") return "Rock";
    if(letter === "p") return "Paper";
    return "Scissors";
}

function win(a,b){
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = computerScore;
    // console.log(a);
    // console.log(b);
    const smallUserWord = "user".fontsize(4).sub();
    const smallCompWord = "comp".fontsize(4).sub();
    result_p.innerHTML = `${convertToWord(a)} ${smallUserWord} beats ${convertToWord(b)} ${smallCompWord}. You win!!!`;
}

function lose(a,b){
    computerScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(4).sub();
    const smallCompWord = "comp".fontsize(4).sub();
    result_p.innerHTML = `${convertToWord(a)} ${smallUserWord} loses to ${convertToWord(b)} ${smallCompWord}. You lose!`;
}

function draw(){
    result_p.innerHTML = `It's a DRAW!`;
}

function game(userChoice){
    const computerChoice= getComputerChoice();
    // console.log("Computer Choice " + computerChoice);
    // console.log("User Choice " + userChoice);
    switch(userChoice + computerChoice){
        case "pr":
        case "rs":
        case "sp":
            win(userChoice, computerChoice);
            break;

        case "rp":
        case "sr":
        case "ps":
            lose(userChoice, computerChoice);
            break;

        case "rr":
        case "ss":
        case "pp":
            draw(userChoice, computerChoice);
    }
}
game();
// The function is game with the parameter user choice. In order to get anything out of this, we need to pass on agruments ot our parameter. The arguments passed or are from the functions betlow. Functions within function.

function main(){
    rock_div.addEventListener('click', function(){
        game("r");
    })
    paper_div.addEventListener('click', function(){
        game("p");
    })
    scissors_div.addEventListener('click', function(){
        game("s");
    })
}
main();

function getComputerChoice(){
    const choices=['r', 'p','s'];
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
}
console.log(getComputerChoice());
