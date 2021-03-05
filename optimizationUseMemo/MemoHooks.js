import React, {useState, useMemo} from "react"

function MemoHook() {

    const [counterFirst, setCounterFirst] = useState(0)
    const [counterTwo, setCounterTwo] = useState(0)

    const incrimentOne = () => {
        setCounterFirst(counterFirst + 1)
    }

    const incrimentTwo = () => {
        setCounterTwo(counterTwo + 1)
    }


    const isEven = useMemo(() => {

        let i = 0

        while(i < 200000000) i++

        return (
            !(counterFirst % 2)
        )
    }, [counterFirst])


    return (
        <div>
            <button onClick={incrimentOne}>Count One - {counterFirst}</button>
            <span>{isEven ? "Even" : "Odd"}</span>
            <div>
                <button onClick={incrimentTwo}>Count Two - {counterTwo}</button>
            </div>
        </div>
    )

}



export default MemoHook
