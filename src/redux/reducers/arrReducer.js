const initState={
    arr:[1,2,3]
}
export const arrReducer=(state=initState, action)=> {
    switch (action.type) {
        case 'REMOVE_INDEX':
            return {...state, inf:  ''}
        case 'CHANGE_INDEX':
            return {...state, inf:action.payload}
        default:
            return state;
    }
}
