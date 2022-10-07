import { useState, useReducer, useRef, useEffect } from 'react'
import { render } from 'react-dom'
import './App.css'

function App() {
  const initialBoard = [['', '', ''],['', '', ''],['', '', '']]
  const initialPiece = "O"
  const initialPlayer = 1
  const initialMoves = 0
  const [win, setWin] = useState(false)
  const [moves, setMoves] = useState(initialMoves)
  const [board, setBoard] = useState(initialBoard)
  const [piece, setPiece] = useState(initialPiece)
  const [player, setPlayer] = useState(initialPlayer)
  const [isPlaying, setIsPlaying] = useState(true)
  const [state, dispatch] = useReducer(reducer, initialPlayer)
  const ref = useRef(null);

  useEffect(() => {
    if (isPlaying == false) {
      ref.current.classList.add("pointer-events-none")
    } else {
      ref.current.classList.remove("pointer-events-none")
    }
  }, [isPlaying]);

  function ShowResult() {
    var result = <div className='mt-5 text-slate-800 font-semibold text-lg'>Player { player } &#60;{ piece }&#62; wins!</div>
    if (moves == 9 && !win) {
      result = <div className='mt-5 text-slate-800 font-semibold text-lg'>Draw!</div>
    }
    return (
      <div>
        { result }
        <button className='mt-5 px-4 py-2 font-semibold text-sm text-slate-800 border-solid border-2 border-slate-400 hover:bg-slate-400 hover:text-white' onClick={handlePlayAgainClick}>Play again</button>
      </div>
    )
  }

  function ShowPlaying() {
    return <div className='mt-5 font-semibold text-lg text-slate-800'>Turn for Player { player } &#60;{ piece }&#62;</div>
  }

  function checkBoard() {
    // Horizontal
    for (var row = 0; row < 3; row++) {
      if (board[row][0] == board[row][1] && board[row][0] == board[row][2]) {
        if (board[row][0] != "") {
          switch(row) {
            case 0:
              ref.current.children[0].classList.add("bg-green-400")
              ref.current.children[1].classList.add("bg-green-400")
              ref.current.children[2].classList.add("bg-green-400")
              break;
            case 1:
              ref.current.children[3].classList.add("bg-green-400")
              ref.current.children[4].classList.add("bg-green-400")
              ref.current.children[5].classList.add("bg-green-400")
              break;
            case 2:
              ref.current.children[6].classList.add("bg-green-400")
              ref.current.children[7].classList.add("bg-green-400")
              ref.current.children[8].classList.add("bg-green-400")
              break;
          }
          setIsPlaying(false)
          setWin(true)
        }
      }
    }

    // Vertical
    for (var col = 0; col < 3; col++) {
      if (board[0][col] == board[1][col] && board[0][col] == board[2][col]) {
        if (board[0][col] != "") {
          switch(col) {
            case 0:
              ref.current.children[0].classList.add("bg-green-400")
              ref.current.children[3].classList.add("bg-green-400")
              ref.current.children[6].classList.add("bg-green-400")
              break;
            case 1:
              ref.current.children[1].classList.add("bg-green-400")
              ref.current.children[4].classList.add("bg-green-400")
              ref.current.children[7].classList.add("bg-green-400")
              break;
            case 2:
              ref.current.children[2].classList.add("bg-green-400")
              ref.current.children[5].classList.add("bg-green-400")
              ref.current.children[8].classList.add("bg-green-400")
              break;
          }
          setIsPlaying(false)
          setWin(true)
        }
      }
    }

    // Diagonal
    if (board[0][0] == board[1][1] && board[0][0] == board[2][2]) {
      if (board[0][0] != "") {
        ref.current.children[0].classList.add("bg-green-400")
        ref.current.children[4].classList.add("bg-green-400")
        ref.current.children[8].classList.add("bg-green-400")
        setIsPlaying(false)
        setWin(true)
      }
    }

    if (board[0][2] == board[1][1] && board[0][2] == board[2][0]) {
      if (board[0][2] != "") {
        ref.current.children[2].classList.add("bg-green-400")
        ref.current.children[4].classList.add("bg-green-400")
        ref.current.children[6].classList.add("bg-green-400")
        setIsPlaying(false)
        setWin(true)
      }
    }
  }

  function resetBoard() {
    setBoard(initialBoard)
    for (var item = 0; item < 9; item++) {
      ref.current.children[item].classList.remove("bg-green-400")
    }
  }

  function handlePlayAgainClick() {
    for (var item = 0; item < 9; item++) {
      ref.current.children[item].classList.remove("pointer-events-none")
      ref.current.children[item].innerText = ""
    }
    resetBoard()
    setIsPlaying(true)
    setWin(false)
    setMoves(initialMoves)
    setPiece(initialPiece)
    setPlayer(initialPlayer)
  }

  const handleClick = (row, col, e) => {
    board[row][col] = player
    e.target.innerText = piece
    e.target.classList.add("pointer-events-none")
    checkBoard()
    setMoves(moves + 1)
    { moves == 8 && setIsPlaying(false) }
    { isPlaying ? dispatch({ type: player }) : ref.current.classList.add("pointer-events-none") }
  }

  function reducer(state, action) {
    switch (action.type) {
      case 1:
        if (isPlaying == true) {
          setPlayer(player + 1)
          setPiece("X")
        }
        return
      case 2:
        if (isPlaying == true) {
          setPlayer(player - 1)
          setPiece("O")
        }
        return
      default:
        throw new Error();
    }
  }

  return (
    <>
      <h1 className='text-6xl font-bold text-slate-800'>Tic-Tac-Toe</h1>
      <div ref={ ref } className="inline-grid grid-cols-3 mt-10 border-solid border-slate-300 border-2 text-slate-800">
        <div className='w-14 h-14 p-4 hover:bg-slate-300 border-solid border-slate-300 border-2 font-medium text-sm' onClick={(e) => handleClick(0, 0, e)}></div>
        <div className='w-14 h-14 p-4 hover:bg-slate-300 border-solid border-slate-300 border-2 font-medium text-sm' onClick={(e) => handleClick(0, 1, e)}></div>
        <div className='w-14 h-14 p-4 hover:bg-slate-300 border-solid border-slate-300 border-2 font-medium text-sm' onClick={(e) => handleClick(0, 2, e)}></div>
        <div className='w-14 h-14 p-4 hover:bg-slate-300 border-solid border-slate-300 border-2 font-medium text-sm' onClick={(e) => handleClick(1, 0, e)}></div>
        <div className='w-14 h-14 p-4 hover:bg-slate-300 border-solid border-slate-300 border-2 font-medium text-sm' onClick={(e) => handleClick(1, 1, e)}></div>
        <div className='w-14 h-14 p-4 hover:bg-slate-300 border-solid border-slate-300 border-2 font-medium text-sm' onClick={(e) => handleClick(1, 2, e)}></div>
        <div className='w-14 h-14 p-4 hover:bg-slate-300 border-solid border-slate-300 border-2 font-medium text-sm' onClick={(e) => handleClick(2, 0, e)}></div>
        <div className='w-14 h-14 p-4 hover:bg-slate-300 border-solid border-slate-300 border-2 font-medium text-sm' onClick={(e) => handleClick(2, 1, e)}></div>
        <div className='w-14 h-14 p-4 hover:bg-slate-300 border-solid border-slate-300 border-2 font-medium text-sm' onClick={(e) => handleClick(2, 2, e)}></div>
      </div>
      { isPlaying ? <ShowPlaying /> : <ShowResult /> }
    </>
  )
}

export default App
