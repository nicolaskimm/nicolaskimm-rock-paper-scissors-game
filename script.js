var newGameElem = document.getElementById('newGameSection');
var newGameButton = document.getElementById('newGameBtn');
var pickElementContainer = document.getElementById('pickElement-container');
var scoreContainer = document.getElementById('score-container');
var playerScoreContainer = document.getElementById('playerScore-container');
var computerScoreContainer = document.getElementById('computerScore-container');
var pickedRock = document.getElementById('pickElement-rock');
var pickedPaper = document.getElementById('pickElement-paper');
var pickedScissors = document.getElementById('pickElement-scissors');
var firstParOFClassName = 'fa-solid';



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

setGame('started');

newGameButton.addEventListener('click', function startNewGame(){
    setGame('started');
})

document.addEventListener('click', function(e){
    if (e.target.parentElement.className === 'pickElement-button'){
        playerPick(e);
    }
})

function playerPick(e){
    var nameOfClass = e.target.getAttribute('class');
    var newElem = document.createElement('i');
    var secondPartOfClassname = nameOfClass.substr(9, 100);
    newElem.classList.add(firstParOFClassName, secondPartOfClassname);
    playerScoreContainer.appendChild(newElem);

    computerPick();
}

function computerPick(){
    var possiblePicks = ['rock', 'paper', 'scissors'];
    var pickElem = possiblePicks[Math.floor(Math.random()*3)];
    var newElem = document.createElement('i');
    var rockClass = 'fa-hand-back-fist';
    var paperClass = 'fa-hand';
    var scissorsClass = 'fa-hand-scissors';

    
    switch(pickElem){
        case 'rock':
            newElem.classList.add(firstParOFClassName, rockClass);
            break;

        case 'paper':
            newElem.classList.add(firstParOFClassName, paperClass);
            break;

        case 'scissors':
            newElem.classList.add(firstParOFClassName, scissorsClass);
            break;
    }

    computerScoreContainer.appendChild(newElem);
}

