# 🎲 Guess My Number!

**Guess My Number!** is a small interactive game where the user must guess a secret number that is randomly generated between 1 and 20. The game provides hints if the guessed number is higher or lower than the secret number, and the score decreases with each wrong attempt.

## 🚀 Features

- **Guess the Secret Number**: The game generates a random number between 1 and 20 that the player has to guess.
- **Hint System**: After each attempt, the player receives a hint if the guessed number is higher or lower than the secret number.
- **Scoring**: The starting score is 20. Each incorrect guess decreases the score by 1. If the score reaches 0, the game is over.
- **Game Reset**: The player can reset the game at any time by pressing the `Again!` button, which resets the secret number and the score.
- **Highscore**: The highest score achieved by the player is stored and displayed on the screen.

## 🛠️ Technologies Used

- **HTML5**: Basic structure of the project and visual components.
- **Tailwind CSS**: Used to style the user interface efficiently with utilities like flexible containers, colors, and typography.
- **JavaScript (ES6)**: Handles the game logic, DOM manipulation, and random number generation.

## 🧠 Game Logic

1. **Secret Number Generation**: The game starts by generating a random number between 1 and 20.
2. **Guess Validation**: The player enters a number, which is validated:
   - If the number is correct, the game displays a victory message and changes the background color to green.
   - If the number is incorrect, the score is updated and the player is given a hint (whether the guess is higher or lower).
   - If the score reaches 0, the game ends and a defeat message is displayed.
3. **Game Reset**: By pressing the "Again!" button, the game restarts, generating a new secret number and resetting the score.
