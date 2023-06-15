import { useMemo, useState } from "react"
import { useCounter } from "../hooks"
import { Small } from "./Small"

const heavyStuff = (interations = 100) => {
    for (let i = 1; i <= interations; i++) {
        console.log('se itera...')
    }
}


export const MemoHook = () => {

    const { counter, onHandleCounter } = useCounter(4000)
    const [show, setShow] = useState(true)

    const memorizedValue = useMemo( () =>
         heavyStuff(counter),
        [counter]
    )
 
    return (
        <>
            <h1>Counter: 
                <Small value={counter} />
            </h1>

            <h4>{ memorizedValue }</h4>
        
            <button
                className="btn btn-primary"
                onClick={ () => onHandleCounter( counter + 1) }>+1</button>

            <button
                 className="btn btn-outline-primary"
                 onClick={ () => setShow(!show)}>
            Show / Hide
            </button>
        </>
    )
}

