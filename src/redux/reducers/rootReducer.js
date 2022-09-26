import {combineReducers} from 'redux'
import {authReducer} from "./authReducer/authReducer"
import {profileReducer} from "./profileReducer/profileReducer"
import {orderReducer} from "./orderReducer/orderReducer"

export const rootReducer = combineReducers({
    authContext: authReducer,
    profileContext: profileReducer,
    orderContext: orderReducer
})