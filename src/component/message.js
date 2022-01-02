


import React from 'react';
import styled from 'styled-components'

function MessageCmp({key, message, sender, time, isMyMessage}) {
    const ContainerCmp = isMyMessage ? MyContanir : OtherContanir;

    return (
        <ContainerCmp key={key}>
            <div>
                <Sender>{sender?.name}</Sender>:
                <Message>{message}</Message>
            </div>
            <div>
                <Time>{new Date(time).toLocaleTimeString()}</Time>
            </div>
        </ContainerCmp>
    )
}

export default MessageCmp



const MyContanir = styled.div`
    direction: 'rlt';
    display: 'flex';
    justify-content: 'space-between';
    align-items: 'center';
`
const OtherContanir = styled(MyContanir)`
    direction: 'lrt';
`

const Sender = styled.div`
   font-weight: 'bold';
`
const Time = styled.div`
   color: '#CCC';
`

const MyMessage = styled.div`
    color: 'red';    
`;


const MessageElement=styled.p`
width: fit-content,
padding:15px;
border-radius:8px;
margin:10px;
mun-width:60px;
padding-bottom:26px;
position:reative;
text-align:rigth
`;


const Sender=styled(MessageElement)`
margin-left:auto;
background-color:#dcf8c6;

`;const Reciever=styled(MessageElement)`
margin-left:whitesmoke;
text-align:left

`;