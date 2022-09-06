import {combineReducers} from 'redux'
import {AuthReducer} from "./AuthReducer";
export const rootReducers = combineReducers({
    authContext: AuthReducer
})