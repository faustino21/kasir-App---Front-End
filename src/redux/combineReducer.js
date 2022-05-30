import { combineReducers } from "redux";
import cashierReducer from "./cashierReducer/cashierReducer";


export default combineReducers({
    cashier : cashierReducer
})