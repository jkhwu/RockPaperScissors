// Define variables
var tieCount = 0;
var winCount = 0;
var lossCount = 0;

// Creates an array that lists out all of the options (Rock, Paper, or Scissors).
var computerChoices = ["r", "p", "s"];

// This function is run whenever the user presses a key.
document.onkeyup = function(event) {
    // if (!computerChoices.includes(event.key)) {
    //     return alert("Please choose r, p, or s!");
    // }

    // Determines which key was pressed, displays
    var userGuess = event.key;
    if (userGuess === "r") {
        document.getElementById("user-choice").innerHTML = '<i class = "fas fa-hand-rock"> </i>';
    } else if (userGuess === "p") {
        document.getElementById("user-choice").innerHTML = '<i class="fas fa-hand-paper"></i>';
    } else if (userGuess === "s") {
        document.getElementById("user-choice").innerHTML = '<i class="fas fa-hand-scissors"></i>';
    } else {
        document.getElementById("user-choice").textContent = userGuess;
    }

    // Randomly chooses a choice from the options array. This is the Computer's guess.

    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    // Display computer choice
    if (computerGuess === "r") {
        document.getElementById("computer-choice").innerHTML = '<i class = "far fa-hand-rock"> </i>';
    } else if (computerGuess === "p") {
        document.getElementById("computer-choice").innerHTML = '<i class="far fa-hand-paper"></i>';
    } else if (computerGuess === "s") {
        document.getElementById("computer-choice").innerHTML = '<i class="far fa-hand-scissors"></i>';
    } else {
        document.getElementById("computer-choice").textContent = computerGuess;
    }

    // If both choose the same, increment and display tieCount
    if (computerGuess === userGuess) {
        tieCount++;
        document.getElementById("tie-count").textContent = tieCount;
        // Else if user wins, increment and display winCount
    } else if ((userGuess === "r" && computerGuess === "s") || (userGuess === "p" && computerGuess === "r") || (userGuess === "s" && computerGuess === "p")) {
        winCount++;
        document.getElementById("win-count").textContent = winCount;
        // Else if computer wins, increment and display lossCount
    } else {
        lossCount++;
        document.getElementById("loss-count").textContent = lossCount;
    }
    // If click button, reset all variables to 0
    document.getElementById("reset").addEventListener("click", function() {
        tieCount = 0;
        document.getElementById("tie-count").textContent = tieCount;
        winCount = 0;
        document.getElementById("win-count").textContent = winCount;
        lossCount = 0;
        document.getElementById("loss-count").textContent = lossCount;
        document.getElementById("user-choice").textContent = "nothing";
        document.getElementById("computer-choice").textContent = "nothing";
    });
}