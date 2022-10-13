import Tile from "./Tile"
import Result from "./Result"
import Player from "./Player"
import { useState, useEffect, useRef } from "react"

export default function Game() {
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
    let tiles = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    useEffect(() => {
        if (!isPlaying) {
            ref.current.classList.add("pointer-events-none")
        } else {
            ref.current.classList.remove("pointer-events-none")
        }
    }, [isPlaying]);

    return (
        <div className="flex flex-col items-center">
            <div ref={ref} className="grid grid-cols-3 border-solid border-slate-300 border-2 text-slate-800">
                {tiles.map(item => {
                    return (
                        <Tile 
                            key={item}
                            tileNumber={item} 
                            piece={piece}
                            setPiece={setPiece}
                            player={player}
                            setPlayer={setPlayer}
                            board={board}
                            setBoard={setBoard}
                            moves={moves}
                            setMoves={setMoves}
                            isPlaying={isPlaying}
                            setIsPlaying={setIsPlaying}
                            win={win}
                            setWin={setWin}
                            parentDiv={ref}
                        />
                    )
                })}
            </div>
            {isPlaying ? <Player player={player} piece={piece} /> : <Result moves={moves} player={player} piece={piece} win={win} setBoard={setBoard} setIsPlaying={setIsPlaying} setMoves={setMoves} setWin={setWin} setPiece={setPiece} setPlayer={setPlayer} parentDiv={ref} />}
        </div>
    )
}