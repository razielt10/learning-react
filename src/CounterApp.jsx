import { useState } from 'react';
import PropTypes from 'prop-types';

//con fragment
export const CounterApp = ({value}) => {

    const [counter , setCounter] = useState(value)

    function handleAdd (ev) {
        // setCounter(counter + 1)
        setCounter( (c) => c + 1 )
    }   
    function handleSubstract (ev) {
        // setCounter(counter + 1)
        setCounter( (c) => c - 1 )
    }  
    function handleReset (ev) {
        // setCounter(counter + 1)
        setCounter( (c) => value )
    }

    return (
    <>
        <h1>Counter App</h1>
        <h2>{ counter }</h2>
        <button onClick={ handleAdd }>+1</button>
        <button onClick={ handleSubstract }>-1</button>
        <button onClick={ handleReset }>Reset</button>
    </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number
}

CounterApp.defaultProps = {
    value: 0
}
