import { Children, createContext, useState } from "react";

// create context with default value
const ThemeContext = createContext('')


// create a provider now

const ThemeProvider = ({children}) =>{
    const [color, setColor] = useState('blue')

    const changeColor = () =>{
        setColor('red')
    }


    return(
        <ThemeContext.Provider value={{color, changeColor}}>
             {children}
        </ThemeContext.Provider>
    )
}

export {ThemeContext, ThemeProvider}
