import React, {useState} from "react"
import ReactDOM from "react-dom"

function HookCounter() {

    const [count, setCount] = useState(0) 
    
    return (
        <div>
            <button onClick={() => setCount(count + 1)}> Count: {count}</button>
        </div>
    )

}

export default HookCounter