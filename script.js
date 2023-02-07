let scorePlayer = 0;
let scoreComputer = 0;
let roundWinner = '';

const buttons = document.querySelectorAll('button');
const result = document.getElementById('result');
const gameOver = document.getElementById('final');
const score = document.getElementById('score');

buttons.forEach(function(button) {
  button.addEventListener('click', function(e) {
    playRound(e.target.className)
  })
})

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  return choices[Math.floor(Math.random() * 3)];
}

function updateMessage(roundWinner, playerChoice, computerChoice) {
  score.innerHTML = `Player score: ${
    scorePlayer} <br> Computer score: ${scoreComputer}`;
  if (roundWinner === 'tie') {
    result.textContent = `It's a tie!`;
  }
  if (roundWinner === 'player') {
    result.textContent = `You won! ${
      capitalizeFirstLetter(playerChoice)} beats ${computerChoice}`;
  }
  if (roundWinner === 'computer') {
    result.textContent = `You lost! ${
      capitalizeFirstLetter(computerChoice)} beats ${playerChoice}`;
  }
  isGameOver();
}

function isGameOver() {
  if (scorePlayer == 5 || scoreComputer == 5) {
    gameOver.textContent = `${finalMessage()}`;
    disableButtons();
  }
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

function playRound(playerChoice) {
  const computerChoice = getComputerChoice();
  if (playerChoice === computerChoice) {
    roundWinner = 'tie';
  }
  if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        scorePlayer++;
        roundWinner = 'player';
  }
  if (
    (playerChoice === 'scissors' && computerChoice === 'rock') ||
    (playerChoice === 'paper' && computerChoice === 'scissors') ||
    (playerChoice === 'rock' && computerChoice === 'paper')
    ) {
        scoreComputer++;
        roundWinner = 'computer';
  }
  updateMessage(roundWinner, playerChoice, computerChoice);
}

function disableButtons() {
  buttons.forEach(elem => {
    elem.disabled = true;
  })
}

function finalMessage() {
  if (scorePlayer > scoreComputer) {
    return 'You won the game!';
  } else return 'You lost the game...';
}