
let scorePlayer = 0;
let scoreComputer = 0;

game();

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  switch(randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

function getPlayerChoice () {
  const choise = prompt('Choose your weapon');
  return choise.toLowerCase();
}

function playRound (playerSelection, computerSelection) {
  playerSelection = getPlayerChoice();
  computerSelection = getComputerChoice();
  if (playerSelection === computerSelection) {
    console.log(`It's a tie!`)
  } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    scorePlayer++
    console.log('You won! Rock beats scissors')
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    scorePlayer++
    console.log('You won! Paper beats rock')
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    scorePlayer++
    console.log('You won! Scissors beats paper')
  } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    scoreComputer++
    console.log('You lost! Rock beats scissors')
  } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    scoreComputer++
    console.log('You lost! Scissors beats paper')
  } else if (playerSelection === 'rock' && computerSelection === 'paper') {
    scoreComputer++
    console.log('You lost! Paper beats rock')
  }
}

function game() {
  while (scorePlayer < 5 && scoreComputer < 5) {
    playRound();
  }
  console.log(finalMessage());
}

function finalMessage() {
  const winner = (scorePlayer > scoreComputer) ? 'You' : 'Computer';
  return `${winner} win the game`;
}