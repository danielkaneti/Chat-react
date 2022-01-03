import Chat from './page/Chat'
import React from 'react';
import {USER_TYPE} from './redux/action/userAction';
import styled from 'styled-components'



function App() {
  return (
    <div className="App">
      <Container>
          <ChatContainer>     
            <Chat userType={USER_TYPE.USER_A}/>
          </ChatContainer>

          <ChatContainer>
            <Chat userType={USER_TYPE.USER_B}/>
          </ChatContainer>
      </Container>
    </div>
  );
}

export default App;

const Container=styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2px;
  background: #000000;
`

const ChatContainer= styled.div`
  width: 100%;
  border: 4px solid whitesmoke;
`