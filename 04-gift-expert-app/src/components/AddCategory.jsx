import { useState } from "react"
import PropTypes from 'prop-types';

export const AddCategory = ({ initInput, onAddCategory}) => {

    const [ inputValue, setInputValue ] = useState(initInput)

    const onInputChange = (ev) => {
        setInputValue( ev.target.value )
    }

    const onSubmit = (ev) => {
        ev.preventDefault()
        if (inputValue.trim().length == 0) {
            return 
        }

        onAddCategory(inputValue)
        setInputValue('')
    }

    return (
        <form className="search-category" onSubmit={ onSubmit }>
            <span className="text-search">
                Busquemos una categoria
            </span>
            <input
             type="text"
             name=""
             id="input-category"
             value={ inputValue }
             onChange={ onInputChange }
             placeholder="search a gif"/>
            <button >Add</button>
        </form>
    )
}

AddCategory.propTypes = {
    initInput: PropTypes.string
}

AddCategory.defaultProps = {
    initInput: ''
}