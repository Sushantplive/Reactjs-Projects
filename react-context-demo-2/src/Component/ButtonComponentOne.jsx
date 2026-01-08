import { useState } from "react";

const ButtonComponentOne = () => {
    const [bgColor, setBgColor] = useState('red');

    const handleBgColor = () => {
        setBgColor('blue')
    }

    return (
        <div>
            <button onClick={handleBgColor} style={{ backgroundColor: bgColor }}>Button One</button>
        </div>
    )
}

export default ButtonComponentOne;