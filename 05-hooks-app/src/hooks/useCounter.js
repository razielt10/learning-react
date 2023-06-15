import { useState } from "react"

export const useCounter = (initialValue = 5) => {

    const [counter, setCounter] = useState( initialValue )

    const onHandleCounter = (value) => {
        setCounter(value)
    }

    return {
        counter, onHandleCounter
    }
}