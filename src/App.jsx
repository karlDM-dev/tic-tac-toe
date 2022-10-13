import Game from './components/Game'

function App() {
  return (
    <div className='flex flex-col justify-center items-center min-h-screen'>
      <h1 className='text-6xl font-bold text-slate-800 mb-[20px]'>Tic-Tac-Toe</h1>
      <Game />
    </div>
  )
}

export default App
