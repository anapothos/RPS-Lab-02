//This function needs to generate a random numbers and triage that into returning rock, paper, or scissors accordingly.
export const getRandomThrow = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0){
        return 'rock';
    } else if (randomNumber === 1) {
        return 'paper';
    } else if (randomNumber === 2) {
        return 'scissors';
    }
};


// Has two parameters: player and computer
// Returns one of the following values:
//     draw - the throws are identical
//     win - the player's throw beats the computer throw
//     lose - the computer's throw beats the player's throw
export const checkResult = (playerGuess, computerGuess) => {
    switch (playerGuess) {
        case 'rock':
            if (computerGuess === 'rock'){
                return 'draw';
            } else if (computerGuess === 'paper') {
                return 'lose';
            } else if (computerGuess === 'scissors') {
                return 'win';
            } break;
        case 'paper':
            if (computerGuess === 'paper'){
                return 'draw';
            } else if (computerGuess === 'rock') {
                return 'win';
            } else if (computerGuess === 'scissors'){
                return 'lose';
            } break;
        case 'scissors':
            if (computerGuess === 'scissors') {
                return 'draw';
            } else if (computerGuess === 'paper') {
                return 'win';
            } else if (computerGuess === 'rock') {
                return 'lose';
            } break;
    }
};