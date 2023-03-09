let randomNumber = Math.floor(Math.random() * 100) + 1

console.log(randomNumber)

let turn = 1

const guesses = document.getElementById("guesses")
const lastResult = document.getElementById("lastResult")
const lowOrHi = document.getElementById("lowOrHi")

const input = document.getElementById("input")
const button = document.getElementById("button")

button.addEventListener("click", function() {
    const inputNumber = input.value;
    const span = document.createElement("span");
    const guess = document.createTextNode(inputNumber);
    
    span.appendChild(guess);
    guesses.appendChild(span);

    checkInput(randomNumber, inputNumber)

});

function checkInput(solution, input) {
    if (solution == input) {
        const success = document.createTextNode("Congratulations! You got it right!");
        lastResult.appendChild(success);
        lastResult.classList.toggle("success");
    } else {
        console.log("wrong")
    }
}