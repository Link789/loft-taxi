import {SAVE_DATA_CARD} from "../../types";

const dataCard = localStorage.getItem('dataCard')
const { cardNumber,
        cardOwner,
        cardMonthYear,
        cardCVC} = dataCard && dataCard.length > 0 ? JSON.parse(dataCard) : {   cardNumber: '',
                                                                                cardOwner: '',
                                                                                cardMonthYear: '',
                                                                                cardCVC: ''}
const initialState = {
    cardNumber,
    cardOwner,
    cardMonthYear,
    cardCVC
}

export const ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_DATA_CARD:
            return {...action.payload}
        default:
            return state
    }
}