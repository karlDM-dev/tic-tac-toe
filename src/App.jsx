import Board from './components/Board'
import Player from './components/Player'
import Result from './components/Result'
import TicTacToe from './components/TicTacToe'

function App() {
  return (
    <div className='flex flex-col justify-center items-center min-h-screen'>
      <h1 className='text-6xl font-bold text-slate-800 mb-[20px]'>Tic-Tac-Toe</h1>
      <TicTacToe>
        <Board />
        <Player />
        <Result />
      </TicTacToe>
    </div>
  )
}

export default App
