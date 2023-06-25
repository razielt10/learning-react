import { useState } from 'react'
import { uuidv4 } from '../helpers/uuidv4'
import { useForm } from "../hooks/useForm"


const TodoAdd = ({handleNewTodo}) => {


    const { formState, description, email, password, onInputChange, onResetForm } = useForm( {
        description: ''
    } )

    const onNewTodo = (ev) => {
        ev.preventDefault()
        //Validator!!!!
        const newTodo = {
            id: uuidv4(),
            description: description,
            done: false,
        }

        handleNewTodo(newTodo)
        onResetForm()
    }

    return (
        <>
            <form action="" onSubmit = { onNewTodo } >
                <input
                    type="text" name="description"
                    placeholder='¿Que hay que hacer?'
                    className='form-control'
                    value={description}
                    onChange={onInputChange}/>

                <button type='submit'
                    className='btn btn-outline-primary mt-1'>
                    Agregar
                </button>
            </form>
        </>
    )
}

export default TodoAdd
