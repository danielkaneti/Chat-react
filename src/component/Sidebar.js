
import React from 'react';
import styled from 'styled-components'
import {Avatar,IconButton} from '@material-ui/core'
import ChatList from './chatList';





const Sidebar = ({users,handleSelected}) => {
    // const handleSelected=(e,userSelected)=>{
    //     userSelecte(userSelected)


    // }

    return (
        <Container>
            <Header>
            <UseAvatar/>
            <IconContainer>
                <IconButton>
                </IconButton>

            </IconContainer>
            </Header>
        {users.contacts.map(contact =>(
            <ChatList name={contact.name} userSelected={contact} onSelected={handleSelected}/>
        ))}
         
        </Container>
    )
}

export default Sidebar

const Container=styled.div`
flex:0.45;
border-right: 1px solid whitesmoke;
height: 100vh;
min-width:35px;
`

const IconContainer=styled.div`

`
const Header=styled.div`
display: flex;
position: sticky;
top:0;
background: white;
z-index:1;
justify-content: space-between;
padding: 15px;
border-bottom:1px solid whitesmoke;


`
const UseAvatar=styled(Avatar)`
margin: 10px;
cursor: pointer;
:hover{
    opacity:0.8;
}
`
