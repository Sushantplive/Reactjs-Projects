import { useState } from 'react'
import './App.css'
import ParentComponent from './Components/ParentComponent'
import { ThemeContext } from './Context/ThemeContext'

function App() {
  const [color, setColor] = useState('pink')
  /**
   * so this pink color we can directly take in child component, to avoid pro drilling
   */
  // I want to change button color


  return (
    <>
      <ThemeContext.Provider value={color}>
        <h2>Welcome to context hook api</h2>
        <hr />
        {/* <ParentComponent color='blue' /> */}
        <ParentComponent />
      </ThemeContext.Provider>
    </>
  )
}

export default App
