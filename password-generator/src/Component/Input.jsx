import { useState } from 'react'

const Input = () => {
    const [state, setState] = useState(15);

    const handleIncrement=() =>{
        // setState(state+1)
        // console.log(state) 
        /**
         * In this case setState run asynchronously
         * setState does not update immediatly; it schedules a re-render
         * our console run before react has applied new state. 
         * below are the best approact to update the state
         */
        setState((prevState)=>{
            const nextState = prevState + 1;
            console.log(nextState)
            return nextState;
        })
    }

    // const handleDecrement = () =>{
    //     setState(state-1)
    //     console.log(state)
    // }

    const handleDecrement = () => (setState(prev => prev -1))
    
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="flex flex-col items-center space-y-4">
                <p className="text-center text-lg">This is initial value {state}</p>
                <div className="flex space-x-4">
                    <button onClick={handleIncrement} className='bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded-full'>Increment</button>
                    <button onClick={handleDecrement} className='bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded-full'>Decrement</button>
                </div>
            </div>
        </div>
    )
}

export default Input;