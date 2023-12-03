const keyboardDiv = document.querySelector(".keyboard");
const wordDisplay = document.querySelector(".word-display");
const guessesText = document.querySelector(".guesses-text b");
const hangmanImage = document.querySelector(".hangman-box img");
const gameModal = document.querySelector(".game-modal");
const playAgainBtn = document.querySelector(".play-again-btn");

let currentWord, correctLetters, wrongGuessCount;
const maxGuesses = 6;

// Resetting the game
const resetGame = () => {
    correctLetters = [];
    wrongGuessCount = 0;
    hangmanImage.src = `img/hangman-${wrongGuessCount}.svg`;
    guessesText.innerHTML = `${wrongGuessCount} / ${maxGuesses}`;
    keyboardDiv.querySelectorAll("button").forEach(btn => btn.disabled = false);
    wordDisplay.innerHTML = currentWord.split("").map(letter => `<li class="letter"></li>`).join("");
    gameModal.classList.remove("show");

}


// Selecting random word and hint from wordList
const getRandomWord = () => {
    const { word, hint } = wordList[Math.floor(Math.random() * wordList.length)];
    currentWord = word;
    document.querySelector(".hint-text b").innerHTML = hint;
    resetGame();
}

const gameOver = (isVictory) => {
    // Showing the game over modal
    setTimeout(() => {
        const modalText = isVictory ? `Found the correct word:` : `The correct word was:`;
        gameModal.querySelector("img").src = `img/${isVictory ? `victory` : `lost`}.gif`;
        gameModal.querySelector("h4").innerHTML = `${isVictory ? `You Won!` : `Game Over!`}`;
        gameModal.querySelector("p").innerHTML = `${modalText} <b>${(currentWord.charAt(0).toUpperCase() + currentWord.slice(1))}</b>`;
        gameModal.classList.add("show");
    }, 300);
}

const initGame = (button, clickedLetter) => {
    // Checking if the clicked letter is in the current word
    if(currentWord.includes(clickedLetter)) {
        // Showing all the letters in the word that match the clicked letter
        [...currentWord].forEach((letter, index) => {
            if(letter === clickedLetter){
                correctLetters.push(letter);
                wordDisplay.querySelectorAll("li")[index].innerHTML = letter;
                wordDisplay.querySelectorAll("li")[index].classList.add("guessed");
            }
        })
    }
    else{
        // Updating the wrong guess count and hangman image
        wrongGuessCount++;
        hangmanImage.src = `img/hangman-${wrongGuessCount}.svg`;
    }
    button.disabled = true;
    guessesText.innerHTML = `${wrongGuessCount} / ${maxGuesses}`;

    // Checking if the game is over
    if(wrongGuessCount === maxGuesses) return gameOver(false);
    if(correctLetters.length === currentWord.length) return gameOver(true);
}


// Create keyboard buttons
for (let i = 97; i <= 122; i++) {
    const button = document.createElement('button');
    button.innerText = String.fromCharCode(i);
    keyboardDiv.appendChild(button);
    button.addEventListener('click', e => initGame(e.target, String.fromCharCode(i)));
}

getRandomWord();
playAgainBtn.addEventListener("click", getRandomWord);