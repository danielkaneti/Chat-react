import {LOGIN, SEND_TO_USER, USER_TYPE} from '../action/userAction';

const initState = {
    userA: {
      connectedUser: {
        id: '1',
        img:'https://i.pinimg.com/originals/09/24/23/0924235beb6d7ec8fa448a7b416b2530.jpg',
        name: 'lee levy',
      },
      activeUser: null
    },
    userB: {
      connectedUser: { 
        id: '2',
        name: 'daniel kaneti',
        img:'https://i.pinimg.com/564x/04/69/a8/0469a8862b6e1071e2ba423afc63ea25.jpg',
      },
      activeUser: null
    },    
    userList: [
      {
        id: '1',
        img:'https://i.pinimg.com/originals/09/24/23/0924235beb6d7ec8fa448a7b416b2530.jpg',
        name: 'lee levy',
      },
      { 
        id: '2',
        name: 'daniel kaneti',
        img:'https://i.pinimg.com/564x/04/69/a8/0469a8862b6e1071e2ba423afc63ea25.jpg',
      },
      { 
        id: '3',
        name: 'matan elkabes',
        img:'https://i.pinimg.com/564x/47/b8/ed/47b8ed5237dc285fdff3d0fa86629a65.jpg',
      }
    ]
}

export const userReducer = (state = initState, action) => {
    switch (action.type) {      
      case LOGIN: {
          const {userType, user} = action;
          
          return {
            ...state,
            [userType]: {
              ...state[userType],
              connectedUser: user,
            }
          };
      }

      case SEND_TO_USER: {      
          const {userType, user} = action;
          
          return {
            ...state,
            [userType]: {
              ...state[userType],
              activeUser: user,
            }
          }
        }
  
      default:
        return state;  
    } 
}