import { useState } from "react"

const randomValue = () => {
    const value = Math.floor(Math.random()*10)
    return  value != 0 ? value : randomValue()
}

export const useRandom = (initialValue = randomValue()) => {

    const [random, setRandom] = useState( initialValue )

    const onHandleRandom = () => {
        setRandom( randomValue() )
    }

    return {
        random, onHandleRandom
    }
}