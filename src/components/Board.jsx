import Tile from "./Tile";
import { useContext, useEffect } from "react";
import GameContext from "../context/game-context";

export default function Board() {
    const { isPlaying, ref } = useContext(GameContext)
    
    let tiles = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    useEffect(() => {
        if (!isPlaying) {
            ref.current.classList.add("pointer-events-none")
        } else {
            ref.current.classList.remove("pointer-events-none")
        }
    }, [isPlaying]);

    return (
        <div>
            <div className="flex flex-col items-center">
                <div ref={ref} className="grid grid-cols-3 border-solid border-slate-300 border-2 text-slate-800">
                    {tiles.map(item => {
                        return (
                            <Tile key={item} tileNumber={item} parentDiv={ref} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
