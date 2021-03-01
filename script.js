let winner = "";
let pscore = 0;
let cscore = 0;
let listen = document.querySelectorAll(".btn");
for (let i = 0; i < listen.length; i++) {
  listen[i].addEventListener("click", function () {
    console.log(this.id);
    game(this.id);
  });
}
// SINGLE GAME FUNCTION

function game(userInput) {
  if (winner != "") {
    document.getElementById("victor").textContent =
      "First to 5: Make Another Selection";
    document.getElementById("victor").style.fontSize = "1.5rem";
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
  console.log("comp: " + compInput);
  if (compInput === userInput) {
    document.getElementById("winner").textContent = "TIE!";
    setScore(pscore, cscore);
    console.log("Tie");
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
      winner = "THE RESISTANCE";
      console.log(winner);
    } else {
      winner = "THE TERMINATOR";
      console.log(winner);
    }
    pscore = 0;
    cscore = 0;
    const vic = document.getElementById("victor");
    vic.textContent = winner + " IS VICTORIOUS!";
    vic.style.fontSize = "4rem";
  }
}
function setScore() {
  document.getElementById("pscore").textContent = "Resistance: " + pscore;
  document.getElementById("cscore").textContent = "Terminator: " + cscore;
  return;
}
