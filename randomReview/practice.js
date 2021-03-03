import React, {useState, useEffect} from "react"

function Practice() {

    const [count, setCount] = useState(0)
    const [name, setName] = useState({first:"", last:""})
    const [items, setItems] = useState([])


    useEffect(() => {
        if (count == 1) {
            document.title = `You've Clicked ${count} Time`
        } else {
            document.title = `You've Clicked ${count} Times`
        }

        console.log(`Your name is ${name.first} ${name.last}`)

    }, [count, name])

    const handleItems = () => {
        setItems([
            ...items,
            {
                id: items.length,
                value: Math.floor(Math.random() * 10) + 1
            }
        ])
    }

    return (
        <div>
            <button onClick={() => setCount(count+1)}>
                {count}
            </button>

            <input type="text" value={name.first} onChange={(e) => setName({...name, first:e.target.value})}/>
            <input type="text" value={name.last} onChange={(e) => setName({...name, last:e.target.value})}/>
            
            <hr>
            </hr>

            <button onClick={handleItems}>Add Item</button>

            <hr>
            </hr>

            <ul>
                {items.map((item) => 
                    <li key={item.id}>
                    {item.value}
                    </li>)}
            </ul>

        </div>
    )

}

export default Practice
