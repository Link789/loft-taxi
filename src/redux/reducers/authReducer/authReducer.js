import {logIn, logOut, sendAuthData, sendRegData} from "../../actions";
import {combineReducers} from "redux";
import {handleActions} from "redux-actions";

const authData = localStorage.getItem('authData')

const initialState = {
    email: authData && authData.length > 0 ? JSON.parse(authData).email : "",
    password: authData && authData.length > 0 ? JSON.parse(authData).password : "",
    isLoggedIn: authData && authData.length > 0 ? JSON.parse(authData).isLoggedIn : false,
    token: authData && authData.length > 0 ? JSON.parse(authData).token : "",
    error: ""
}
const email = handleActions({
    [sendAuthData]: (_state, {payload}) => payload.email,
    [sendRegData]: (_state, {payload}) => payload.email,
    [logOut]: () => "",
}, initialState.email)

const password = handleActions({
    [sendAuthData]: (_state, {payload}) => payload.password,
    [sendRegData]: (_state, {payload}) => payload.password,
    [logOut]: () => "",
}, initialState.password)

const isLoggedIn = handleActions({
    [logIn]: (_state, {payload}) => payload.isLoggedIn,
    [logOut]: () => false,
}, initialState.isLoggedIn)

const token = handleActions({
    [logIn]: (_state, {payload}) => payload.token,
    [logOut]: () => "",
}, initialState.token)

const error = handleActions({
    [logIn]: (_state, {payload}) => payload.error,
    [logOut]: () => "",
}, initialState.error)

export const authReducer = combineReducers({
    email,
    password,
    isLoggedIn,
    token,
    error
})
