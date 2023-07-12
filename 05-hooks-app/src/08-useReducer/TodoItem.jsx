import { useState } from 'react'
import { useForm } from "../hooks/useForm"

export const TodoItem = ({todo, onRemoveTodo, onToggleTodo, onUpdateTodo}) => {

    const { formState, description, onInputChange, onResetForm } = useForm( {
        description: todo.description,
        id: todo.id,
        done: todo.done,
    } )

    const [editing, setEditing] = useState(false)

    const handleEditTodo = () => {
        onResetForm()
        setEditing(!editing)
    }

    const handleUpdateTodo = (ev) => {
        ev.preventDefault()
        //Validator!!!!
        onUpdateTodo(formState)
        onResetForm()
        setEditing(!editing)
    }

    return (
    <>
        <li className='list-group-item d-flex justify-content-between'>
            {
                editing ? (
                        <form className='' 
                         action="" onSubmit = { handleUpdateTodo } >
                            <input
                                type="text" name="description"
                                placeholder='¿Que hay que hacer?'
                                className='form-control'
                                value={description}
                                onChange={onInputChange}/>
                            <div>
                                <button type="submit"
                                    className='btn btn-success'>
                                    <i className='fa fa-save'></i>
                                </button>
                                <button type="button"
                                    className='btn btn-dark'
                                    onClick={ () => { handleEditTodo() } }>
                                        <i className='fa fa-xmark'></i>
                                </button>
                            </div>
                        </form>
                ) : (
                    <>
                    <span 
                        className={`align-self-center ${todo.done ? 'text-decoration-line-through' : ''}`} 
                        >{ todo.description }</span>
                        
                        <div>
                            { 
                                !todo.done 
                                ? (
                                    <button className='btn btn-success'
                                    onClick={ () => { onToggleTodo(todo.id) }}>
                                        <i className='fa fa-check'></i>
                                    </button>
                                ) : (
                                    <button className='btn btn-warning'
                                    onClick={ () => { onToggleTodo(todo.id) }}>
                                        <i className='fa fa-xmark'></i>
                                    </button>
                                ) }

                            <button className='btn btn-secondary'
                            onClick={ () => { handleEditTodo() } }>
                                <i className='fa fa-pencil'></i>
                            </button>

                            <button className='btn btn-danger'
                            onClick={ () => { onRemoveTodo(todo.id) } }>
                                <i className='fa fa-trash'></i>
                            </button>
                        </div>
                        </>
                )
            }

            
        </li>
    </>
    )
}

