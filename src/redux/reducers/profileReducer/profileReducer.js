import {saveDataCard} from "../../actions"
import {createReducer} from "@reduxjs/toolkit"

const lsDataCard = localStorage.getItem('dataCard')
const dataCard = lsDataCard && lsDataCard.length > 0 ? JSON.parse(lsDataCard) : {
    cardNumber: '',
    cardOwner: '',
    cardMonthYear: '',
    cardCVC: ''
}
const initialState = {
    cardNumber: dataCard.cardNumber,
    cardOwner: dataCard.cardOwner,
    cardMonthYear: dataCard.cardMonthYear,
    cardCVC: dataCard.cardCVC,
}

export const profileReducer = createReducer(initialState, {
    [saveDataCard.type]: (state, {payload}) => {
        state.cardNumber = payload.cardNumber
        state.cardOwner = payload.cardOwner
        state.cardMonthYear = payload.cardMonthYear
        state.cardCVC = payload.cardCVC
    }
})
