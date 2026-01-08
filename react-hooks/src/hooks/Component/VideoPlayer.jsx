import {useEffect, useRef} from 'react'
const VideoPlayer = ({src, isPlaying}) => {
    // initialie the ref
    console.log(isPlaying)
    const ref = useRef(null)
    // if(isPlaying){
    //     ref.current.play() // VideoPlayer.jsx?t=1767879026680:11 Uncaught TypeError: Cannot read properties of null (reading 'pause')
    // }else(
    //     ref.current.pause() // this is also break
    // )
    /**
     * In above code we are try to modify DOM while it is rendering. it is a side effect
     * we are taking ref of video tag but react doesnt not render it.
     * unless react does not return jsx so react does not know which dom need to create.
     * so we cant find its refrence, there fore it break.
     * to fix this we need to wrap this in useEffect.
     * in this case react first render the <video> tag in DOM then it will run the effect 
     * then it will get the refrence of Video tag then it will play the video
     * 
     */
    useEffect(() => {
        if (isPlaying) {
            console.log('calling play method')
            ref.current.play() // VideoPlayer.jsx?t=1767879026680:11 Uncaught TypeError: Cannot read properties of null (reading 'pause')
        } else {
            console.log('calling pause method')
            ref.current.pause() // this is also break
        }
    },[isPlaying]) 
    // so in app component input state got change but because  isPlaying state not chnage so this effect will not run,
    // other wise it will run every state change
    // react will compair depedency value by comparing it previous value while rendering with help of Object.is comparison


    return (
        <div>
            <video ref={ref} controls width="100%" preload="metadata">
                <source src={src} type="video/webm" />
                Your browser does not support the video tag. You can <a href="/flower.webm" download>download the video</a>.
            </video>
        </div>

    )
}

export default VideoPlayer;