const initState={
    inf:'init'
}
const REMOVE="REMOVE"
const CHANGE="CHANGE"
export const infReducer=(state=initState, action)=> {
    switch (action.type) {
        case REMOVE:
            return {...state, inf:  ''}
        case CHANGE:
            return {...state, inf:action.payload}
        default:
            return state;
    }
}

export const removeInf= (payload)=>({type:REMOVE,payload})
//ACTION CREATOR - ЧТОБ В ДИСПАТЧ ОТПРАВЯЛЯТЬ НЕ ОБЪЕКТ, А ЭТУ ФУНКЦИЮ КОТОРАЯ ВЕРНЕТ ОБЪЕКТ
