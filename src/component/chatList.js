import React from 'react';
import styled from 'styled-components'
import {Avatar} from '@material-ui/core'





// onClick={(e)=>onSelected(e,avatarId)}
const ChatList = ({name,onSelected,userSelected}) => {



    return (
        <div onClick={(e)=>onSelected(e,userSelected)} >
           < Container>
           <UseAvatar/>
           <p>{name}</p>
         
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
