import {SEND_REG_DATA} from "../../types";

const initialState = {
    email:'',
    password:'',
    name:'',
    surname:''
}

export const RegReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_REG_DATA:
            return {...state, ...action.payload}
        default:
            return state
    }
}