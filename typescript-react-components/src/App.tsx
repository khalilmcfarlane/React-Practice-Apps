import { useState } from 'react'
import Hello from './components/Hello';
import Button from './components/Button';
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Hello/>
      <Button/>
    </div>
  )
}

export default App
