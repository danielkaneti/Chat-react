


import React from 'react';
import styled from 'styled-components'

function MessageCmp({ index, message, sender, time, isMyMessage}) {
    const ContainerCmp = isMyMessage ? MyContanir : OtherContanir;
    
    return (
        <ContainerCmp key={`${index}.${sender?.id}~${time}`}>
            <span>
                <Sender>{sender?.name}:</Sender>
                < MyMessage>{message}</ MyMessage>
            </span>
            <span>
                <Time>{new Date(time).toLocaleTimeString()}</Time>
            </span>
        </ContainerCmp>
    )
}

export default MessageCmp



const MyContanir = styled.p`
    direction: rlt;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const OtherContanir = styled(MyContanir)`
    direction: lrt;
`

const Sender = styled.span`
   font-weight: bold;
`
const Time = styled.span`
   color: #CCC;
`

const MyMessage = styled.span`
    color: red;    
`;


// const MessageElement=styled.p`
// width: fit-content,
// /* padding:15px; */
// border-radius:8px;
// margin:10px;
// min-width:60px;
// padding-bottom:26px;
// position:reative;
// text-align:rigth
// `;


// const Sender=styled(MessageElement)`
// margin-left:auto;
// background-color:#dcf8c6;

// `;
// const Reciever=styled(MessageElement)`
// margin-left:whitesmoke;
// text-align:left

// `;