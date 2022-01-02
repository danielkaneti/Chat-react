
import React from 'react';
import styled from 'styled-components'
import {Avatar,IconButton} from '@material-ui/core'
import ChatList from './chatList';
import { useDispatch, useSelector } from 'react-redux'
import { sendToUserAction } from '../redux/action/userAction'

const Sidebar = ({userType}) => {
    const dispatch = useDispatch();
    const {connectedUser, activeUser, userList} = useSelector(state => {
        const connectedUser = state.users[userType]?.connectedUser;

        return {
            connectedUser,
            activeUser: state.users[userType]?.activeUser,
            userList: state.users.userList.filter(user => user.id !== connectedUser?.id),
        }
    });

    const onSelectedHandler = (user) => {
        dispatch(sendToUserAction(userType, user));    
    }

    return (
        <Container>
            <Header>
                <UseAvatar src={connectedUser?.img}/>
                <IconContainer>
                    <IconButton />                
                </IconContainer>
            </Header>

            {
                userList.map(user => (
                    <ChatList 
                        key={user.id} 
                        user={user} 
                        userSelected={activeUser} 
                        onSelected={onSelectedHandler.bind(this, user)}
                    />                    
                ))
            }         
        </Container>
    )
}

export default Sidebar;

const Container=styled.div`
flex:0.45;
border-right: 1px solid whitesmoke;
min-width:35px;
background: white;
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
