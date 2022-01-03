import { SEND }  from '../action/messagesAction';

const initState = {
    messages: []
}

export const messagesReducer = (state = initState, action) => {
    switch (action.type) {
        case SEND:    
            const { messages } = state;
            messages.push(action.message);
            
            return {
                ...state,
                messages,            
            };

        default:
            return state;    
    } 
}