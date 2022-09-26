import {fetchDataCardFailure, saveDataCard, sendDataCardFailure} from "../../actions"
import {createReducer} from "@reduxjs/toolkit"

const initialState = {
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvc: "",
    id: "",
    cardIsCorrect: false,
    error: ""
}

export const profileReducer = createReducer(initialState, {
    [saveDataCard.type]: (state, {payload}) => {
        const {cardNumber, cardName, expiryDate, cvc} = payload
        const cardIsCorrect = (cardNumber !== "" && cardName !== "" && expiryDate !== "" && cvc !== "")
        return {...state, ...payload, cardIsCorrect}
    },
    [fetchDataCardFailure.type]: (state, {payload}) => {
        return {cardNumber: "", cardName: "", expiryDate: "", cvc: "", id: "", cardIsCorrect: false, ...payload}
    },
    [sendDataCardFailure.type]: (state, {payload}) => {
        return {cardNumber: "", cardName: "", expiryDate: "", cvc: "", id: "", ...state, ...payload}
    }

})