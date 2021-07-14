// event listeners for rules visibility
$("#rules-btn").click(function () {
  $("#rules").toggle();
});
$(".fa-times-circle").click(function () {
  $("#rules").toggle();
});

let winner = "";
let loser = "";
let pscore = 0;
let cscore = 0;
let listen = document.querySelectorAll(".btn");
for (let i = 0; i < listen.length; i++) {
  listen[i].addEventListener("click", function () {
    // console.log(this.id);
    game(this.id);
  });
}
// SINGLE GAME FUNCTION

function game(userInput) {
  // reset victor id
  if (winner != "") {
    document.getElementById("victor").textContent =
      "First To 5 Wins: Click Icon To Make A Selection";
    document.getElementById("victor").style.fontSize = "1.5rem";
    document.getElementById("victor").style.color = "purple";
    document.getElementById("main-body").classList.remove("hidden");
  }
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
  // console.log("comp: " + compInput);
  if (compInput === userInput) {
    document.getElementById("winner").textContent = "TIE!";
    setScore(pscore, cscore);
    // console.log("Tie");
  } else if (
    (compInput === "rock" && userInput === "scissors") ||
    (compInput === "scissors" && userInput === "paper") ||
    (compInput === "paper" && userInput === "rock")
  ) {
    cscore++;
    setScore(pscore, cscore);
    document.getElementById("winner").textContent = "THE TERMINATOR WON";

    console.log("Computer Wins" + cscore + pscore);
  } else {
    pscore++;
    setScore(pscore, cscore);
    document.getElementById("winner").textContent = "THE RESISTANCE WON";
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
    pscore = 0;
    cscore = 0;
    const vic = document.getElementById("victor");
    document.getElementById("game").classList.add("hidden");
    vic.innerHTML = winner + ": VICTORIOUS " + "<br>" + loser + ": TERMINATED";
    vic.style.fontSize = "3rem";
    vic.style.color = "red";
    const newNode = document.createElement("p");
    const text = document.createTextNode(
      "Make another selection to play again"
    );
    newNode.appendChild(text);
    newNode.style.fontSize = "1.5rem";

    vic.appendChild(newNode);
  }
}
function setScore() {
  document.getElementById("pscore").textContent = "Resistance: " + pscore;
  document.getElementById("cscore").textContent = "Terminator: " + cscore;
  return;
}
