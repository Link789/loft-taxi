import {logIn, logInFailure, logOut, sendAuthData, sendRegData} from "../../actions"
import {createReducer} from "@reduxjs/toolkit"

const authData = localStorage.getItem('authData')

const initialState = {
    email: authData && authData.length > 0 ? JSON.parse(authData).email : "",
    password: authData && authData.length > 0 ? JSON.parse(authData).password : "",
    isLoggedIn: authData && authData.length > 0 ? JSON.parse(authData).isLoggedIn : false,
    token: authData && authData.length > 0 ? JSON.parse(authData).token : "",
    error: ""
}

export const authReducer = createReducer(initialState, {
    [sendAuthData.type]: (state, {payload}) => {
        return {...state, ...payload}
    },
    [sendRegData.type]: (state, {payload}) => {
        return {...state, ...payload}
    },
    [logOut.type]: (state) => {
        state.email = ""
        state.password = ""
        state.isLoggedIn = false
        state.token = ""
        state.error = ""
    },
    [logIn.type]: (state, {payload}) => {
        return {...state, ...payload}
    },
    [logInFailure.type]: (state, {payload}) => {
        return {...state, ...payload, isLoggedIn: false, token: ""}
    },
})

