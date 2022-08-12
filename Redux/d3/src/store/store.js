import {legacy_createStore,
    applyMiddleware,
    compose,
    combineReducers
} from "redux"
import thunk from "redux-thunk";
import { authReducer } from "./Auth/auth.reducer";
import { feedsReducer } from "./Feeds/feed.reducer";

const rootReducer = combineReducers({
    auth: authReducer,
    feed: feedsReducer
}) 




//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(rootReducer , applyMiddleware(thunk));