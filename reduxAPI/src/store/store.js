import { legacy_createStore } from "redux"; 
import {todoReducer} from "../store/Todo/todoReducer"
import { applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(todoReducer ,composeEnhancers(applyMiddleware(thunk)))