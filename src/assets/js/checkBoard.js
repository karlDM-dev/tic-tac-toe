export function checkBoard(board, parentDiv) {
    let currentPlayingStatus = true
    let currentWinStatus = false

    // Horizontal winning pattern
    for (let row = 0; row < 3; row++) {
        if (board[row][0] == board[row][1] && board[row][0] == board[row][2]) {
            if (board[row][0] != "") {
                switch(row) {
                    case 0:
                        parentDiv.current.children[0].classList.add("bg-green-400")
                        parentDiv.current.children[1].classList.add("bg-green-400")
                        parentDiv.current.children[2].classList.add("bg-green-400")
                        break;
                    case 1:
                        parentDiv.current.children[3].classList.add("bg-green-400")
                        parentDiv.current.children[4].classList.add("bg-green-400")
                        parentDiv.current.children[5].classList.add("bg-green-400")
                        break;
                    case 2:
                        parentDiv.current.children[6].classList.add("bg-green-400")
                        parentDiv.current.children[7].classList.add("bg-green-400")
                        parentDiv.current.children[8].classList.add("bg-green-400")
                        break;
                }
                currentPlayingStatus = false
                currentWinStatus = true
            }
        }
    }

    // Vertical winning pattern
    for (let col = 0; col < 3; col++) {
        if (board[0][col] == board[1][col] && board[0][col] == board[2][col]) {
            if (board[0][col] != "") {
                switch(col) {
                    case 0:
                        parentDiv.current.children[0].classList.add("bg-green-400")
                        parentDiv.current.children[3].classList.add("bg-green-400")
                        parentDiv.current.children[6].classList.add("bg-green-400")
                        break;
                    case 1:
                        parentDiv.current.children[1].classList.add("bg-green-400")
                        parentDiv.current.children[4].classList.add("bg-green-400")
                        parentDiv.current.children[7].classList.add("bg-green-400")
                        break;
                    case 2:
                        parentDiv.current.children[2].classList.add("bg-green-400")
                        parentDiv.current.children[5].classList.add("bg-green-400")
                        parentDiv.current.children[8].classList.add("bg-green-400")
                        break;
                }
                currentPlayingStatus = false
                currentWinStatus = true
            }
        }
    }

    // Diagonal winning pattern
    if (board[0][0] == board[1][1] && board[0][0] == board[2][2]) {
        if (board[0][0] != "") {
            parentDiv.current.children[0].classList.add("bg-green-400")
            parentDiv.current.children[4].classList.add("bg-green-400")
            parentDiv.current.children[8].classList.add("bg-green-400")
            currentPlayingStatus = false
            currentWinStatus = true
        }
    }

    if (board[0][2] == board[1][1] && board[0][2] == board[2][0]) {
        if (board[0][2] != "") {
            parentDiv.current.children[2].classList.add("bg-green-400")
            parentDiv.current.children[4].classList.add("bg-green-400")
            parentDiv.current.children[6].classList.add("bg-green-400")
            currentPlayingStatus = false
            currentWinStatus = true
        }
    }
    return [currentPlayingStatus, currentWinStatus]
}
