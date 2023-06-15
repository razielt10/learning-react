import { useCallback, useState } from "react"
import { ShowIncrement } from "./ShowIncrement"

export const CallbackCounter = () => {

    const [counter, setCounter] = useState(10)

    const increment = useCallback( () => {
            setCounter( (value) => value + 1)
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

