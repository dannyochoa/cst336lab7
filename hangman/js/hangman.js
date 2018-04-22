var selectedWord = "";
var selectedHint = "";
var board = [];
var remainingGuess = 6;
var words = ["snake", "monkey", "beetle", "horse", "whale"];

//LISTENERS
window.onload = startGame();

//FUNCTIONS
function startGame(){
    pickWord();
    initBoard();
    updateBoard();
}

function initBoard(){
    for (var letter in selectedWord){
        board.push("_");
    }
}


function pickWord(){
    var randomInt = Math.floor(Math.random() * words.length);
    selectedWord = words[randomInt];
}

function updateBoard(){
    for(var letter of board){
        document.getElementById("word").innerHTML += letter + " ";
    }
}