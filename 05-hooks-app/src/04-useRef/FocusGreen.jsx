import React, { useRef } from 'react'

export const FocusGreen = () => {

    const inputRef = useRef();

    const onToFocus = () => {
        inputRef.current.select();
    }

    return (
        <>
            <h3>Focus Green</h3>

            <input
                type="text"
                ref={ inputRef }
                name="focusme" 
                id="" 
                className='form-control'/>

            <button
                type="button"
                onClick={ onToFocus }>
                To Focus
            </button>
        
        </>
    )
}
