let randomNumber = Math.floor(Math.random() * 100) + 1;
let turn = 1;

const turns = document.getElementById("turns");
const guesses = document.getElementById("guesses");
guesses.innerHTML = "Guesses: "
const lastResult = document.getElementById("lastResult");
const suggestion = document.getElementById("suggestion");

const input = document.getElementById("input");
const button = document.getElementById("button");

const reset = document.getElementById("newGame");
const resetButton = document.createElement("button");
resetButton.innerText = "Start new game";

const form = document.getElementById("form");

const results = document.getElementById("results");
results.style.display = "none"


button.addEventListener("click", function() {
    results.style.display = "block"
    const inputNumber = input.value;
    guesses.innerHTML += `${inputNumber} `;

    checkInput(randomNumber, inputNumber)

});

function checkInput(solution, input) {

    if (turn <= 10) {
        if (solution == input) {
            suggestion.innerText = ""
            appendSuccess();
            endGame();
        } else {
            appendFailure();
            if (solution > input) {
                suggestion.innerText = "Try a little higher!"
            } else {
                suggestion.innerText = "Try a little lower!"
            }
        };
        turns.innerText = `Turns: ${turn}`
        turn++;
    } else {
        lastResult.innerText = "Sorry, you lost!"
        suggestion.innerText = ""
        endGame()
    };
}

function appendSuccess() {
    const success = "Congratulations! You got it right!";
    lastResult.innerHTML = success;
    lastResult.style.backgroundColor = "green";
    lastResult.style.color = "white";
}

function appendFailure() {
    const failure = "Wrong! Try again!";
    lastResult.innerHTML= failure;
    lastResult.style.backgroundColor = "red";
}

function endGame() {
    form.style.display = "none";
    newGame.style.display = "block";
    resetButton.addEventListener("click", resetGame)
    reset.appendChild(resetButton);
}

function resetGame() {

    const resetResults = document.querySelectorAll("#results p");
    for (const resetResult of resetResults) {
        resetResult.innerText = "";
    }
    newGame.style.display = "none";
    form.style.display = "block";

    randomNumber = Math.floor(Math.random() * 100) + 1;
    turn = 1
}

console.log(randomNumber)