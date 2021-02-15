import React, {useState} from "react"
import ReactDOM from "react-dom"

function HookCounterAgain() {
   
    const initialCount = 0
    const [currentCount, setCount] = useState(initialCount)
    
    return (
        <div>
            Count: {currentCount}
            <button onClick = {() => setCount(initialCount)}>Reset</button>
            <button onClick = {() => setCount((prev) => prev + 1)}>Add One</button>
            <button onClick = {() => setCount((prev) => prev - 1)}>Subtract One</button>
        </div>
    )
}

export default HookCounterAgain