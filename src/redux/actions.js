import {createAction} from "@reduxjs/toolkit"

export const logIn = createAction("LOG_IN")
export const logOut = createAction("LOG_OUT")
export const sendAuthData = createAction("SEND_AUTH_DATA")
export const sendRegData = createAction("SEND_REG_DATA")
export const saveDataCard = createAction("SAVE_DATA_CARD")
