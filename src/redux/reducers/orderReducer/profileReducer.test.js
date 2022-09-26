import {orderReducer} from './orderReducer'
import {saveDataCard} from "../../actions"

test('orderReducer SaveDataCard', () => {
    let state;
    state = orderReducer({cardNumber: '',cardOwner: '',cardMonthYear: '',cardCVC: ''},
        saveDataCard({cardNumber: '1223 4321 5678 3456', cardOwner: 'Lanin Vitaly', cardMonthYear: '02/29', cardCVC: '114'})
    )
    expect(state).toEqual({cardNumber: '1223 4321 5678 3456', cardOwner: 'Lanin Vitaly', cardMonthYear: '02/29', cardCVC: '114'})
})