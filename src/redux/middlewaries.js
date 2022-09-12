import {serverActionAuth, serverActionRegister, serverActionSaveDataCard} from "../config/Const"
import {SAVE_DATA_CARD, SEND_AUTH_DATA, SEND_REG_DATA} from "./types"
import {LogIn, SendAuthData, SaveDataCard} from "./actions"
import {fetchPOST} from "../api";

export const authenticate = (store) => (next) => (action) => {
    const setDataAuth = (store, data) => {
        store.dispatch(LogIn(data.success))
        if (data.success)
            localStorage.setItem('authToken', data.token)
    }
    if (action.type === SEND_AUTH_DATA)
        fetchPOST(serverActionAuth, action.payload, data => setDataAuth(store, data))
    next(action)
}

export const registration = (store) => (next) => (action) => {
    const setDataReg = (store, action, data) => {
        if (data.success) {
            const {email, password} = action.payload
            localStorage.setItem('authToken', data.token)
            store.dispatch(SendAuthData({email, password}))
            store.dispatch(LogIn(data.success))
        }
    }
    if (action.type === SEND_REG_DATA) {
        fetchPOST(serverActionRegister, action.payload, data => setDataReg(store, action, data))
    }
    next(action)
}

export const saveDataCard = (store) => (next) => (action) => {
    const setDataCard = (store, action, data) => {
        if (data.success)
            localStorage.setItem('dataCard', JSON.stringify(action.payload))
    }
    if (action.type === SAVE_DATA_CARD) {
        fetchPOST(serverActionSaveDataCard, action.payload, data => setDataCard(store, action, data))
    }
    next(action)
}



