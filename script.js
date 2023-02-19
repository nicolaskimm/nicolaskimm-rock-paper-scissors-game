var newGameElem = document.getElementById('newGameSection');
var newGameButton = document.getElementById('newGameBtn');
var pickElementContainer = document.getElementById('pickElement-container');
var scoreContainer = document.getElementById('score-container');
var pickBtn = document.getElementsByClassName('pickElement-btn');

var gameState = 'notStarted';
var player = {
    name: '',
    score: 0
};
var computer = {
    score: 0
}

function setGame(gameState){
    switch(gameState){
        case 'started': 
            newGameElem.style.display = 'none';
            pickElementContainer.style.display = 'block';
            scoreContainer.style.display = 'block';
            break;

        case 'ended':
            newGameButton.innerHTML = 'jeszcze raz';
            pickElementContainer.style.display = 'none';
            scoreContainer.style.display = 'none';
        
        case 'notStarted':
        default: 
            pickElementContainer.style.display = 'none';
            scoreContainer.style.display = 'none';
    }   
}

setGame('notStarted');

newGameButton.addEventListener('click', function startNewGame(){
    setGame('started');
})
