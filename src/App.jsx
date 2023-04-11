import { useState } from 'react'
import './App.css'
import Cuerpo from './compontens/body'
function App() {
  const [count, setCount] = useState(0)

  return (
    

      <div className="App">
          <Cuerpo/>
      </div>
    
  )
}

export default App

