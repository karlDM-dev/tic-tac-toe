export function resetBoard(parentDiv) {
    for (let item = 0; item < 9; item++) {
        parentDiv.current.children[item].classList.remove("pointer-events-none")
        parentDiv.current.children[item].innerText = ""
        parentDiv.current.children[item].classList.remove("bg-green-400")
    }
}
