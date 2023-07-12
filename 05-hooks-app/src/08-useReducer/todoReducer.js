export const todoReducer = (initialState, action )  => {

    switch (action.type) {
        case '[TODO] Add Todo':
            return [ ...initialState, action.payload ];

        case '[TODO] Remove Todo':
            return initialState.filter( (todo) => {
                return todo.id !== action.payload
            } );

        case '[TODO] Toggle Todo':
            return initialState.map( (todo) => {
                if (todo.id === action.payload) {
                    return { ...todo, done: !todo.done}
                }
                return todo
            } );
        
        case '[TODO] Update Todo':
            return initialState.map( (todo) => {
                if (todo.id === action.payload.id) {
                    return { ...action.payload }
                }
                return todo
            } );

        case 'OTHER':
            throw new Error('action not implemented');

        default:
            return initialState;
    }

}