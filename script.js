var computerSelection, playerSelection;
const hands = ['rock', 'paper', 'scissors'];
var test = 1;
console.log(test);

//function computerPlay that randomly returns rock, paper or scissors

var computerPlay = hands[Math.floor(math.random()*hands.length)];
console.log(computerPlay());
//function that prompts player to input playerSelection

prompt(playerSelection);

//function playRound() that compares playerSelection and computerSelection and returns result

function playRound() 
    if (playerSelection == computerSelection) {
    return 'It\'s a draw!';
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
    return 'You win! Rock beats scissors!';
    } else if (playerSelection == 'rock' && computerSelection ==)
    
//function game() that uses playRound() to play a best of 5 game