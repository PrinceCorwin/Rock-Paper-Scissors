function game(userInput, compInput) {
  if (compInput === userInput) {
    return "tie";
  } else if (
    (compInput === "rock" && userInput === "scissors") ||
    (compInput === "scissors" && userInput === "paper") ||
    (compInput === "paper" && userInput === "rock")
  ) {
    return "Computer Wins";
  } else {
    return "Player Wins";
  }
}
const userInput = prompt(`enter "rock", "paper", or "scissors"`).toLowerCase();
let compInput = Math.floor(Math.random() * 3);
// console.log("comp before switch: " + compInput);
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
let compare = [compInput, userInput];
// console.log("compare: " + compare);
let compWin = [
  ["rock", "scissors"],
  ["paper", "rock"],
  ["scissors", "paper"],
];

console.log("Computer chooses: " + compInput);
console.log("Player chooses: " + userInput);

// console.log(compWin.indexOf(compare));
console.log(game(userInput, compInput));
