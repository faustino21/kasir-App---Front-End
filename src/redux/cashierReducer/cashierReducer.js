import CashierAction from "./cashierAction"

const CashierState = {
    limit : 4,
    skip : 0,
    name : '',
}

const cashierReducer = (state = CashierState, action)=> {
    switch (action.type){
        case CashierAction.PAGE:
            return{
                ...state,
                skip : action.editSkip
            }
        case CashierAction.UPDATE:
            return{
                ...state,
                name : action.newName
            }
        case CashierAction.RESET:
            return{
                ...state,
                name : ''
            }
        default:
            break;
    }
    return state;
}

export default cashierReducer;