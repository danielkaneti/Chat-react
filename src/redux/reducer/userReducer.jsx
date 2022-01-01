const initState = {
    userA: "",
    userB: "",
    user:{}
}

const userReducer=(state=initState,action) =>{
    switch (action.type) {
        
    case "SIGN_IN":
        return {
          user: action.payload.user,
        };
      case "ERROR_SIGN_IN":
        return {
          user: {},
        };
      case "SIGN_OUT":
        return {
          user: {},
        };
      default:
        return state;
    
    } 

}
export default userReducer