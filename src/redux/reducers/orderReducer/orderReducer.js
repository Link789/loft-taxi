import {fetchAddressListFailure, fetchRouteFailure, saveAddressList, saveCoordinates} from "../../actions"
import {createReducer} from "@reduxjs/toolkit"

const initialState = {
    addresses: [],
    coordinates: [],
    error: ""
}

export const orderReducer = createReducer(initialState, {
    [fetchAddressListFailure.type]: (state, {payload}) => {
        return {addresses: [], coordinates: [], ...payload}
    },
    [saveAddressList.type]: (state, {payload}) => {
        return {...state, ...payload}
    },
    [saveCoordinates.type]: (state, {payload}) => {
        return {...state, coordinates: payload}
    },
    [fetchRouteFailure.type]: (state, {payload}) => {
        return {addresses: [], coordinates: [], ...payload}
    },
})