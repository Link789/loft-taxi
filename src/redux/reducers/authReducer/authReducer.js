import {LOG_IN, LOG_OUT, SEND_AUTH_DATA} from "../../types";

const authData = localStorage.getItem('authData')
const {email, password} = authData && authData.length > 0 ? JSON.parse(authData) : {email: '', password: ''}
const isLoggedIn = localStorage.hasOwnProperty('isLoggedIn') ? localStorage.getItem('isLoggedIn')=='true' : false

const initialState = {
    email,
    password,
    isLoggedIn
}

export const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_AUTH_DATA:
            localStorage.setItem('authData', JSON.stringify(action.payload))
            return {...state, ...action.payload}
        case LOG_IN:
            localStorage.setItem('isLoggedIn', action.payload.isLoggedIn)
            return {...state, ...action.payload}
        case LOG_OUT:
            localStorage.setItem('isLoggedIn', action.payload)
            return {isLoggedIn: action.payload, email: "", password: ""}
        default:
            return state
    }

}