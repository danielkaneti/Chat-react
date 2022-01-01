import React ,{useState}from 'react';
import styled from 'styled-components'
import ChatPage from '../component/chatPage';
import Sidebar from '../component/Sidebar'
import  {users}  from '../dummyData';



function Chat() {
    const [userClick,setUserclick] =useState('');
    const handleSelected=(e,userSelected)=>{
        setUserclick(userSelected)

    }
 
    return (
        <Header>
            <Sidebar users={users} handleSelected={handleSelected}/>
            <Chatontanir>
            <ChatPage user={userClick}/>
            </Chatontanir>
        </Header>
    )
}

export default Chat

const Header=styled.div`
display: flex;
`
const Chatontanir=styled.div`
flex:1;


`
