import {saveDataCard} from "../../actions";
import {handleActions} from "redux-actions";
import {combineReducers} from "redux";

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

const cardNumber = handleActions({
    [saveDataCard]: (_state, {payload}) => payload.cardNumber
}, initialState.cardNumber)

const cardOwner = handleActions({
    [saveDataCard]: (_state, {payload}) => payload.cardOwner
}, initialState.cardOwner)

const cardMonthYear = handleActions({
    [saveDataCard]: (_state, {payload}) => payload.cardMonthYear
}, initialState.cardMonthYear)

const cardCVC = handleActions({
    [saveDataCard]: (_state, {payload}) => payload.cardCVC
}, initialState.cardCVC)

export const profileReducer = combineReducers({
    cardNumber,
    cardOwner,
    cardMonthYear,
    cardCVC
})