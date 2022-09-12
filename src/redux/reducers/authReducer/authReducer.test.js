import {AuthReducer} from './authReducer';
import {LogIn, LogOut, SendAuthData} from "../../actions";

test('authReducer LogIn', () => {
    let state;
    state = AuthReducer(
        {isLoggedIn: false, email: 'test', password: 'test'},
        LogIn(true)
    );
    expect(state).toEqual({isLoggedIn: true, email: 'test', password: 'test'});
});

test('authReducer LogOut', () => {
    let state;
    state = AuthReducer(
        {isLoggedIn: true, email: 'test', password: 'test'},
        LogOut()
    );

    expect(state).toEqual({isLoggedIn: false, email: '', password: ''});
});

test('authReducer SendAuthData', () => {
    let state;
    state = AuthReducer(
        {isLoggedIn: false, email: '', password: ''},
        SendAuthData({email:'test',password:'test'})
    );

    expect(state).toEqual({isLoggedIn: false, email: 'test', password: 'test'});
});