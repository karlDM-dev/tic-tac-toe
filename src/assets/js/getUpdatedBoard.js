export function getUpdatedBoard(board, row, col, piece) {
    board[row][col] = piece
    return board
}