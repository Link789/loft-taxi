import {ProfileReducer} from './profileReducer';
import {SaveDataCard} from "../../actions";

test('profileReducer SaveDataCard', () => {
    let state;
    state = ProfileReducer({cardNumber: '',cardOwner: '',cardMonthYear: '',cardCVC: ''},
        SaveDataCard({cardNumber: '1223 4321 5678 3456', cardOwner: 'Lanin Vitaly', cardMonthYear: '02/29', cardCVC: '114'})
    );
    expect(state).toEqual({cardNumber: '1223 4321 5678 3456', cardOwner: 'Lanin Vitaly', cardMonthYear: '02/29', cardCVC: '114'});
});