import { combineReducers } from 'redux';
import usersReducer from './userReducer';


const rootReducer = combineReducers({
    user:usersReducer,
    message:messagesReducer
    
});

export default rootReducer;