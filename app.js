let userScore = 0;
let computeScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScoreHtml = document.querySelector("#user-score");
const computeScoreHtml = document.querySelector("#computer-score");
const options = ["rock", "paper", "scissors"];

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});

const playGame = (userChoice) => {
  const compChoice = genComputerChoice();

  if (userChoice === compChoice) {
    drawGame(userChoice);
   
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissors" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
  showWinner(userWin,userChoice,compChoice);
  }
};

const genComputerChoice = () => {
  const randomIndex = Math.floor(Math.random() * 3);
  return options[randomIndex];
};

const drawGame = (userChoice) => {
    msg.innerText = `Game Draw! You both choose ${userChoice}`;
    msg.style.backgroundColor="lightblue";
    msg.style.color="black"
};

const showWinner = (userWin,userChoice,compChoice) => {
  if (userWin) {
    userScore++;
    msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor="green";
    userScoreHtml.innerText = userScore;
  } else {
    msg.innerText = `You Lose! ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor="red";
    computeScore++;
    computeScoreHtml.innerText = computeScore;
  }
};
