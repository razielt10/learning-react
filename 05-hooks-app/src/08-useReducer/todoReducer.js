export const todoReducer = (initialState, action )  => {

    switch (action.type) {
        case 'ABC':
            return initialState;
        case 'OTHER':
            throw new Error('action not implemented');

        default:
            return initialState;
    }

}