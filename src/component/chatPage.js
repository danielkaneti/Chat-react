import React, { useState, useEffect } from "react";
import styled from 'styled-components'
import { Avatar,IconButton } from '@material-ui/core';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import MicIcon from '@material-ui/icons/Mic'
import AttachFileIcon from '@material-ui/icons/AttachFile'
import MessageCmp from './message'
import {useDispatch, useSelector} from 'redux'
import  {sendMessageAction} from '../redux/action/messagesAction';

const ChatPage = ({user, userActive}) => {
    const allMessage = useSelector((state) => 
        state.messages
            .filter(({msg, time, sender, receiver}) => {
                return ( 
                    [sender?.id ?? null, receiver?.id ?? null].includes(userActive?.id) || 
                    [sender?.id ?? null, receiver?.id ?? null].includes(user?.id) 
                )
            })
            .sort(({time: t1}, {time: t2}) => t1 - t2)
    );


    const [userSeleced,setUserSelected] = useState({});
    const [input,setInput] = useState("")
    const dispatch = useDispatch();

    useEffect(() => {
        setUserSelected(user.user);
        console.log(user);
      }, [user]);  
      
    const ShowMassegw = () => {
        return allMessage.map(({msg, time, sender, receiver}) => (    
                <MessageCmp 
                    key={time}
                    sender={sender}
                    message={msg}
                    time={time} 
                    isMyMessage={sender?.id === userActive?.id}
                />
            ) 
         )
    }

    const sendMessege=(e)=> {
        e.preventDefault();
        dispatch(sendMessageAction(userActive, user, input));
        setInput('');
    }

    return (
        <Container>
           <Header>
               <Avatar/>
               <HeaderInfo>
                   <p>{userSeleced.name}</p>
                   <p>Last sine</p>
               </HeaderInfo>
               <IconButton>
                <AttachFileIcon/>
               </IconButton>

           </Header>
           <MesgageContanir>
                {ShowMassegw}
           </MesgageContanir>
           <InputCOntanir>
                <InsertEmoticonIcon/>
                <Input  onchange={(e)=>setInput(e.target.value)}/>
                <button hidden onclick={sendMessege} disabled={!input}/>
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

