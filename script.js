// DOM Elements
const currentWord = document.querySelector("#current-word"),
	input = document.querySelector("#input"),
	message = document.querySelector("#message"),
	timer = document.querySelector("#timer"),
	displayScore = document.querySelector("#score"),
	reset = document.querySelector("#reset");

// Globals
let time = 7,
	score = 0,
	interval,
	isPlaying = false;

// Random words
let words = [
	"nigeria",
	"grovel",
	"prestidigitation",
	"generator",
	"eminent",
	"typescript",
	"rhesus",
	"staphylococcus", 
	"developer",
	"establishment",
	"placid",
	"javascript",
	"encapsulate",
	"pulchritude",
	"function",
	"antiquewhite",
	"insolent",
	"hypertrophy",
	"investigate",
	"pastiche",
	"coffeescript",
	"laughter",
	"lightcoral",
	"python",
	"synecdoche",
	"concatenation",
	"fanciful",
	"carmagnole",
	"springgreen",
	"definition"
];

// Display random words
function displayWords() {
	let randIndex = Math.floor(Math.random() * words.length);
	let randWord = words[randIndex];
	currentWord.textContent = randWord;
}

// Countdown timer
function countdown() {
	if (time > 1) {
		time--;
	} else if (time == 1) {
		time--;
		message.textContent = "Game Over!!!";
		clearInterval(interval);
	}
	timer.textContent = time;
}

// Start game
function startGame() {
	let textEnteredLength = input.value.length;

	if (textEnteredLength == 1 && !isPlaying) {
		isPlaying = true;
		interval = setInterval(countdown, 1000);
	}
}

// Match text entered with the provided text
function matchWord() {
	let textEntered = input.value;
	let wordMatch = currentWord.textContent;

	if (textEntered == wordMatch && time != 0) {
		message.textContent = "Correct!!!";
		displayWords();
		input.value = "";
		score++;
		time = 8;
	} else {
		message.textContent = "";
	}
	displayScore.textContent = score;
}

// Reset the game
function startOver() {
	clearInterval(interval);
	isPlaying = false;
	score = 0;
	time = 7;
	input.value = "";
	displayScore.textContent = score;
	timer.textContent = time;
	message.textContent = "";
}

// Event listeners for load, keyboard input and reset button 
window.addEventListener("load", displayWords);
input.addEventListener("input", startGame);
input.addEventListener("input", matchWord);
reset.addEventListener("click", startOver);
