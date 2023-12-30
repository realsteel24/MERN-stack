import { useState } from 'react'
import './App.css'

function App() {

  const [count, setCount] = useState[0]
  function Increment() {
    setCount(count + 1)

  }
  return (
    <div>
      Hi there
      <button onClick={Increment}>Counter {count}</button>
    </div>
  )

}

export default App