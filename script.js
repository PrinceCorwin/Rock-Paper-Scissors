// event listeners for rules visibility
$("#rules-btn").click(function () {
  $("#rules").toggle();
});
$(".fa-times-circle").click(function () {
  $("#rules").toggle();
});

let pscore = Number(document.getElementById("pscore").textContent);
let cscore = Number(document.getElementById("cscore").textContent);
const vic = document.querySelector(".victor");
const vicDiv = document.getElementById("victor");
const rps = document.querySelector(".rps");

// listener for play again button
// document.getElementById("playAgainBtn").addEventListener("click", displayDate);
document.getElementById("playAgainBtn").addEventListener("click", playAgain);
function playAgain() {
  console.log("here");
  vic.style.display = "none";
  rps.style.display = "block";
  setScore("0", "0");
  document.getElementById("winner").textContent = "";
}

const winCombo = {
  rock: "Rock CRUSHES Scissors!",
  paper: "Paper COVERS Rock!",
  scissors: "Scissors CUTS Paper!",
};
// let winner = "";
// let loser = "";
// let pscore = 0;
// let cscore = 0;
let listen = document.querySelectorAll(".btn");
for (let i = 0; i < listen.length; i++) {
  listen[i].addEventListener("click", function () {
    // console.log(this.id);
    game(this.id);
  });
}
// SINGLE GAME FUNCTION

function game(userInput) {
  let compInput = Math.floor(Math.random() * 3);
  switch (compInput) {
    case 0:
      compInput = "rock";
      break;
    case 1:
      compInput = "paper";
      break;
    case 2:
      compInput = "scissors";
      break;
  }
  document.getElementById("term-choice").textContent = compInput.toUpperCase();
  document.getElementById("player-choice").textContent =
    userInput.toUpperCase();

  // determine winner of the hand

  // let winner = "";
  // let loser = "";
  let pscore = Number(document.getElementById("pscore").textContent);
  let cscore = Number(document.getElementById("cscore").textContent);
  console.log(pscore, cscore);
  if (compInput === userInput) {
    document.getElementById("winner").textContent = "TIE!";
    // setScore(pscore, cscore);
  } else if (
    (compInput === "rock" && userInput === "scissors") ||
    (compInput === "scissors" && userInput === "paper") ||
    (compInput === "paper" && userInput === "rock")
  ) {
    cscore++;
    setScore(pscore, cscore);
    document.getElementById("winner").textContent =
      "TERMINATOR WINS: " + winCombo[compInput];

    console.log("Computer Wins" + cscore + pscore);
  } else {
    pscore++;
    setScore(pscore, cscore);
    document.getElementById("winner").textContent =
      "RESISTANCE WINS: " + winCombo[userInput];
    console.log("Player Wins" + pscore + cscore);
  }
  if (pscore >= 5 || cscore >= 5) {
    if (pscore > cscore) {
      loser = "Terminators";
      winner = "Resistance";

      console.log(winner);
    } else {
      loser = "Resistance";
      winner = "Terminators";
      console.log(winner);
    }

    rps.style.display = "none";
    // const rps = document.querySelectorAll(".btn");
    // rps.forEach(hideBtns);
    // function hideBtns(item) {
    //   item.style.display = "none";
    // }
    vic.style.display = "flex";
    vicDiv.innerHTML =
      winner + ": VICTORIOUS! " + "<br>" + loser + ": TERMINATED!";
  }
}
function setScore(pscore, cscore) {
  document.getElementById("pscore").textContent = pscore.toString();
  document.getElementById("cscore").textContent = cscore.toString();
  return;
}
