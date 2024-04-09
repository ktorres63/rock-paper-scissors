const options = ["rock", "paper", "scissors"];
const results = ["You Win 🥳", "You Lost 😥", "Draw"];

let playerScore = 0;
let computerScore = 0;
let attempts = 0;

const userSel = document.querySelector("#userSel");
const userScore = document.querySelector("#userScore");
const compSel = document.querySelector("#computerSel");
const compScore = document.querySelector("#computerScore");
const resultUI = document.querySelector("#result");

const items = document.querySelectorAll(".link");
items.forEach((i) => {
  i.addEventListener("click", chooseOption);
});

const btn = document.querySelector("button");
btn.addEventListener("click", () => location.reload());

function showResult(att) {
  if (att === 5) {
    if (playerScore > computerScore) {
      resultUI.textContent = results[0];
    } else if (computerScore > playerScore) {
      resultUI.textContent = results[1];
    } else {
      resultUI.textContent = results[2];
    }
  }
}


function chooseOption(e) {
  let user = e.target.id;
  let computer = getComputerChoice();
  playRound(user, computer);
  attempts++;

  userSel.textContent = user.toUpperCase();
  compSel.textContent = computer.toUpperCase();

  userScore.textContent = playerScore;
  compScore.textContent = computerScore;
  showResult(attempts);

  
}



function getComputerChoice() {
  let index = Math.floor(Math.random() * options.length);
  return options[index];
}

function playRound(playSel, compSel) {
  if (playSel === options[0] && compSel === options[1]) {
    //rock vs paper
    computerScore++;
  } else if (playSel == options[0] && compSel === options[2]) {
    //rock vs scissors
    playerScore++;
  } else if (playSel == options[1] && compSel === options[0]) {
    // paper vs rock
    playerScore++;
  } else if (playSel == options[1] && compSel === options[2]) {
    // paper vs scissors
    computerScore++;
  } else if (playSel == options[2] && compSel === options[0]) {
    // scissors vs rock
    computerScore++;
  } else if (playSel == options[2] && compSel === options[1]) {
    // scissors vs paper
    playerScore++;
  } else {
    playerScore++;
    computerScore++;
  }
}
