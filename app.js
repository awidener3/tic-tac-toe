/* TIC TAC TOE */ 

// GAMEBOARD CREATION //

const gameboardModule = (function() {
    const squares = document.getElementsByClassName('gameboard-square');
    const _gameboardArea = document.getElementsByClassName('gameboard')[0];
    let board = [];

    // create gameboard
    for (let i = 0; i < 9; i++) {
        board.push(''); // add the empty strings into 'board'
        _createSquare(); // create corresponding square on page
    }

    function _createSquare() {
        let square = document.createElement('div');
        square.classList.add('gameboard-square');
        _gameboardArea.appendChild(square);
    }

    return {
        board,
        squares
    }
})();

// GAME FUNCTIONALITY //

const gameController = (function() {
    const playerOneScore_div = document.getElementsByClassName('p1-score')[0]; 
    const playerTwoScore_div = document.getElementsByClassName('p2-score')[0]; 
    const gameDisplay = document.getElementsByClassName('game-display')[0];
    const squares = gameboardModule.squares;
    const board = gameboardModule.board;
    let playerOneScore = 0;
    let playerTwoScore = 0;
    let xMoves = 0; 
    let oMoves = 0; 
    let gameOver = false;

    for (let i = 0; i < squares.length; i++) {
        squares[i].addEventListener('click', function() {
            if (gameOver === true) {
                return;
            }
            if (squares[i].textContent == '') {     // if the square is empty
                if (xMoves > oMoves) {              // and X has already gone
                    squares[i].innerText = 'O'      // O goes
                    board[i] = 'O';
                    oMoves++;
                } else {                            // otherwise, X goes
                    squares[i].innerText = 'X'
                    board[i] = 'X';
                    xMoves++;
                }
            }
            gameOver = checkWin();
        })
    }
    
    function checkWin () {
        if (checkHorizontal() == true || checkVertical() == true || checkDiagonal() == true) {      // X's win
            updateScore(true);
            return true;
        } 
        if (checkHorizontal() == false || checkVertical() == false || checkDiagonal() == false) {   // O's win
            updateScore(false);
            return true;
        }
        if(noneEmpty()) {                                                                           // Tie
            updateScore();
            return true;
        }
    }

    function checkHorizontal() {
         
        if(board[0] == 'X' && board[1] == 'X' && board[2] == 'X') {         // horizontal row 1 
            return true;
        } else if(board[0] == 'O' && board[1] == 'O' && board[2] == 'O') {
            return false;
        }
        if(board[3] == 'X' && board[4] == 'X' && board[5] == 'X') {         // horizontal row 2  
            return true;
        } else if(board[3] == 'O' && board[4] == 'O' && board[5] == 'O') {
            return false;
        }
        if(board[6] == 'X' && board[7] == 'X' && board[8] == 'X') {         // horizontal row 3 
            return true;
        } else if(board[6] == 'O' && board[7] == 'O' && board[8] == 'O') {
            return false;
        }
    }

    function checkVertical() {
        
        if(board[0] == 'X' && board[3] == 'X' && board[6] == 'X') {         // vertical row 1
            return true;
        } else if(board[0] == 'O' && board[3] == 'O' && board[6] == 'O') {
            return false;
        }
        if(board[1] == 'X' && board[4] == 'X' && board[7] == 'X') {         // vertical row 2
            return true;
        } else if(board[1] == 'O' && board[4] == 'O' && board[7] == 'O') {
            return false;
        }
        if(board[2] == 'X' && board[5] == 'X' && board[8] == 'X') {         // vertical row 3
            return true;
        } else if(board[2] == 'O' && board[5] == 'O' && board[8] == 'O') {
            return false;
        }
    }

    function checkDiagonal() {
        if(board[0] == 'X' && board[4] == 'X' && board[8] == 'X') {         // diagonal 1
            return true;
        } else if(board[0] == 'O' && board[4] == 'O' && board[8] == 'O') {
            return false;
        }
        if(board[2] == 'X' && board[4] == 'X' && board[6] == 'X') {         // diagonal 2
            return true;
        } else if(board[2] == 'O' && board[4] == 'O' && board[6] == 'O') {
            return false;
        }
    }

    function noneEmpty() {
        for (let i = 0; i < board.length; i++) {
            if (board[i] === '') return false;
        }
        return true;
    }

    function resetBoard() {
        for (let i = 0; i < board.length; i++) {
            board[i] = '';
            squares[i].innerText = '';
        }
        xMoves = 0;
        oMoves = 0;
        gameDisplay.innerText = '';
        gameOver = false;
    }

    function resetScore() {
        resetBoard();
        playerOneScore = 0;
        playerTwoScore = 0;
        playerOneScore_div.innerText = playerOneScore;
        playerTwoScore_div.innerText = playerTwoScore;
    }

    function updateScore(result) {
        if (result == true) {
            playerOneScore++;
            playerOneScore_div.innerText = playerOneScore;
            gameDisplay.innerText = 'X\'s Win! 👑';
        } else if (result == false) {
            playerTwoScore++;
            playerTwoScore_div.innerText = playerTwoScore;
            gameDisplay.innerText = 'O\'s Win! 🏆';
        } else {
            gameDisplay.innerText = 'It\'s a Tie! ⚔️';
        }   
    }
    
    return {
        resetBoard,
        resetScore
    }
})();

// BUTTONS //

const buttonModule = (function() {
    const resetButton = document.getElementsByClassName('reset-btn')[0];
    const newGameButton = document.getElementsByClassName('new-game-btn')[0];
    let resetBoard = gameController.resetBoard;
    let resetScore = gameController.resetScore;
    
    resetButton.addEventListener('click', resetBoard)
    newGameButton.addEventListener('click', resetScore)

})();

