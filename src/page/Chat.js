import React ,{useState}from 'react';
import styled from 'styled-components'
import ChatPage from '../component/chatPage';
import Sidebar from '../component/Sidebar'



function Chat({userType}) {
    return (
        <Header>
            <Sidebar userType={userType}/>
            <Chatontanir>
                <ChatPage userType={userType}/>
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
