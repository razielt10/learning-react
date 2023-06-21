
const initialState = [
    {id: 1, todo: 'Recolectar...', done: false},
]

const todoReducer = (state = initialState, action = {}) => {

    if ( action.type === '[TODO] ad todo' ) {
        return [ ...state, action.payload ] 
    }

    return state;
}

let todos = todoReducer()

const newTodo = {
    id: 2, todo: 'Limpiar...', done: false,
}

const addTodoAction = {
    type: '[TODO] ad todo',
    payload: newTodo,
}

todos = todoReducer(todos, addTodoAction)

console.log(todos)