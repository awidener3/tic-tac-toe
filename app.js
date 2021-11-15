// function checkWin() {

    // horizontal wins
    // win state 1 : [1: 'X', 2: 'X', 3: 'X' || 1: 'O', 2: 'O', 3: 'O']
    // win state 2 : [4: 'X', 5: 'X', 6: 'X' || 4: 'O', 5: 'O', 6: 'O']
    // win state 3 : [7: 'X', 8: 'X', 9: 'X' || 7: 'O', 8: 'O', 9: 'O']

    // vertical wins
    // win state 4 : [1: 'X', 4: 'X', 7: 'X' || 1: 'O', 4: 'O', 7: 'O']
    // win state 5 : [2: 'X', 5: 'X', 8: 'X' || 2: 'O', 5: 'O', 8: 'O']
    // win state 6 : [3: 'X', 6: 'X', 9: 'X' || 3: 'O', 6: 'O', 9: 'O']

    // diagonal wins
    // win state 7 : [1: 'X', 5: 'X', 9: 'X' || 1: 'O', 5: 'O', 9: 'O']
    // win state 8 : [3: 'X', 5: 'X', 7: 'X' || 3: 'O', 5: 'O', 7: 'O']

// VARIABLE DECLARATION //
const gameboardArea = document.getElementsByClassName('gameboard')[0];
const resetButton = document.getElementsByClassName('reset-btn')[0];
const newGameButton = document.getElementsByClassName('new-game-btn')[0];
const squares = document.getElementsByClassName('gameboard-square');
const gameDisplay = document.getElementsByClassName('game-display')[0];
const playerOneScore_div = document.getElementsByClassName('p1-score')[0];
const playerTwoScore_div = document.getElementsByClassName('p2-score')[0];
let playerOneScore = 0;
let playerTwoScore = 0;
let board = [];
let xMoves = 0; // this will eventually go into the player object
let oMoves = 0; // ^^^


// GAMEBOARD CREATION //

function createGameBoard() {
    for (let i = 0; i < 9; i++) {
        board.push('');
        createSquare();
    }
}

function createSquare() {
    let square = document.createElement('div');
    square.classList.add('gameboard-square');
    gameboardArea.appendChild(square);
}


// GAME FUNCTIONALITY //

function game () {
    for (let i = 0; i < squares.length; i++) {
        squares[i].addEventListener('click', function() {
            if (squares[i].textContent == '') {
                if (xMoves > oMoves) {
                    squares[i].innerText = 'O'
                    oMoves++;
                    board[i] = 'O';
                } else {
                    squares[i].innerText = 'X'
                    xMoves++;
                    board[i] = 'X';
                }
            }
            checkWin();
        })
    }
}

function checkWin () {
    if (checkHorizontal() == true || checkVertical() == true || checkDiagonal() == true) {
        gameDisplay.innerText = 'X\'s Win! 👑';
        playerOneScore++;
        playerOneScore_div.innerText = playerOneScore;
    } else if (checkHorizontal() == false || checkVertical() == false || checkDiagonal() == false) {
        gameDisplay.innerText = 'O\'s Win! 🏆';
        playerTwoScore++;
        playerTwoScore_div.innerText = playerTwoScore;
    }
}

function checkHorizontal() {
    // horizontal row 1  
    if(board[0] == 'X' && board[1] == 'X' && board[2] == 'X') {
        return true;
    } else if(board[0] == 'O' && board[1] == 'O' && board[2] == 'O') {
        return false;
    }
    // horizontal row 2  
    if(board[3] == 'X' && board[4] == 'X' && board[5] == 'X') {
        return true;
    } else if(board[3] == 'O' && board[4] == 'O' && board[5] == 'O') {
        return false;
    }
    // horizontal row 3 
    if(board[6] == 'X' && board[7] == 'X' && board[8] == 'X') {
        return true;
    } else if(board[6] == 'O' && board[7] == 'O' && board[8] == 'O') {
        return false;
    }
}

function checkVertical() {
    // vertical row 1
    if(board[0] == 'X' && board[3] == 'X' && board[6] == 'X') {
        return true;
    } else if(board[0] == 'O' && board[3] == 'O' && board[6] == 'O') {
        return false;
    }
    // vertical row 2
    if(board[1] == 'X' && board[4] == 'X' && board[7] == 'X') {
        return true;
    } else if(board[1] == 'O' && board[4] == 'O' && board[7] == 'O') {
        return false;
    }
    // vertical row 3
    if(board[2] == 'X' && board[5] == 'X' && board[8] == 'X') {
        return true;
    } else if(board[2] == 'O' && board[5] == 'O' && board[8] == 'O') {
        return false;
    }
}

function checkDiagonal() {
    // diagonal 1
    if(board[0] == 'X' && board[4] == 'X' && board[8] == 'X') {
        return true;
    } else if(board[0] == 'O' && board[4] == 'O' && board[8] == 'O') {
        return false;
    }
    // diagonal 2
    if(board[2] == 'X' && board[4] == 'X' && board[6] == 'X') {
        return true;
    } else if(board[2] == 'O' && board[4] == 'O' && board[6] == 'O') {
        return false;
    }
}

// BUTTONS //

resetButton.addEventListener('click', reset)

newGameButton.addEventListener('click', function() {
    reset();
    playerOneScore = 0;
    playerTwoScore = 0;
    playerOneScore_div.innerText = playerOneScore;
    playerTwoScore_div.innerText = playerTwoScore;
})

function reset() {
    for (let i = 0; i < board.length; i++) {
        board[i] = '';
        squares[i].innerText = '';
    }
    xMoves = 0;
    oMoves = 0;
    gameDisplay.innerText = '';
}

// MAIN //

createGameBoard();
game();