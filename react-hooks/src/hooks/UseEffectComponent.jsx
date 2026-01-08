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
    const [text, setText] = useState('')

    const handleClickForVideoPlay =() =>{
        setIsPlaying(true)
    }
    const handleClickForVideoPause =() =>{
        setIsPlaying(false)
    }

    // text handler
    const handleInputChage = (e) =>{
        setText(e.target.value)
    }


    return (
        <div>
            welcome to UseEffectComponent demo
            <hr />
            {/* <button onClick={() => setIsPlaying(!isPlaying)}>
                {isPlaying ? 'Pause' : 'Play'}
            </button> */}
            <div>
            <input className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" type='text' value={text} onChange={handleInputChage}/>
            </div>
            <button className="text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none" onClick={handleClickForVideoPlay} style={{backgroundColor:'lightblue'}}>Play</button><br/>
            <button className="text-white bg-danger box-border border border-transparent hover:bg-danger-strong focus:ring-4 focus:ring-danger-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none" onClick={handleClickForVideoPause} style={{backgroundColor:'lightpink'}}>Pause</button>
            <VideoPlayer src={"/flower.webm"} isPlaying={isPlaying} />
        </div>
    )
}

export default UseEffectComponent;