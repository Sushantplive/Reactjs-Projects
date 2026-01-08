import './App.css'
import ParentComponent from './Component/ParentComponent'
import { ThemeProvider } from './Context/ThemeContext.jsx'

function App() {

  return (
    <>
      <ThemeProvider>
        <ParentComponent />
      </ThemeProvider>
    </>
  )
}

export default App
