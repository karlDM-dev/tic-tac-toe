import { useCallback, useContext } from "react"
import { resetBoard } from "../assets/js/resetBoard"
import GameContext from "../context/game-context"

export default function Result() {
    const { moves, player, piece, win, isPlaying, setIsPlaying, setMoves, setPlayer, setPiece, setBoard, setWin, ref } = useContext(GameContext)
    let result = <div className='mt-5 text-slate-800 font-semibold text-lg'>Player { player } &#60;{ piece }&#62; wins!</div>
    if (moves == 9 && !win) {
        result = <div className='mt-5 text-slate-800 font-semibold text-lg'>Draw!</div>
    }
    const handlePlayAgainClick = useCallback(() => {
        setBoard([['', '', ''],['', '', ''],['', '', '']])
        resetBoard(ref)
        setIsPlaying(true)
        setMoves(0)
        setPlayer(1)
        setWin(false)
        setPiece("O")
    },[setBoard, setIsPlaying, setMoves, setPlayer, setWin, setPiece])

    return (
        <div className="flex flex-col items-center">
            {!isPlaying && 
                <>
                    {result} 
                    <button className='mt-5 px-4 py-2 font-semibold text-sm text-slate-800 border-solid border-2 border-slate-400 hover:bg-slate-400 hover:text-white' onClick={handlePlayAgainClick}>Play again</button>
                </>
            }
        </div>
    )
}
