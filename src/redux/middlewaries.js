import {SERVER} from "../config/consts"
import {logIn, logOut, saveDataCard, sendAuthData, sendRegData} from "./actions"
import {fetchPOST} from "../api"

export const authenticate = (store) => (next) => (action) => {

    const setDataAuth = (store, payload, {success, token, error}) => {
        store.dispatch(logIn({isLoggedIn: success, token: success ? token : "", error: success ? "" : error}))
        localStorage.setItem('authData', JSON.stringify({...payload, isLoggedIn: success, token: success ? token : ""}))
    }

    if (action.type === logOut.type)
        localStorage.setItem('authData', JSON.stringify({email: "", password: "", isLoggedIn: false, token: ""}))

    if (action.type === sendAuthData.type)
        fetchPOST(SERVER.AUTH, action.payload, data => setDataAuth(store, action.payload, data))

    next(action)
}

export const registration = (store) => (next) => (action) => {

    const setDataReg = (store, payload, {success, token, error}) => {
        localStorage.setItem('authData', JSON.stringify({...payload, isLoggedIn: success, token: success ? token : ""}))
        store.dispatch(logIn({isLoggedIn: success, token: success ? token : "", error: success ? "" : error}))
    }

    if (action.type === sendRegData.type)
        fetchPOST(SERVER.REGISTR, action.payload, data => setDataReg(store, action.payload, data))

    next(action)
}

export const saveCard = (store) => (next) => (action) => {

    const setDataCard = ({success}, payload) => success && localStorage.setItem('dataCard', JSON.stringify(payload))

    if (action.type === saveDataCard.type)
        fetchPOST(SERVER.CARD, action.payload, data => setDataCard(data, action.payload))

    next(action)
}



