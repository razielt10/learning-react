export const todoReducer = (initialState, action )  => {

    switch (action.type) {
        case '[TODO] Add Todo':
            return [ ...initialState, action.payload ];
        case 'OTHER':
            throw new Error('action not implemented');

        default:
            return initialState;
    }

}