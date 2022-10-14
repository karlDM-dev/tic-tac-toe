import { useContext } from "react"
import GameContext from "../context/game-context"

export default function Player() {
    const { player, piece, isPlaying } = useContext(GameContext)

    return (
        <div>
            {isPlaying && <div className='mt-5 font-semibold text-lg text-slate-800'>Turn for Player { player } &#60;{ piece }&#62;</div>}
        </div>
    )
}
