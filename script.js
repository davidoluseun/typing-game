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
	"Nigeria",
	"Grovel",
	"Prestidigitation",
	"Generator",
	"Eminent",
	"Typescript",
	"Rhesus",
	"Staphylococcus", 
	"Developer",
	"Establishment",
	"Placid",
	"Javascript",
	"Encapsulate",
	"Pulchritude",
	"Function",
	"Antiquewhite",
	"Insolent",
	"Hypertrophy",
	"Investigate",
	"Pastiche",
	"Coffeescript",
	"Laughter",
	"Lightcoral",
	"Python",
	"Synecdoche",
	"Concatenation",
	"Fanciful",
	"Carmagnole",
	"Springgreen",
	"Definition"
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

	if (textEnteredLength == 0 && !isPlaying) {
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
input.addEventListener("keypress", startGame);
input.addEventListener("keyup", matchWord);
reset.addEventListener("click", startOver);
