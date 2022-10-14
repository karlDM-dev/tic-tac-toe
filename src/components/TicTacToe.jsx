import { useState, useRef } from "react"
import GameContext from "../context/game-context"

export default function TicTacToe({children}) {
    const initialBoard = [['', '', ''],['', '', ''],['', '', '']]
    const initialPiece = "O"
    const initialPlayer = 1
    const initialMoves = 0
    const [moves, setMoves] = useState(initialMoves)
    const [board, setBoard] = useState(initialBoard)
    const [piece, setPiece] = useState(initialPiece)
    const [player, setPlayer] = useState(initialPlayer)
    const [isPlaying, setIsPlaying] = useState(true)
    const [win, setWin] = useState(false)
    const ref = useRef(null);

    return (
        <GameContext.Provider value={{moves, setMoves, board, setBoard, piece, setPiece, player, setPlayer, isPlaying, setIsPlaying, win, setWin, ref}}>
            {children}
        </GameContext.Provider>
    )
}
