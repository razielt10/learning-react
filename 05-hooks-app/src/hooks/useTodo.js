import { useReducer } from 'react'
import { todoReducer } from '../08-useReducer/todoReducer'

export const useTodo = (initialState = {}) => {

    const init = () => {

        const items = localStorage.getItem('todos')
    
        if (items && items != 'undefined' && items.length >= 0) {
            return  JSON.parse(items)
        } 
        return []
    }

    const [todos, dispatchTodo] = useReducer( todoReducer, initialState, init)

    const handleNewTodo = (todo) => { 
        console.log(todo)
        const action = {
            type: '[TODO] Add Todo',
            payload: todo,
        }
        dispatchTodo(action)
    }

    const handleRemoveTodo = (id) => {
        const action = {
            type: '[TODO] Remove Todo',
            payload: id,
        }
        dispatchTodo(action)
    }
    
    const handleToggleTodo = (id) => {
        dispatchTodo({
            type: '[TODO] Toggle Todo',
            payload: id,
        })
    }

    const handleEditTodo = (editing) => {
        console.log('mostrar formulario')
        return !editing
    }

    const handleUpdateTodo = (todo) => {
        dispatchTodo({
            type: '[TODO] Update Todo',
            payload: todo,
        })
    }

  return {
    todos,
    handleNewTodo,
    handleRemoveTodo,
    handleToggleTodo,
    handleEditTodo, 
    handleUpdateTodo,
  }
}
