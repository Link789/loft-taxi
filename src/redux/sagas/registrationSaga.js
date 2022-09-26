import {call, put, takeEvery} from 'redux-saga/effects'
import {fetchDataCard, logIn, logInFailure, sendRegData} from "../actions"
import {fetchPost} from "../../api"
import {SERVER} from "../../config/consts";

export function* registrationSaga() {
    yield takeEvery(sendRegData.type, handlerSaga)
}

function* handlerSaga({payload}) {
    try {
        const result = yield call(fetchPost, SERVER.REGISTR, payload)
        const {success, error, token} = result

        localStorage.setItem('authData', JSON.stringify({
            ...payload,
            isLoggedIn: success,
            token: success ? token : ""
        }))

        if (success) {
            yield put(logIn({isLoggedIn: success, token}))
            yield put(fetchDataCard(token))
        } else yield put(logInFailure({error}))

    } catch (error) {
        yield put(logInFailure({error}))
    }
}