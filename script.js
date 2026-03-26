function getComputerChoice() {
    let choice = Math.random() 
    return (choice <= 0.2) ? 'rock' : (choice >= 0.7) ? 'paper' : 'scissors';
}


function playGame() {
    let humanScore = 0;
    let computerScore = 0;

   

    const results = document.querySelector(".results");
    const resultsParagraph = document.createElement("p");
    
    const hmnScore = document.querySelector(".humanscore");
    const cmpScore = document.querySelector(".computerscore");

    const winner = document.querySelector(".winner");

    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            let computerSelection = getComputerChoice();
            
            playRound(button.id, computerSelection);
            
            hmnScore.textContent = `human score: ${humanScore}`;
            cmpScore.textContent = `computer score: ${computerScore}`;
            console.log(`humanscore = ${humanScore}`);
            console.log(`computerscore = ${computerScore}`);
            if(humanScore >= 5 || computerScore >= 5) {
                if(humanScore > computerScore){
                    winner.textContent = `human wins the game!!!`;
                } else {
                    winner.textContent = `computer wins the game!!!`;
                }
            }
            
            
                    
        });
    });

    function playRound(humanSelection, computerChoice) {
    // If human and computer choice are the same draw
        if(humanSelection === computerChoice) {
            console.log(`Draw both  ${humanSelection} & ${computerChoice} are the same`);
            return;
        
        } else if (humanSelection === 'rock' && computerChoice === 'paper') {
            resultsParagraph.textContent = "Computer wins 😠";
            resultsParagraph.classList.add("pResults");
            results.appendChild(resultsParagraph);
            return computerScore++

        } else if (humanSelection === 'paper' && computerChoice === 'rock') {
            resultsParagraph.textContent = "Human wins 😁";
            resultsParagraph.classList.add("pResults");
            results.appendChild(resultsParagraph);
            return humanScore++

        } else if (humanSelection === 'rock' && computerChoice === 'scissors') {
            resultsParagraph.textContent = "Human wins 😁";
            resultsParagraph.classList.add("pResults");
            results.appendChild(resultsParagraph);
            return humanScore++

        } else if (humanSelection === 'scissors' && computerChoice === 'rock') {
            resultsParagraph.textContent = "Computer wins 😠";
            resultsParagraph.classList.add("pResults");
            results.appendChild(resultsParagraph);
            return computerScore++

        } else if (humanSelection === 'scissors' && computerChoice === 'paper') {
            resultsParagraph.textContent = "Human wins 😁";
            resultsParagraph.classList.add("pResults");
            results.appendChild(resultsParagraph);
            return humanScore++

        } else if (humanSelection === 'paper' && computerChoice === 'scissors') {
            resultsParagraph.textContent = "Computer wins 😠";
            resultsParagraph.classList.add("pResults");
            results.appendChild(resultsParagraph);
            return computerScore++

        }
    }
     
}

playGame();




