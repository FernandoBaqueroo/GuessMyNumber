"use strict";

let secretNumber = Math.floor(Math.random() * 20) + 1;
let initialScore = 20;
let highscore = 0;

const setDisplayGuessingNumber = (number) => {
    document.getElementById('guessing_number').textContent = number;
}

const setDisplayScore = (score) => {
    document.getElementById('score').textContent = score;
}

const setDisplayHighScore = (highscore) => {
    document.getElementById('highscore').textContent = highscore;
}

const setDisplayMessage = (message) => {
    document.getElementById('gameState').textContent = message
}

//! Functions
const updateScore = (scoreChange) => {
    initialScore += scoreChange;
    setDisplayScore(initialScore);
};

const handleGameOver = () => {
    setDisplayMessage('💥 You lost the game!');
    setDisplayGuessingNumber(secretNumber);
    document.body.style.backgroundColor = '#d30000';
};

const checkGuess = (guessNumber) => {
    if (guessNumber === secretNumber) {
        setDisplayMessage('🎉 Correct Number!');
        setDisplayGuessingNumber(secretNumber);
        document.body.style.backgroundColor = '#60b347';
        if (initialScore > highscore) {
            highscore = initialScore;
            setDisplayHighScore(highscore);
        }
    } else {
        updateScore(-1);
        if (guessNumber > secretNumber) {
            setDisplayMessage('📈 Too high!');
        } else {
            setDisplayMessage('📉 Too low!');
        }
        if (initialScore === 0) {
            handleGameOver();
        }
    }
};

//! DOM Manipulation - Check Button Logic
document.getElementById('check').addEventListener('click', () => {
    const guessNumber = Number(document.getElementById('guess').value);
    if (!guessNumber) {
        setDisplayMessage('⛔ No number!');
    } else {
        checkGuess(guessNumber);
    }
});

//! DOM Manipulation - Restart Button Logic
document.getElementById('restart').addEventListener('click', () => {
    secretNumber = Math.floor(Math.random() * 20) + 1;
    initialScore = 20;
    document.body.style.backgroundColor = '#A1A1AA';
    setDisplayScore(initialScore);
    setDisplayGuessingNumber('?');
    setDisplayMessage('Start guessing...');
    document.getElementById('guess').value = '';
});

document.getElementById('highscore').textContent = highscore;
