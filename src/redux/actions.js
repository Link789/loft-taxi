import {LOG_IN, LOG_OUT, SAVE_DATA_CARD, SEND_AUTH_DATA, SEND_REG_DATA} from "./types"

export const LogIn = (payload) => {
    return {
        type: LOG_IN,
        payload: {isLoggedIn: payload}
    }
}

export const LogOut = () => {
    return {
        type: LOG_OUT,
        payload: false
    }
}

export const SendAuthData = (authData) => {
    return {
        type: SEND_AUTH_DATA,
        payload: authData
    }
}

export const SendRegData = (regData) => {
    return {
        type: SEND_REG_DATA,
        payload: regData
    }
}

export const SaveDataCard = (dataCard) => {
    return {
        type: SAVE_DATA_CARD,
        payload: dataCard
    }
}

