import { useState } from 'react'
import './App.css'
import CuartaPantalla from './components/body'

function App() {
  const [count, setCount] = useState(0)

  return (
    

      <div className="App">
          <CuartaPantalla/>
    <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <CuartaPantalla/>
    </div>
      </div>

  )
}

export default App

