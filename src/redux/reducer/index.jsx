import { combineReducers, createStore } from 'redux';
import { userReducer } from './userReducer';
import {messagesReducer} from './messagesReducer';


const rootReducer = combineReducers({
    users: userReducer,
    messages: messagesReducer
});

const devtoolExtention = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export const store = createStore(rootReducer, devtoolExtention);