// script.js
const cells = document.querySelectorAll('.cell');
let currentPlayer = 'x';
let board = ['', '', '', '', '', '', '', '', ''];

const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

function checkWinner() {
    for (const [a, b, c] of winningCombinations) {
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return board[a];
        }
    }
    return null;
}

function handleClick(event) {
    const index = event.target.dataset.index;
    if (board[index] || checkWinner()) return;
    
    board[index] = currentPlayer;
    event.target.classList.add(currentPlayer);
    event.target.textContent = currentPlayer.toUpperCase();

    const winner = checkWinner();
    if (winner) {
        setTimeout(() => alert(`${winner.toUpperCase()} wins!`), 100);
    } else if (board.every(cell => cell)) {
        setTimeout(() => alert("It's a draw!"), 100);
    }
    
    currentPlayer = currentPlayer === 'x' ? 'o' : 'x';
}

cells.forEach(cell => cell.addEventListener('click', handleClick));
