import { useReducer } from 'react'
import { todoReducer } from './todoReducer'

//deberia de estar en la misma funcion
const initialState = [
    { 
        id: new Date().getTime(), 
        description : 'Recolectar 1',
        done: false,
    },
    { 
        id: new Date().getTime() + 1, 
        description : 'Recolectar 2',
        done: false,
    }   
]


export const TodoApp = () => {

    const [todos, dispatchTodo] = useReducer( todoReducer, initialState)

    return (
        <>
            <h2>TodoApp <small>XX</small> / <small>10</small></h2>
            <hr />

            <div className="row">
                <div className="col-7">
                    <ul className='list-group'>
                    {
                        todos.map( todo => (
                            <li className='list-group-item d-flex justify-content-between'>
                                <span className='align-self-center'>{ todo.description }</span>
                                <button className='btn btn-danger'>
                                    Del
                                </button>
                                </li>
                        ))
                    }
                    </ul>
                </div>
                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />

                    <form action="">
                        <input
                            type="text" name="description"
                            placeholder='¿Que hay que hacer?'
                            className='form-control'/>

                        <button type='submit'
                            className='btn btn-outline-primary mt-1'>
                            Agregar
                        </button>
                    </form>
                </div>
            </div>

            
        </>
    )
}
