import { useState } from 'react';
import PropTypes from 'prop-types';

//con fragment
export const CounterApp = ({value}) => {

    const [counter , setCounter] = useState(value)

    function handleAdd (ev) {
        // setCounter(counter + 1)
        setCounter( (c) => c + 1 )
    }   


    return (
    <>
        <h1>Counter App</h1>
        <h2>{ counter }</h2>
        <button onClick={ handleAdd }>
            +1
        </button>
    </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number
}

CounterApp.defaultProps = {
    value: 0
}
