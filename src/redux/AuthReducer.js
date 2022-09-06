import {LogIn, LogOut} from "./actions";

const initialState = {
    isLoggedIn: false
}

export const AuthReducer = (state=initialState, action) => {
    if(action.type)
        return {...state,isLoggedIn: action.payload}
    else
        return state
    /*switch (action.type){
        case LogIn:
            return {isLoggedIn: action.payload}
        case LogOut:
            return {isLoggedIn: action.payload}
        default: return state
        }*/

}