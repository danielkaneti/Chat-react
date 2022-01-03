export const LOGIN = 'LOGIN';
export const SEND_TO_USER = 'SEND_TO_USER';
export const USER_TYPE = {
    USER_A: 'userA',
    USER_B: 'userB',
};


export const loginUserAction = (userType, userData) => {   
    return {
        type: LOGIN,
        userType: userType,
        user: userData,
    }
}

export const sendToUserAction = (userType, userData) => { 
    return {
        type: SEND_TO_USER,
        userType: userType,
        user: userData,
    }
}

