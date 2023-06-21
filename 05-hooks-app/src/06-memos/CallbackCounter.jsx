import { useCallback, useState } from "react"
import { ShowIncrement } from "./ShowIncrement"

export const CallbackCounter = () => {

    const [counter, setCounter] = useState(10)

    const increment = useCallback( 
        (incre = 1) => {
            setCounter( (current) => current + incre)
        },
        []
    )

    return (
        <div>
            <h2>useCallback Hook: { counter }</h2>

            <ShowIncrement increment={ increment }/>
        </div>
    )
}

