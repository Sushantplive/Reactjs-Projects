import { useEffect, useState } from 'react';
import VideoPlayer from './Component/VideoPlayer';

const UseEffectComponent = () => {
    console.log('this is UseEffectComponent demo')
    /**
     * useEffect “delays” a piece of code from running until 
     * that render is reflected on the screen.
     * it is used to synchronize with an external system
     */


    // useEffect(()=>{
    //     console.log('it will run on every render')
    // },[])

    const [isPlaying, setIsPlaying] = useState(false)

    const handleClickForVideoPlay =() =>{
        setIsPlaying(true)
    }
    const handleClickForVideoPause =() =>{
        setIsPlaying(false)
    }


    return (
        <div>
            welcome to UseEffectComponent demo
            <hr />
            {/* <button onClick={() => setIsPlaying(!isPlaying)}>
                {isPlaying ? 'Pause' : 'Play'}
            </button> */}
            <button onClick={handleClickForVideoPlay} style={{backgroundColor:'lightblue'}}>Play</button><br/>
            <button onClick={handleClickForVideoPause} style={{backgroundColor:'lightpink'}}>Pause</button>
            <VideoPlayer src={"/flower.webm"} isPlaying={isPlaying} />
        </div>
    )
}

export default UseEffectComponent;