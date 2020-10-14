const equationArray = [
	{
		equation: '1 + 1',
		answer: '2',
		correct: false,
	},
	{
		equation: '3 + 2',
		answer: '5',
		correct: false,
	},
	{
		equation: '4 + 2',
		answer: '6',
		correct: false,
	},
	{
		equation: '1 + 6',
		answer: '7',
		correct: false,
	},
	{
		equation: '0 + 1',
		answer: '1',
		correct: false,
	},
	{
		equation: '5 + 4',
		answer: '9',
		correct: false,
	},
	{
		equation: '8 + 1',
		answer: '9',
		correct: false,
	},
	{
		equation: '1 + 2',
		answer: '3',
		correct: false,
	},
	{
		equation: '3 + 1',
		answer: '4',
		correct: false,
	},
	{
		equation: '1 + 5',
		answer: '6',
		correct: false,
	},
	{
		equation: '4 + 6',
		answer: '10',
		correct: false,
	},
	{
		equation: '7 + 1',
		answer: '8',
		correct: false,
	},
	{
		equation: '1 + 3',
		answer: '4',
		correct: false,
	},
	{
		equation: '2 + 4',
		answer: '6',
		correct: false,
	},
	{
		equation: '2 + 6',
		answer: '8',
		correct: false,
	},
	{
		equation: '5 + 2',
		answer: '7',
		correct: false,
	},
	{
		equation: '1 + 0',
		answer: '0',
		correct: false,
	},
	{
		equation: '4 + 4',
		answer: '8',
		correct: false,
	},
	{
		equation: '3 + 5',
		answer: '8',
		correct: false,
	},
	{
		equation: '0 + 9',
		answer: '9',
		correct: false,
	},
	{
		equation: '8 + 2',
		answer: '10',
		correct: false,
	},
	{
		equation: '2 + 2',
		answer: '4',
		correct: false,
	},
	{
		equation: '3 + 4',
		answer: '7',
		correct: false,
	},
	{
		equation: '5 + 5',
		answer: '10',
		correct: false,
	},
	{
		equation: '4 + 1',
		answer: '5',
		correct: false,
	},
];

const card = document.querySelector('#flash-card');
const correct = document.querySelector('#number-correct');
const cardNumber = document.querySelector('#card-number');
const answerButton = document.querySelector('#show-answer');
const previousButton = document.querySelector('#previous');
const nextButton = document.querySelector('#next');
const resetButton = document.querySelector('#reset');

let count = 0;

card.innerText = equationArray[0].equation;
let equationShowing = true;

function showAnswer() {
	if (equationShowing) {
		equationShowing = false;
		const answer = equationArray[count].answer;
		card.innerText = answer;
	} else {
		equationShowing = true;
		card.innerText = equationArray[count].equation;
	}
}

answerButton.addEventListener('click', showAnswer);

card.addEventListener('click', () => {
	addCorrect();
	// correctScore();
});

function addCorrect() {
	if (equationArray[count].correct !== true) {
		equationArray[count].correct = true;
		card.style.border = '10px solid green';
		numberCorrect++;
	} else if (equationArray[count].correct === true) {
		equationArray[count].correct = false;
		card.style.border = '4px solid darkgrey';
		numberCorrect--;
	}
	correct.innerText = `${numberCorrect} correct!`;
}

nextButton.addEventListener('click', nextCard);

// I used https://www.codegrepper.com/code-examples/delphi/addeventlistener+arrow+keys and https://eloquentjavascript.net/2nd_edition/14_event.html to figure out the keystorke event listeners

document.addEventListener('keydown', function (event) {
	if (event.keyCode === 39) {
		nextCard();
	} else if (event.keyCode === 37) {
		previousCard();
	} else if (event.keyCode === 38) {
		addCorrect();
	} else if (event.keyCode === 40) {
		showAnswer();
	}
});

function nextCard() {
	equationShowing = true;
	if (count === equationArray.length - 1) {
		count = 0;
	} else {
		count++;
	}
	if (equationArray[count].correct) {
		card.style.border = '10px solid green';
	} else {
		card.style.border = '2px solid darkgrey';
	}
	card.innerText = equationArray[count].equation;
	cardNumber.innerText = `${count + 1} of ${equationArray.length} cards`;
}

function previousCard() {
	equationShowing = true;
	if (count !== 0) {
		count--;
	} else {
		count = equationArray.length - 1;
	}
	if (equationArray[count].correct) {
		card.style.border = '10px solid green';
	} else {
		card.style.border = '2px solid darkgrey';
	}
	card.innerText = equationArray[count].equation;
	cardNumber.innerText = `${count + 1} of ${equationArray.length} cards`;
}

previousButton.addEventListener('click', previousCard);

cardNumber.innerText = `${count + 1} of ${equationArray.length} cards`;

let numberCorrect = 0;

correct.innerText = `${numberCorrect} correct!`;

function resetDeck() {
	for (let i = 0; i < equationArray.length; i++) {
		equationArray[i].correct = false;
	}
	count = 0;
	numberCorrect = 0;
	card.innerText = equationArray[count].equation;
	correct.innerText = `${numberCorrect} correct!`;
	cardNumber.innerText = `${count + 1} of ${equationArray.length} cards`;
}
resetButton.addEventListener('click', resetDeck);
