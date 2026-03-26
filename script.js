function getComputerChoice() {
    let choice = Math.random() 
    return (choice <= 0.2) ? 'rock' : (choice >= 0.7) ? 'paper' : 'scissors';
}


function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    const computerSelection = getComputerChoice();

    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            console.log(button.id);
            playRound(button.id, computerSelection);
             
        });
    });

    function playRound(humanSelection, computerChoice) {
    // If human and computer choice are the same draw
        if(humanSelection === computerChoice) {
            console.log(`Draw both  ${humanSelection} & ${computerChoice} are the same`);
            return;
        
        } else if (humanSelection === 'rock' && computerChoice === 'paper') {
            console.log('Computer wins');
            return computerScore++
        } else if (humanSelection === 'paper' && computerChoice === 'rock') {
            console.log('Human wins');
            return humanScore++
        } else if (humanSelection === 'rock' && computerChoice === 'scissors') {
            console.log('Human wins');
            return humanScore++
        } else if (humanSelection === 'scissors' && computerChoice === 'rock') {
            console.log('Computer wins');
            return computerScore++
        } else if (humanSelection === 'scissors' && computerChoice === 'paper') {
            console.log('Human wins');
            return humanScore++
        } else if (humanSelection === 'paper' && computerChoice === 'scissors') {
            console.log('Computer wins');
            return computerScore++
        }

        console.log(`Humans score, ${humanScore}`);
        console.log(`Computers score ${computerScore}`);
    }
     

    
    if(humanScore > 0 || computerScore > 0) {
        return (humanScore > computerScore) ? console.log('Human won the entire game!') : console.log('Computer won the entire game!')
    }
    
     
}

playGame();




