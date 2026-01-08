import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

const ChildComponent = ({color}) => {

    const buttonColor = useContext(ThemeContext)
    return(
        <div>
        <button style={{backgroundColor:buttonColor}}>Click me</button>
        </div>
    )
}

export default ChildComponent;