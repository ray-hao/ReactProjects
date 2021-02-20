import React, {useState, useEffect} from "react"
import axios from "axios"

function DataFetch() {

    const [post, setPost] = useState({})
    const [current, setCurrent] = useState(1)
    const [fromButton, setfromButton] = useState(1)

    const handleClick = () => {
        setfromButton(current)
    }

    useEffect(() => {
        axios
            .get(`https://jsonplaceholder.typicode.com/posts/${fromButton}`)
            .then(res => {
                console.log(res)
                setPost(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [fromButton])

    return(
        <div>
            <input type="text" value={current} onChange={e => setCurrent(e.target.value)} />
            <button type="button" onClick={handleClick}>Fetch Post</button>
            {post.title}
        </div>
    )
}

export default DataFetch