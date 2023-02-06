let scorePlayer = 0
let scoreComputer = 0
const buttons = document.querySelectorAll('button')

buttons.forEach(function(button) {
  button.addEventListener('click', function(e) {
    playRound(e.target.className)
  })
})

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

function playRound (playerChoice) {
  const computerSelection = getComputerChoice();
  if (playerChoice === computerSelection) {
    console.log(`It's a tie!`)
  } else if (playerChoice === 'rock' && computerSelection === 'scissors') {
    scorePlayer++
    console.log('You won! Rock beats scissors')
  } else if (playerChoice === 'paper' && computerSelection === 'rock') {
    scorePlayer++
    console.log('You won! Paper beats rock')
  } else if (playerChoice === 'scissors' && computerSelection === 'paper') {
    scorePlayer++
    console.log('You won! Scissors beats paper')
  } else if (playerChoice === 'scissors' && computerSelection === 'rock') {
    scoreComputer++
    console.log('You lost! Rock beats scissors')
  } else if (playerChoice === 'paper' && computerSelection === 'scissors') {
    scoreComputer++
    console.log('You lost! Scissors beats paper')
  } else if (playerChoice === 'rock' && computerSelection === 'paper') {
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


function print(x) {
  console.log(x)
}