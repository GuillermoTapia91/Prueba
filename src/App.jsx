import { useState } from 'react'
import './App.css'
import CuartaPantalla from './compontens/body'
function App() {
  const [count, setCount] = useState(0)

  return (
    

      <div className="App">
          <CuartaPantalla/>
      </div>
    
  )
}

export default App

