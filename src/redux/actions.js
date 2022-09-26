import {createAction} from "@reduxjs/toolkit"

export const logIn = createAction("LOG_IN")
export const logInFailure = createAction("LOG_IN_FAILURE")
export const logOut = createAction("LOG_OUT")
export const sendAuthData = createAction("SEND_AUTH_DATA")
export const sendRegData = createAction("SEND_REG_DATA")

export const saveDataCard = createAction("SAVE_DATA_CARD")
export const fetchDataCard = createAction("FETCH_DATA_CARD")
export const fetchDataCardFailure = createAction("FETCH_DATA_CARD_FAILURE")
export const sendDataCard = createAction("SEND_DATA_CARD")
export const sendDataCardFailure = createAction("SEND_DATA_CARD_FAILURE")

export const fetchAddressList = createAction("FETCH_ADDRESS_LIST")
export const fetchAddressListFailure = createAction("FETCH_ADDRESS_LIST_FAILURE")
export const saveAddressList = createAction("SAVE_ADDRESS_LIST")

export const fetchRoute = createAction("FETCH_ROUTE")
export const saveCoordinates = createAction("SAVE_COORDINATES")
export const fetchRouteFailure = createAction("FETCH_ROUTE_FAILURE")