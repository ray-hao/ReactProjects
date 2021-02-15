import React, { useState } from 'react'

function HookForm() {

    const [name, setName] = useState({firstname: '', lastname: ''})

    return (
            <form>
                <input type="text" 
                value={name.firstname} 
                onChange={(e) => setName({...name, firstname : e.target.value})}/>
                
                <input type="text" 
                value={name.lastname} 
                onChange={(e) => setName({...name, lastname : e.target.value})}/>

                <h2> your name is {name.firstname} {name.lastname}</h2>
            </form>

    )
}


export default HookForm
