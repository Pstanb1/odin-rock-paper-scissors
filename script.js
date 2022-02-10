//alert('The page has loaded!');

const hands = ['rock', 'paper', 'scissors'];

//function computerPlay that randomly returns rock, paper or scissors

function computerPlay() 
{ return hands[Math.floor(Math.random()*hands.length)]; 
}

let playerScore = 0
let computerScore = 0


//prompt player to input playerSelection
//function playRound() that compares playerSelection and computerSelection and returns result

function playRound() {
    let playerSelection = prompt('Enter Rock, Paper or Scissors!').toLowerCase();
    let computerSelection = computerPlay(); 

    if (playerSelection === computerSelection) {
        return 'It\'s a draw!';
    } 
    
    else if (playerSelection === 'rock' && computerSelection == 'scissors') {
        playerScore++;
        return 'You win! Rock beats scissors!';
    } 
    
    else if (playerSelection === 'rock' && computerSelection == 'paper') {
        computerScore++;
        return 'You lose! Paper beats rock!'; 
    } 
    
    else if (playerSelection === 'paper' && computerSelection == 'scissors') {
        computerScore++;
        return 'You lose! scissors beats paper!'; 
    } 
    
    else if (playerSelection === 'paper' && computerSelection == 'rock') {
        playerScore++;
        return 'You win! Paper beats rock!';
    } 
    
    else if (playerSelection === 'scissors' && computerSelection == 'paper') {
        playerScore++;
        return 'You win! Scissors beat paper!';
    } 
    
    else if (playerSelection === 'scissors' && computerSelection == 'rock') {
        computerScore++;
        return 'You lose! Rock beats scissors!';
    }
}

//function game() that uses playRound() to play a best of 5 game

function game() {
    alert(playRound());
    alert(`Player ${playerScore} Computer ${computerScore}`);
       
    if (playerScore < 3 && computerScore < 3) {
        game()
       } 
       
    else if (playerScore === 3) {
        alert('You have beaten the computer!');
    }
    
    else if (computerScore === 3) {
        alert('The computer has beaten you!');
    }
}
game();

//console.log(computerSelection);
//alert(playRound());
