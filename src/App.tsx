import moon from './assets/moon.gif'

function App() {

  return (
    <div className="App bg-black h-screen w-full">
      <div className="flex justify-center items-center h-screen">
        <img src={moon} alt="GIF" className="max-w-full max-h-full" />
      </div>
    </div>
  )
}

export default App
