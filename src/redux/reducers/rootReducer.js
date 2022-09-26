import {combineReducers} from 'redux'
import {authReducer} from "./authReducer/authReducer"
import {profileReducer} from "./profileReducer/profileReducer"
export const rootReducer = combineReducers({
    authContext: authReducer,
    profileContext: profileReducer
})