import { useCounter } from "../hooks"


export const CounterWithCustomHook = () => {

    const { counter, onHandleCounter } = useCounter()
    
    return (
        <>
            <h1>Counter</h1>
            <h4>{ counter }</h4>

            <button className="btn btn-primary" onClick={ () => onHandleCounter(counter + 1) }>+1</button>
            <button className="btn btn-primary" onClick={ () => onHandleCounter(0) }>Reset</button>
            <button className="btn btn-primary" onClick={ () => onHandleCounter(counter - 1) }>-1</button>
        </>
    )
}
