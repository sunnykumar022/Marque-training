function playGame(userChoice) {
    const choices = ["rock", "paper", "scissors"];

    // Computer chooses randomly
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    console.log("You chose:", userChoice);
    console.log("Computer chose:", computerChoice);

    if (userChoice === computerChoice) {
        console.log("It's a Draw!");
        return;
    }

    switch (userChoice) {
        case "rock":
            if (computerChoice === "scissors") {
                console.log("You Win!");
            } else {
                console.log("Computer Wins!");
            }
            break;

        case "paper":
            if (computerChoice === "rock") {
                console.log("You Win!");
            } else {
                console.log("Computer Wins!");
            }
            break;

        case "scissors":
            if (computerChoice === "paper") {
                console.log("You Win!");
            } else {
                console.log("Computer Wins!");
            }
            break;

        default:
            console.log("Invalid Choice!");
    }
}


playGame("rock");