const equations = ['1 + 1', '3 + 2', '4 + 2', '1 + 6', '3 + 2', '5 + 4', '8 + 1', '1 + 2', '3 + 1', '1 + 5', '4 + 6', '7 + 1', '1 + 3', '2 + 4', '2 + 6', '5 + 2', '1 + 0', '4 + 4', '3 + 5', '0 + 9', '8 + 2', '2 + 2', '3 + 4', '5 + 5', '4 + 1']
const answers = ['2', '5', '6', '7', '5', '9', '9', '3', '4', '6', '10', '8', '4', '6', '8', '7', '1', '8', '8', '9', '10', '4', '7', '10', '5']

const card = document.querySelector('#flash-card')
const correct = document.querySelector('#number-correct')
const cardNumber = document.querySelector('#card-number')
const answerButton = document.querySelector('#show-answer')
const previousButton = document.querySelector('#previous')
const nextButton = document.querySelector('#next')
const resetButton = document.querySelector('#reset')
let count = 0
card.innerText = equations[0]

function showAnswer() {
	const answer = answers[count]
	card.innerText = answer	
}

answerButton.addEventListener('click', showAnswer) 

card.addEventListener('click', function() {
	if (card.style.border = '2px solid darkgrey') {
		card.style.border = '4px solid green';
	} else {
		card.style.border = '2px solid darkgreay'
	}
		
})

nextButton.addEventListener('click', nextCard) 
// document.addEventListener('keydown', keyboardArrows) 

function nextCard() {
	if (count === equations.length - 1) {
		count = 0
	} else {
		count++
	}
	card.innerText = equations[count]
}

// function keyboardArrows() {
	
// }

document.addEventListener('keydown', function (e) {
	(e.keyCode) {
		case 37:
			alert('left');
			break;
		case 38:
			alert('up');
			break;
		case 39:
			alert('right');
			break;
		case 40:
			alert('down');
			break;
	}
});


function previousCard() {
	if (count !== 0) {
		count--
	}
	card.innerText = equations[count]
}

previousButton.addEventListener('click', previousCard)