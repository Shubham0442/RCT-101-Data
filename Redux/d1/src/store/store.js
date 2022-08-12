
import { legacy_createStore, combineReducers } from "redux";  
import { reducer } from "./reducer";
import { todoReducer } from "./todoReducer";
import { applyMiddleware, compose } from "redux";
import thunk from "redux-thunk"


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootreducer = combineReducers({
    counter:reducer,
    todo: todoReducer
})

export const store = legacy_createStore(rootreducer, composeEnhancers(applyMiddleware(thunk)));