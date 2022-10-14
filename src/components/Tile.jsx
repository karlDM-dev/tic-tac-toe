import { useCallback, useContext } from "react"
import { checkBoard } from "../assets/js/checkBoard"
import { getRowAndCol } from "../assets/js/getRowAndCol"
import GameContext from "../context/game-context"

export default function Tile({ tileNumber, parentDiv }) {
    const { piece, setPiece, player, setPlayer, board, setBoard, moves, setMoves, setIsPlaying, setWin } = useContext(GameContext)

    const handleClick = useCallback((tileNumber, e) => {
        e.target.innerHTML = piece

        let [row, col] = getRowAndCol(tileNumber)

        const currentBoard = [...board]
        currentBoard[row][col] = piece
        setBoard(currentBoard)

        let [currentPlayingStatus, currentWinStatus] = checkBoard(board, parentDiv)
        setMoves(currentMoves => currentMoves + 1)
        setIsPlaying(currentPlayingStatus)
        setWin(currentWinStatus)
        
        if (moves === 8) setIsPlaying(false)

        if (currentPlayingStatus) {
            if (player == 1) {
                setPiece("X")
                setPlayer(player + 1)
            } else if (player == 2) {
                e.target.innerHTML = piece
                setPiece("O")
                setPlayer(player - 1)
            }
            e.target.classList.add("pointer-events-none")
        }
    }, [piece, setPiece, player, setPlayer, board, setBoard, setMoves, setIsPlaying, setWin])

    return (
        <div className='w-14 h-14 p-4 hover:bg-slate-300 border-solid border-slate-300 border-2 font-medium text-sm text-center' onClick={(e) => handleClick(tileNumber, e)}></div>
    )
}
