import {RegReducer} from './regReducer';
import {SendRegData} from "../../actions";

test('regReducer SendRegData', () => {
    let state;
    state = RegReducer(
        {
            email:'',
            password:'',
            name:'',
            surname:''
        },
        SendRegData({email:'test',password:'test', name:'name', surname:'surname'})
    );

    expect(state).toEqual({email:'test',password:'test', name:'name', surname:'surname'});
});