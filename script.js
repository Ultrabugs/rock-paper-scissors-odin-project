function getComputerChoice() {
    let choice = Math.random() 
    return (choice <= 0.2) ? 'rock' : (choice >= 0.7) ? 'paper' : 'scissors';
}

function getHumanChoice() {
    let userInput = prompt("Rock, Paper, Scissors");
    let caseInput = userInput.toLowerCase();
    return (caseInput === 'rock') ? 'rock' : (caseInput === 'paper') ? 'paper' 
    : (caseInput === 'scissors') ? 'scissors' : undefined;
}


function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    const humanSelection1 = getHumanChoice();
    const computerSelection1 = getComputerChoice();

    const humanSelection2 = getHumanChoice();
    const computerSelection2 = getComputerChoice();

    const humanSelection3 = getHumanChoice();
    const computerSelection3 = getComputerChoice();

    const humanSelection4 = getHumanChoice();
    const computerSelection4 = getComputerChoice();

    function playRound(humanChoice, computerChoice) {
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
}
 
    playRound(humanSelection, computerSelection);
    playRound(humanSelection1, computerSelection1);
    playRound(humanSelection2, computerSelection2);
    playRound(humanSelection3, computerSelection3);
    playRound(humanSelection4, computerSelection4);
     
    console.log(`Humans score, ${humanScore}`);
    console.log(`Computers score ${computerScore}`);
    
    
    

    return (humanScore > computerScore) ? console.log('Human won the entire game!') : console.log('Computer won the entire game!')
     
}

playGame();




