import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

const ButtonComponentTwo = () => {
   // use Context here
   const {color, changeColor} = useContext(ThemeContext)
    return (
        <div>
            <button onClick={changeColor} style={{ backgroundColor: color }}>Button two</button>
        </div>
    )
}

export default ButtonComponentTwo;