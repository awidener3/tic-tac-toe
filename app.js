// gameboard module

// const gameboard = (function() {
    
    // const gameboardArea = document.getElementsByClassName('gameboard')[0];
            
    // let board = [];
    // for (let i = 0; i < 9; i++) {
    //     board.push('');
    //     createSquare(board[i]);
    // }

    // function createSquare(item) {
    //     let square = document.createElement('div');
    //     square.innerText = item;
    //     square.classList.add('gameboard-square');
    //     gameboardArea.appendChild(square);
    // }

    // return {
    //     board
    // }
// })();

// displayController module

// const displayController = (function() {
    // const squares = document.getElementsByClassName('gameboard-square');
    // let { board } = gameboard; // grab board from gameboard module
    // const { createSquare } = gameboard;
    // const resetButton = document.getElementsByClassName('reset-btn')[0];

    // for (let i = 0; i < squares.length; i++) {
    //     squares[i].addEventListener('click', function() {
    //         if (this.innerText === '') {
    //             this.innerText = 'X';
    //             board[i] = 'X';
    //         } else if (this.innerText === 'X') {
    //             this.innerText = 'O';
    //             board[i] = 'O';
    //         } else {
    //             this.innerText = '';
    //             board[i] = '';
    //         }
    //     })
    // }

    // resetButton.addEventListener('click', function(e) {
    //     for (let i = 0; i < board.length; i++) {
    //         board[i] = '';
    //         squares[i].innerText = '';
    //     }
    // })

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

    // }
// })();




// VARIABLE DECLARATION //
const gameboardArea = document.getElementsByClassName('gameboard')[0];
const resetButton = document.getElementsByClassName('reset-btn')[0];
const squares = document.getElementsByClassName('gameboard-square');
let board = [];

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

let xMoves = 0; // this will eventually go into the player object
let oMoves = 0; // ^^^

function game () {
    for (let i = 0; i < squares.length; i++) {
        squares[i].addEventListener('click', function() {
            if (squares[i].textContent == '') {
                if (xMoves > oMoves) {
                    squares[i].innerHTML = 'O'
                    oMoves++;
                    board[i] = 'O';
                } else {
                    squares[i].innerHTML = 'X'
                    xMoves++;
                    board[i] = 'X';
                }
            }
            checkWin();
        })
    }
}

function checkWin () {
}

resetButton.addEventListener('click', function(e) {
    for (let i = 0; i < board.length; i++) {
        board[i] = '';
        squares[i].innerText = '';
    }
    xMoves = 0;
    oMoves = 0;
})


createGameBoard();
game();
