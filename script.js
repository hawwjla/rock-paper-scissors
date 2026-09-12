// console.log("Hell world");


function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    
    if (choice === 0) return "rock";
    else if (choice === 1) return "paper";
    else if (choice === 2) return "scissors";
}

// console.log(getComputerChoice());


function getHumanChoice() {
    let choice = prompt("enter your choice (rock / paper / scissors)");
    choice = choice.toLowerCase();
    return choice;
}


function playGame(times) {
    let humanScore = 0;
    let computerScore = 0;
    
    while(times--)
        {
            
            const humanSelection = getHumanChoice();
            const computerSelection = getComputerChoice();    

            console.log(playRound(humanSelection,computerSelection));
    }

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice)
            return "tie";
    
        if (humanChoice === "rock" && computerChoice === "scissors")
        {
            humanScore++;
            return "You win! Rock beats Scissors";
        }
        else if (humanChoice === "rock" && computerChoice === "paper")
        {
            computerScore++;
            return "You lose! Paper beats Rock";
        }
        else if (humanChoice === "paper" && computerChoice === "rock")
        {
            humanScore++;
            return "You win! Paper beats Rock";
        }
        else if (humanChoice === "paper" && computerChoice === "scissors")
        {
            computerScore++;
            return "You lose! Scissors beat Paper";
        }
        else if (humanChoice === "scissors" && computerChoice === "paper")
        {
            humanScore++;
            return "You win! Scissors beat Paper"
        }
        else if (humanChoice === "scissors"  && computerChoice === "rock")
        {
            computerScore++;
            return "You lose! Rock beats Scissors"
        }
    }

    console.log(`Final Score:
        Human Score is: ${humanScore}
        Computer Score is: ${computerScore}`);
    if (computerScore === humanScore) return "it was a tie!";
    else if (computerScore > humanScore) return "Computer wins!"
    else if (computerScore < humanScore) return "You win!"
}

// console.log(playGame(5))