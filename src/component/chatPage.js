import React, { useState, useEffect } from "react";
import styled from 'styled-components'
import { Avatar,IconButton } from '@material-ui/core';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import MicIcon from '@material-ui/icons/Mic'
import AttachFileIcon from '@material-ui/icons/AttachFile'
import MessageCmp from './message'
import { useSelector,useDispatch } from 'react-redux'
import  {sendMessageAction} from '../redux/action/messagesAction';

const ChatPage = ({userType}) => {
    const { messages, connectedUser, activeUser } = useSelector((state) => {
        const {connectedUser, activeUser} = state.users[userType] || {};
        
        const messages = activeUser && connectedUser && state.messages.messages
        ?.filter(({msg, time, sender, receiver}) => {
            const a = sender?.id === connectedUser.id && receiver?.id === activeUser.id;
            const b = sender?.id === activeUser.id && receiver?.id === connectedUser.id;
            return a || b;
        })
        .sort(({time: t1}, {time: t2}) => t1 - t2) || [];

        return { messages, connectedUser, activeUser }
    });

    console.log(messages);


    const [input, setInput] = useState('')
    const dispatch = useDispatch();

    const handleChange = (e) => setInput(e.target.value);
      
    const getMessageListItems = () => {
        return messages.map(({msg, time, sender, receiver}, index) => (    
                <MessageCmp                 
                    index={index}
                    sender={sender}
                    message={msg}
                    time={time} 
                    isMyMessage={sender?.id === connectedUser?.id}
                />
            ) 
         )
    }

    const sendMessege=(e)=> {
        e.preventDefault();
        dispatch(sendMessageAction(connectedUser, activeUser, input));
        setInput('');
    }

    return (
        <Container>
           <Header>
               <Avatar src={activeUser?.img}/>
               <HeaderInfo>
                   <p>{activeUser?.name}</p>
                   <p>Last sine</p>
               </HeaderInfo>
               <IconButton>
                <AttachFileIcon/>
               </IconButton>
           </Header>

           <MesgageContanir>
                {getMessageListItems()}
           </MesgageContanir>
           <InputCOntanir>
                <InsertEmoticonIcon/>
                <Input value={input} onChange={handleChange} />
                <button hidden onClick={sendMessege} disabled={!input}/>
                <MicIcon/>
           </InputCOntanir>
        </Container>
    )
}

export default ChatPage
const Input =styled.input`
flex:1;
align-items:center;
padding: 10px;
position:sticky;
bottom: 0;
border-radius: 10px;

background-color:whitesmoke;
border:none;
`
const Header=styled.div`
display:flex;
align-items: space-between;
position:sticky;
background-color:white;
z-index: 100;
top:0;
padding:6px;
height: 78px;
align-items: center;
border-bottom: 1px solid whitesmoke;

`
const HeaderInfo=styled.div`
margin-left:15px;
flex:1;
>h3{
    margin-bottom: 3px;

}


`

const Container=styled.div`
align-items:space-between;

`

const MesgageContanir=styled.div   `
padding:3px;
background-color:#e9eaeb;
min-height: 90vh;

`

const InputCOntanir=styled.form   `
display: flex;
align-items: center;
padding: 15px;
bottom: 0;
position:sticky;
background-color:white;
z-index: 100;


`

