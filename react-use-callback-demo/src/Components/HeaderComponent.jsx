import {memo} from 'react'
/**
 * using memo component dont re-render unnessery
 * 
 */
const HeaderComponent = ({headerTitle, handleHeaderTitle}) =>{
    console.log('Header Component')
    return(
        <div>
           <h2>This is Header Component</h2>
           <div>
            headerTitle from App.js is {headerTitle}
            {handleHeaderTitle()}
           </div>
        </div>
    )
}

export default memo(HeaderComponent);