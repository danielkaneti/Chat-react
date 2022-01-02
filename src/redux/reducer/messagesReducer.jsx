import { SEND }  from '../action/messagesAction';

const initState = {
    messages: [
        {msg: 'Hello', time: 1641127461939, sender: {id: '1', name: 'lee levy'}, receiver: {id: '2', name: 'daniel kaneti'}},
        {msg: 'World', time: 1641124462939, sender: {id: '2', name: 'daniel kaneti'}, receiver: {id: '1', name: 'lee levy'}}
        /*
        {msg: 'Hi', time: 4561895654, sender: 'A', receiver: 'B'},
        {msg: 'Bay', time: 4561895654, sender: 'B', receiver: 'A'}
        */
    ]
}

const messageReducer=(state = initState, action) =>{
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

export default messageReducer