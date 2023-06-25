import { useReducer } from 'react'
import { todoReducer } from './todoReducer'
import { TodoList } from './TodoList'
import TodoAdd from './TodoAdd'
import { uuidv4 } from '../helpers/uuidv4'

//deberia de estar en la misma funcion
const initialState = [
    { 
        id: uuidv4(), 
        description : 'Recolectar 1',
        done: false,
    },
    { 
        id: uuidv4(), 
        description : 'Recolectar 2',
        done: false,
    }   
]


export const TodoApp = () => {

    const [todos, dispatchTodo] = useReducer( todoReducer, initialState)

    const handleNewTodo = (todo) => { 
        console.log(todo)
        const action = {
            type: '[TODO] Add Todo',
            payload: todo,
        }

        dispatchTodo(action)
    }

    return (
        <>
            <h2>TodoApp <small>XX</small> / <small>10</small></h2>
            <hr />

            <div className="row">
                <div className="col-7">
                    
                    <TodoList todos={todos} />

                </div>
                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />

                    <TodoAdd handleNewTodo={handleNewTodo}/>
                </div>
            </div>

            
        </>
    )
}
