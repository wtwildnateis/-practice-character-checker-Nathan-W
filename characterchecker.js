const input = require('readline-sync');
let response = input.question("Welcome, will you please enter the first word that comes to your mind? "); // Asks user to input any word they think of.
console.log("You entered " + response + "! This word contains " + response.length + " characters! "); // Outputs the word the user entered and displays the number of characters in the word.
let question1 = input.questionInt("Let's pick a random index and find it shall we?! Pick a number 0 through " + response.length + "! "); // Asks user to pick a number between 0 and the number of character in the word they chose
console.log("The index of " + question1 + " in " + response + " is " + response[question1] + " !"); // Outputs the index the user chose and the character at that index in the word they chose.");
console.log("Thanks for participating! Now I'm gonna go and... I dunno process something I guess. K, Bye!");