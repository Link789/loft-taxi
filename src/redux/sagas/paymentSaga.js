import {call, put, takeEvery} from 'redux-saga/effects'
import {fetchDataCard, fetchDataCardFailure, saveDataCard, sendDataCard, sendDataCardFailure} from "../actions"
import {fetchGet, fetchPost} from "../../api"
import {SERVER} from "../../config/consts"

export function* getDataCardSaga() {
    yield takeEvery(fetchDataCard.type, handlerGetDataCard)
}

export function* sendDataCardSaga() {
    yield takeEvery(sendDataCard.type, handlerSendDataCard)
}

function* handlerGetDataCard({payload}) {
    try {
        const result = yield call(fetchGet, SERVER.CARD, payload)
        const {success, error} = result
        if (result & result.success)
            success === false ? yield put(fetchDataCardFailure({error})) : yield put(saveDataCard(result))
        else yield put(fetchDataCardFailure({error}))
    } catch (error) {
        yield put(fetchDataCardFailure({error}))
    }
}

function* handlerSendDataCard({payload}) {
    try {
        const result = yield call(fetchPost, SERVER.CARD, payload)
        const {success, error} = result
        const {token} = payload
        success === true ? yield put(fetchDataCard(token)) : yield put(sendDataCardFailure({error}))
    } catch (error) {
        yield put(sendDataCardFailure({error}))
    }
}