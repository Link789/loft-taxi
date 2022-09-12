import {combineReducers} from 'redux'
import {AuthReducer} from "../authReducer/authReducer";
import {RegReducer} from "../regReducer/regReducer";
import {ProfileReducer} from "../profileReducer/profileReducer";
export const rootReducers = combineReducers({
    authContext: AuthReducer,
    regContext: RegReducer,
    profileContext: ProfileReducer
})