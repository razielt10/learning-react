import { useEffect } from 'react'
import { TodoList } from './TodoList'
import TodoAdd from './TodoAdd'
import { useTodo } from '../hooks/useTodo'

export const TodoApp = () => {

    const {todos, handleNewTodo, handleRemoveTodo, handleToggleTodo, handleEditTodo, handleUpdateTodo} = useTodo()

    useEffect( () => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [ todos ])

    return (
        <>
            <h2>TodoApp <small>XX</small> / <small>10</small></h2>
            <hr />

            <div className="row">
                <div className="col-7">
                    
                    <TodoList
                     todos={ todos }
                     onRemoveTodo={ handleRemoveTodo } 
                     onToggleTodo={ handleToggleTodo }
                     onUpdateTodo={ handleUpdateTodo }
                    />
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
