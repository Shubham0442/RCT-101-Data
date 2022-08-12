import { legacy_createStore, combineReducers } from "redux";
import { todoReducer } from "../TodoRedux/todoReducer"
import { authReducer } from "../AuthRedux/authReducer";

const rootReducer = combineReducers({
    todoReducer,
    authReducer
})

export const store = legacy_createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )