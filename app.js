let options = ["rock", "paper", "scissors"];
let results = ["You Win!", "You Lost 😥", "Draw"]
let playerChoice = null;
let computerChoice = null;
let playerScore = 0;
let computerScore = 0;


function chooseRock() {
  let userSel = document.getElementById("userSel");
  let userScore = document.getElementById("userScore");
  let compSel = document.getElementById("computerSel");
  let compScore = document.getElementById("computerScore");
  let result = document.getElementById("result")
  

  userSel.textContent = "Rock";
  playerChoice = "rock";

  computerChoice = getComputerChoice();
  compSel.textContent = computerChoice;

  result.textContent = playRound(playerChoice, computerChoice);

  userScore.textContent = playerScore;
  compScore.textContent = computerScore;
}
function choosePaper() {
  let userSel = document.getElementById("userSel");
  let userScore = document.getElementById("userScore");
  let compSel = document.getElementById("computerSel");
  let compScore = document.getElementById("computerScore");
  let result = document.getElementById("result")

  userSel.textContent = "Paper";
  playerChoice = "paper";

  computerChoice = getComputerChoice();
  compSel.textContent = computerChoice;

  result.textContent = playRound(playerChoice, computerChoice);

  userScore.textContent = playerScore;
  compScore.textContent = computerScore;

}
function chooseScissors() {
  let userSel = document.getElementById("userSel");
  let userScore = document.getElementById("userScore");
  let compSel = document.getElementById("computerSel");
  let compScore = document.getElementById("computerScore");
  let result = document.getElementById("result")


  userSel.textContent = "Scissors";
  playerChoice = "scissors";

  computerChoice = getComputerChoice();
  compSel.textContent = computerChoice;

  result.textContent = playRound(playerChoice, computerChoice);

  userScore.textContent = playerScore;
  compScore.textContent = computerScore;
}

function getComputerChoice() {
  let index = Math.floor(Math.random() * options.length);
  return options[index];
}
function getPlayerChoice() {
  return playerChoice;
}

function playRound(playSel, compSel) {
  if (playSel === options[0] && compSel === options[1]) {
    //rock vs paper
    computerScore++;
    return results[1];
  } else if (playSel == options[0] && compSel === options[2]) {
    //rock vs scissors
    playerScore++;
    return results[0];
  } else if (playSel == options[1] && compSel === options[0]) {
    // paper vs rock
    playerScore++;
    return results[0];
  } else if (playSel == options[1] && compSel === options[2]) {
    // paper vs scissors
    computerScore++;
    return results[1];
  } else if (playSel == options[2] && compSel === options[0]) {
    // scissors vs rock
    computerScore++;
    return results[1];
  } else if (playSel == options[2] && compSel === options[1]) {
    // scissors vs paper
    playerScore++;
    return results[0];
  }
  else{
    return results[2]
  }
}

