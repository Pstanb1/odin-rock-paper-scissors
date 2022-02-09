//alert('The page has loaded!');

const hands = ['rock', 'paper', 'scissors'];

//function computerPlay that randomly returns rock, paper or scissors

function computerPlay() 
{ return hands[Math.floor(Math.random()*hands.length)]; 
}

//prompt player to input playerSelection

var playerSelection = prompt('Enter Rock, Paper or Scissors!');
var computerSelection = computerPlay();
var playerScore = 0
var computerScore = 0



//function playRound() that compares playerSelection and computerSelection and returns result

function playRound() 
{
    if (playerSelection.toLowerCase() === computerSelection) {
        return 'It\'s a draw!';
    } else if (playerSelection.toLowerCase() === 'rock' && computerSelection == 'scissors') {
        return 'You win! Rock beats scissors!';
    } else if (playerSelection.toLowerCase() === 'rock' && computerSelection == 'paper') {
        return 'You lose! Paper beats rock!'; 
    } else if (playerSelection.toLowerCase() === 'paper' && computerSelection == 'scissors') {
        return 'You lose! scissors beats paper!'; 
    } else if (playerSelection.toLowerCase() === 'paper' && computerSelection == 'rock') {
        return 'You win! Paper beats rock!';
    } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection == 'paper') {
        return 'You win! Scissors beat paper!';
    } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection == 'rock') {
        return 'You lose! Rock beats scissors!';
    }
} if (playRound().includes('win')) {
    playerScore++;
} else if (playRound().includes('lose')) {
    computerScore++;
}

//function game() that uses playRound() to play a best of 5 game

//function game(playerScore,computerScore) {
//   while (playerScore<3 || computerScore<3) {
//        playerSelection.playRound();
//    }
//}


console.log(computerSelection);
alert(playRound());
alert(`Player ${playerScore} Computer ${computerScore}`);
