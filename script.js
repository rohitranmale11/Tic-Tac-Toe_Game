let currentPlayer = "X";
let cells = document.querySelectorAll(".cell");
let board = ["", "", "", "", "", "", "", "", ""];

function cellClicked(index) {
    if (board[index] === "" && !checkWinner()) {
        board[index] = currentPlayer;
        cells[index].innerText = currentPlayer;
        if (checkWinner()) {
            alert(currentPlayer + " wins!");
        } else if (!board.includes("")) {
            alert("It's a draw!");
        } else {
            currentPlayer = currentPlayer === "X" ? "O" : "X";
        }
    }
}

function resetGame() {
    board = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "X";
    cells.forEach(cell => cell.innerText = "");
}

function checkWinner() {
    const winConditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ];

    for (let condition of winConditions) {
        if (board[condition[0]] !== "" && board[condition[0]] === board[condition[1]] && board[condition[0]] === board[condition[2]]) {
            return true;
        }
    }
    return false;
}