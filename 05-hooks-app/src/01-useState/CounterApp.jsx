import { useState } from "react"

export const CounterApp = () => {

    const [ counters, setCounter ] = useState({
        counter1: 1,
        counter2: 20,
        counter3: 30,
    })

    const {counter1, counter2, counter3} = counters
    
    const onHandlePlusOne = () => {
        setCounter({
            ...counters,
            counter1 : counter1 + 1,
        })
    }
    
    return (
        <>
            <h1>Counter</h1>
            <h4>{ counter1 }</h4>

            <button className="btn btn-primary" onClick={ onHandlePlusOne }>+1</button>
        </>
    )
}
