equations = ['1 + 1', '3 + 2', '4 + 2', '1 + 6', '3 + 2', '5 + 4', '8 + 1', '1 + 2', '3 + 1', '1 + 5', '4 + 6', '7 + 1', '1 + 3', '2 + 4', '2 + 6', '5 + 2', '1 + 0', '4 + 4', '3 + 5', '0 + 9', '8 + 2', '2 + 2', '3 + 4', '5 + 5', '4 + 1']
answers = ['2', '5', '6', '7', '5', '9', '9', '3', '4', '6', '10', '8', '4', '6', '8', '7', '1', '8', '8', '9', '10', '4', '7', '10', '5']

const card = document.querySelector('#flash-card')
const correct = document.querySelector('#number-correct')
const cardNumber = document.querySelector('#card-number')
const flipButton = document.querySelector('#flip')
const previous = document.querySelector('#previous')
const next = document.querySelector('#next')



// function cardFront() {
//    for (let i = 0; i <= equations.length; i++) {
//        card.innerText = equations[i];
       
//    }
    
// }