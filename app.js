const options = ["rock", "paper", "scissors"];
const results = ["You Win 🥳", "You Lost 😥", "Draw"];

let playerScore = 0;
let computerScore = 0;

function chooseOption(e) {
  let user = e.target.id;
  let computer = getComputerChoice();
  let result = playRound(user, computer);

  let userSel = document.querySelector("#userSel");
  let userScore = document.querySelector("#userScore");
  let compSel = document.querySelector("#computerSel");
  let compScore = document.querySelector("#computerScore");
  let resultUI = document.querySelector("#result");
  
  userSel.textContent = user.toUpperCase();
  compSel.textContent = computer.toUpperCase();

  userScore.textContent = playerScore;
  compScore.textContent = computerScore

  resultUI.textContent = result;
  
  console.log(`YOU: ${user} \nIA: ${computer} \nRESULT:${result}`);

}

const items = document.querySelectorAll(".link");
items.forEach((i) => {
  // and for each one we add a 'click' listener
  i.addEventListener("click", chooseOption);
});



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
  } else {
    return results[2];
  }
}

const btn = document.querySelector("button");
btn.addEventListener("click", () => location.reload());
