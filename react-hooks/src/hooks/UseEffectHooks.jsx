import { useState } from "react";

const UseStateComponent = ({ }) => {
    const [count, setCount] = useState(0)

    const handleIncreament = () => {
        // setCount((prev)=>{
        //     const next = prev + 1;
        //     return next;
        // })

        // tricky 
        // setCount(count + 1);
        // setCount(count + 1);
        // setCount(count + 1); //  only increment by 1
        // fixes
        setCount(prev => prev + 1); // increse by 1, res is 1
        setCount(prev => prev + 1); // 1+1 res is 2
        setCount(prev => prev + 1); // 2+1 res is 3
    }

    const handleDecreament = () => {
        setCount((prev) => {
            // const old = prev - 1;
            const old = prev > 0 ? prev - 1 : prev; // it wont go to negative sign now
            // Math.max(0, prev - 1)
            return old;
        })
    }

    return (
        <div>
            <h2>Initial count is {count}</h2>
            <div className="flex space-x-4 justify-center mt-4">
                <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={handleIncreament}>Increamet</button>
                <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={handleDecreament}>Decremant</button>
            </div>
        </div>
    )
}

export default UseStateComponent;