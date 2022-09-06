import {LOG_IN, LOG_OUT} from "./types"

export const LogIn =()=>{
    return{
        type:LOG_IN,
        payload:true
    }
}

export const LogOut =()=>{
    return{
        type:LOG_OUT,
        payload:false
    }
}