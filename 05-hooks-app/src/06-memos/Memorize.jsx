import { useState } from "react"
import { useCounter } from "../hooks"
import { Small } from "./Small"

export const Memorize = () => {

    const { counter, onHandleCounter } = useCounter()

    const [show, setShow] = useState()
 
    return (
        <>
            <h1>Counter: 
                <Small value={counter} />
            </h1>
        
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

