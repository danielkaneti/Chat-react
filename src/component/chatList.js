import React from 'react';
import styled from 'styled-components'
import {Avatar} from '@material-ui/core'

const ChatList = ({user, userSelected, onSelected}) => {
    return (
        <div onClick={onSelected} >
           <Container>
                <UseAvatar src={user.img}/>
                <p>{user.name}</p>               
           </Container>
        </div>
    )
}

export default ChatList

const Container=styled.div`
display: flex;
align-items: center;
cursor: pointer;
padding: 15px;
word-break: break-word;
:hover{
    background-color: #e9eaeb;

}
`

const UseAvatar=styled(Avatar)`
margin: 5px;
margin-right:15px;
`
