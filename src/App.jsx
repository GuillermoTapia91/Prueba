import { useState } from 'react'
import './App.css'
import Body from './components/body'
function App() {
  const [count, setCount] = useState(0)

  return (
    

    <div className="App">
      <Body/>
    </div>
    
  )
}

export default App

