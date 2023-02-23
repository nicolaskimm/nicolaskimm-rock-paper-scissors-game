var newGameElem = document.getElementById('newGameSection');
var newGameButton = document.getElementById('newGameBtn');
var pickElementContainer = document.getElementById('pickElement-container');
var scoreContainer = document.getElementById('score-container');
var playerScoreContainer = document.getElementById('playerScore-container');
var computerScoreContainer = document.getElementById('computerScore-container');
var pickedRock = document.getElementById('pickElement-rock');
var pickedPaper = document.getElementById('pickElement-paper');
var pickedScissors = document.getElementById('pickElement-scissors');
var playerScore = document.getElementById('playerScore');
var computerScore = document.getElementById('computerScore');
var playerScoreIcon = document.getElementById('playerScore-icon');
var computerScoreIcon = document.getElementById('computerScore-icon');
var playerName = document.getElementById('playerName');
var firstParOFClassName = 'fa-solid';
var rockClass = 'fa-hand-back-fist';
var paperClass = 'fa-hand';
var scissorsClass = 'fa-hand-scissors';

var gameState = 'notStarted';
var player = {
    name: '',
    score: 0
};
var computer = {
    score: 0
}

function setGame(){
    switch(gameState){
        case 'started': 
            playerName = player.name;
            newGameElem.style.display = 'none';
            pickElementContainer.style.display = 'block';
            scoreContainer.style.display = 'block';
            break;

        case 'ended':
            newGameElem.style.display = 'block';
            newGameButton.innerHTML = 'jeszcze raz';
            pickElementContainer.style.display = 'none';
            scoreContainer.style.display = 'none';
            player.score = 0;
            computer.score = 0;
            break
        
        case 'notStarted': default: 
            pickElementContainer.style.display = 'none';
            scoreContainer.style.display = 'none';
            break;
    }   
}

setGame();

newGameButton.addEventListener('click', function startNewGame(){
    if (newGameButton.innerHTML === 'nowa gra'){
        var name = prompt('Enyer your name: ');
        playerName.innerHTML = name;
    }

    gameState = 'started';
    player.score = computer.score = 0;
    setGamePoints();
    setGame();
    
})

document.addEventListener('click', function(e){
    if (e.target.parentElement.className === 'pickElement-button'){
        playerPick(e);
    }
})

function playerPick(e){
    var nameOfClass = e.target.getAttribute('class');
    var secondPartOfClassname = nameOfClass.substr(9, 100);
    playerScoreIcon.setAttribute('class', '');
    playerScoreIcon.classList.add(firstParOFClassName, secondPartOfClassname);

    computerPick();
    checkScore();
    setGamePoints();
    checkForWinner();
}

function computerPick(){
    computerScoreIcon.setAttribute('class', '');
    var possiblePicks = ['rock', 'paper', 'scissors'];
    var pickElem = possiblePicks[Math.floor(Math.random()*3)];

    switch(pickElem){
        case 'rock':
            computerScoreIcon.classList.add(firstParOFClassName, rockClass);
            break;

        case 'paper':
            computerScoreIcon.classList.add(firstParOFClassName, paperClass);
            break;

        case 'scissors':
            computerScoreIcon.classList.add(firstParOFClassName, scissorsClass);
            break;
    }
}

function checkScore(){
    var playerPick = playerScoreIcon.getAttribute('class').substr(9, 100);
    var computerPick = computerScoreIcon.getAttribute('class').substr(9, 100);

    var winner = 'player';

    if (playerPick === computerPick){
        winner = 'none';
    } else if (
        computerPick === rockClass && playerPick === scissorsClass ||
        computerPick === scissorsClass && playerPick === paperClass ||
        computerPick === paperClass && playerPick === rockClass){
            winner = 'computer';
    } 

    switch(winner){
        case 'player':
            player.score++;
            break;

        case 'computer':
            computer.score++;
            break;
    }
}

function setGamePoints(){
    playerScore.innerHTML = player.score;
    computerScore.innerHTML = computer.score;
}

function checkForWinner(){
    if (player.score === 10) {
        alert('Player is a winner');
        gameState = 'ended';
        setGame();
    } else if (computer.score === 10) {
        alert('Computer is a winner');
        gameState = 'ended';
        setGame();
    } 
}




