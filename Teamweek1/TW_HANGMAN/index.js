const { WORDS_TO_GUESS } = require('./constants');
const constants = require('./constants');
// In node.js: install a prompt library by running: `npm install prompt-sync` in the current folder
const prompt = require("prompt-sync")();

// Here you see an example how to get your
// constants from constants.js
/*for(let figure of constants.HANGMAN_PICS)
{
   console.log(figure);
}
*/
 //Random Words are picked from constants.js
var words = constants.WORDS_TO_GUESS[Math.floor(Math.random()*constants.WORDS_TO_GUESS.length)];
console.log(words);
console.log(constants.HANGMAN_PICS[2]);

// ___ should be shown instead of the letters at beginning



// how to use the prompt - e.g.:
// const name = prompt('What is your name?');

