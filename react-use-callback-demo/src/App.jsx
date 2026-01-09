import { useCallback, useState } from 'react'
import './App.css'
import HeaderComponent from './Components/HeaderComponent'

function App() {
  const [count, setCount] = useState(0)
  const [headerTitle, setHeaderTitle] = useState('default')

  const handleIncreament = () => {
    setCount(prev => prev + 1);
  }
  /**
   * when we change counter value then Header component also re-render,
   * this is not require, for that use memo for Header Component.
   * 
   */
  /**
   * now call the setHeaderTitle in App.js only dont call it on HeaderTilte just take it as props
   */

  // const handleHeaderTitle = () =>{
  //   console.log('calling header title in parent only')
  // }
  /**
   * Now again when we change counter then Header component re-render even through in HeaderComponent nothing has changed
   * this is because, when state got change in app.js/parent the headerTitle function re-initile its defination and HeaderComponent
   * think its props got change and hense it re-render component again.
   * in this case memo also not work, so to restrict method from re-initilizing we need to use useCallback
   */

  const handleHeaderTitle = useCallback(()=>{
    console.log('this is headerTile method')
    return headerTitle + count
  },[count]) 

  /**
   * Now after useing useCallback it wont re-render, we need to add []
   * now I want to re-render HeaderComponent only when counert change else dont re-render
   */

  return (
    <>
      <div>
        <h2>Welcome to useCallback demo</h2>
        <hr></hr>
        <HeaderComponent headerTitle={headerTitle} handleHeaderTitle={handleHeaderTitle}/>
        {`counter value is ${count}`}
        <button onClick={handleIncreament}>Increament</button>
      </div>
    </>
  )
}

export default App
