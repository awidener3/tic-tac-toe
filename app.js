// GAMEBOARD CREATION //

const gameboardModule = (function() {
    
    const _gameboardArea = document.getElementsByClassName('gameboard')[0];
    let board = [];

    // create gameboard
    for (let i = 0; i < 9; i++) {
        board.push('');
        _createSquare();
    }
    
    function _createSquare() {
        let square = document.createElement('div');
        square.classList.add('gameboard-square');
        _gameboardArea.appendChild(square);
    }

    return {
        board
    }
})();


// GAME FUNCTIONALITY //

const gameController = (function() {
    const squares = document.getElementsByClassName('gameboard-square');

    const playerOneScore_div = document.getElementsByClassName('p1-score')[0]; 
    const playerTwoScore_div = document.getElementsByClassName('p2-score')[0]; 
    const resetButton = document.getElementsByClassName('reset-btn')[0];
    const newGameButton = document.getElementsByClassName('new-game-btn')[0];
    const gameDisplay = document.getElementsByClassName('game-display')[0];
    let playerOneScore = 0; 
    let playerTwoScore = 0; 
    let xMoves = 0; 
    let oMoves = 0; 
    let gameOver = false;
    let board = gameboardModule.board;

    for (let i = 0; i < squares.length; i++) {
        squares[i].addEventListener('click', function() {
            if (gameOver === true) {
                return;
            }
            // if the square is empty
            if (squares[i].textContent == '') {
                // and X has already gone
                if (xMoves > oMoves) {
                    // O goes
                    squares[i].innerText = 'O'
                    board[i] = 'O';
                    oMoves++;
                // otherwise, X goes
                } else {
                    squares[i].innerText = 'X'
                    board[i] = 'X';
                    xMoves++;
                }
            }
            gameOver = checkWin();
        })
    }
    
    function checkWin () {
        // X's win
        if (checkHorizontal() == true || checkVertical() == true || checkDiagonal() == true) {
            playerOneScore++;
            playerOneScore_div.innerText = playerOneScore;
            gameDisplay.innerText = 'X\'s Win! 👑';
            return true;
        } 
        // O's win
        if (checkHorizontal() == false || checkVertical() == false || checkDiagonal() == false) {
            playerTwoScore++;
            playerTwoScore_div.innerText = playerTwoScore;
            gameDisplay.innerText = 'O\'s Win! 🏆';
            return true;
        }
        // Tie
        if(noneEmpty()) { 
            gameDisplay.innerText = 'It\'s a Tie! ⚔️';
            return true;
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

    function noneEmpty() {
        for (let i = 0; i < board.length; i++) {
            if (board[i] === '') return false;
        }
        return true;
    }

    resetButton.addEventListener('click', resetBoard)
    
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
    
    newGameButton.addEventListener('click', resetScore)
    
    function resetScore() {
        resetBoard();
        playerOneScore = 0;
        playerTwoScore = 0;
        playerOneScore_div.innerText = playerOneScore;
        playerTwoScore_div.innerText = playerTwoScore;
    }
})();