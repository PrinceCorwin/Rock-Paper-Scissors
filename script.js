function round() {
  let round = 1;
  let pscore = 0;
  let cscore = 0;
  for (let i = 1; i < 6; i++) {
    console.log("Round: " + round);
    const userInput = prompt(
      `enter "rock", "paper", or "scissors"`
    ).toLowerCase();
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
    console.log("Computer chooses: " + compInput);
    console.log("Player chooses: " + userInput);
    console.log(game(userInput, compInput));
    console.log("SCORE Player: " + pscore + " Computer: " + cscore);
    round++;
  }

  function game(userInput, compInput) {
    if (compInput === userInput) {
      return "tie";
    } else if (
      (compInput === "rock" && userInput === "scissors") ||
      (compInput === "scissors" && userInput === "paper") ||
      (compInput === "paper" && userInput === "rock")
    ) {
      cscore++;
      return "Computer Wins";
    } else {
      pscore++;
      return "Player Wins";
    }
  }
  if (pscore === cscore) {
    console.log("Tie Score!");
  } else if (pscore < cscore) {
    console.log("Computer Wins!");
  } else {
    console.log("Player Wins!");
  }
}
round();
